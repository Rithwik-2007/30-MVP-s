
import { GoogleGenAI, Type } from "@google/genai";
import { UserInputs, DesignAnalysis, AuditReport, StarterCodeFile } from "../types";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateDesignAnalysis = async (inputs: UserInputs): Promise<DesignAnalysis> => {
  const ai = getAI();
  const prompt = `Act as a senior system architect. Analyze the following project requirements and provide 2-3 alternative system flows, a recommendation, and a module breakdown.
  
  Requirements:
  - Product Goal: ${inputs.goal}
  - Target Users: ${inputs.users}
  - Constraints: ${inputs.constraints}
  - Non-goals: ${inputs.nonGoals}
  - Expected Lifespan: ${inputs.lifespan}
  
  Provide a detailed technical breakdown for each section.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          flows: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                name: { type: Type.STRING },
                architectureOverview: { type: Type.STRING },
                tradeOffs: { type: Type.ARRAY, items: { type: Type.STRING } },
                risks: { type: Type.ARRAY, items: { type: Type.STRING } },
                idealUseCase: { type: Type.STRING }
              },
              required: ['id', 'name', 'architectureOverview', 'tradeOffs', 'risks', 'idealUseCase']
            }
          },
          recommendedFlowId: { type: Type.STRING },
          recommendationReasoning: { type: Type.STRING },
          moduleBreakdown: {
            type: Type.OBJECT,
            properties: {
              frontend: { type: Type.STRING },
              backend: { type: Type.STRING },
              apis: { type: Type.STRING },
              dataHandling: { type: Type.STRING },
              security: { type: Type.STRING }
            },
            required: ['frontend', 'backend', 'apis', 'dataHandling', 'security']
          }
        },
        required: ['flows', 'recommendedFlowId', 'recommendationReasoning', 'moduleBreakdown']
      }
    }
  });

  return JSON.parse(response.text || '{}');
};

export const auditSystem = async (inputs: UserInputs, analysis: DesignAnalysis): Promise<AuditReport> => {
  const ai = getAI();
  const prompt = `Act as a System Auditor. Review the following design against the original user constraints. 
  Flag unnecessary complexity, potential UX risks, safety concerns, and ethical implications.
  
  Original Requirements: ${JSON.stringify(inputs)}
  Design Proposal: ${JSON.stringify(analysis)}
  
  Be critical but constructive. Suggest specific simplifications.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          issues: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                type: { type: Type.STRING, description: "One of: complexity, ux, safety, ethical, performance" },
                severity: { type: Type.STRING, description: "One of: low, medium, high" },
                description: { type: Type.STRING },
                suggestion: { type: Type.STRING }
              },
              required: ['type', 'severity', 'description', 'suggestion']
            }
          },
          overallSimplification: { type: Type.STRING }
        },
        required: ['issues', 'overallSimplification']
      }
    }
  });

  return JSON.parse(response.text || '{}');
};

export const generateStarterCode = async (inputs: UserInputs, analysis: DesignAnalysis): Promise<StarterCodeFile[]> => {
  const ai = getAI();
  const recommendedFlow = analysis.flows.find(f => f.id === analysis.recommendedFlowId) || analysis.flows[0];
  const prompt = `Generate modular starter code for the following approved system design.
  Target Architecture: ${recommendedFlow.name}
  Breakdown: ${JSON.stringify(analysis.moduleBreakdown)}
  
  Rules:
  - Generate a set of files representing the core skeleton.
  - Each file must include a header comment stating its responsibility.
  - Avoid overengineering; prioritize clarity.
  - Provide realistic but skeleton-level implementations.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            path: { type: Type.STRING },
            responsibility: { type: Type.STRING },
            content: { type: Type.STRING }
          },
          required: ['path', 'responsibility', 'content']
        }
      }
    }
  });

  return JSON.parse(response.text || '[]');
};
