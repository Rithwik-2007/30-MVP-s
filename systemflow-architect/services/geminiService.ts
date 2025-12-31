
import { GoogleGenAI, Type } from "@google/genai";
import { ProjectInputs, ArchitectureAnalysis } from "../types";
import { PROMPT_TEMPLATE } from "../constants";

export async function analyzeArchitecture(inputs: ProjectInputs): Promise<ArchitectureAnalysis> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const filledPrompt = PROMPT_TEMPLATE
    .replace(/\${appDescription}/g, inputs.appDescription)
    .replace(/\${constraints.teamSize}/g, inputs.constraints.teamSize)
    .replace(/\${constraints.timeframe}/g, inputs.constraints.timeframe)
    .replace(/\${constraints.budget}/g, inputs.constraints.budget)
    .replace(/\${constraints.platforms.join\(', '\)}/g, inputs.constraints.platforms.join(', '))
    .replace(/\${constraints.failureTolerance}/g, inputs.constraints.failureTolerance)
    .replace(/\${intent.evolution}/g, inputs.intent.evolution)
    .replace(/\${intent.scaleScenarios}/g, inputs.intent.scaleScenarios)
    .replace(/\${intent.futureFeatures}/g, inputs.intent.futureFeatures)
    .replace(/\${nonNegotiables}/g, inputs.nonNegotiables);

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: filledPrompt,
      config: {
        responseMimeType: "application/json",
        thinkingConfig: { thinkingBudget: 16000 }
      },
    });

    const result = JSON.parse(response.text);
    return result as ArchitectureAnalysis;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to analyze architecture. Please check your inputs or try again later.");
  }
}
