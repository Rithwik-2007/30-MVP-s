
import React, { useState, useCallback } from 'react';
import { UserInputs, DesignAnalysis, AuditReport, StarterCodeFile } from './types';
import { generateDesignAnalysis, auditSystem, generateStarterCode } from './services/geminiService';

// Components
import InputForm from './components/InputForm';
import DesignView from './components/DesignView';
import AuditorReport from './components/AuditorReport';
import CodeExplorer from './components/CodeExplorer';

enum WorkflowStep {
  INPUT = 'INPUT',
  ANALYSIS = 'ANALYSIS',
  AUDIT = 'AUDIT',
  CODE = 'CODE'
}

const App: React.FC = () => {
  const [step, setStep] = useState<WorkflowStep>(WorkflowStep.INPUT);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState<UserInputs | null>(null);
  const [analysis, setAnalysis] = useState<DesignAnalysis | null>(null);
  const [audit, setAudit] = useState<AuditReport | null>(null);
  const [code, setCode] = useState<StarterCodeFile[] | null>(null);

  const handleStartDesign = async (formData: UserInputs) => {
    setLoading(true);
    setInputs(formData);
    try {
      const result = await generateDesignAnalysis(formData);
      setAnalysis(result);
      setStep(WorkflowStep.ANALYSIS);
    } catch (error) {
      console.error("Error generating design:", error);
      alert("Failed to generate design. Please check your API key and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleRunAudit = async () => {
    if (!inputs || !analysis) return;
    setLoading(true);
    try {
      const result = await auditSystem(inputs, analysis);
      setAudit(result);
      setStep(WorkflowStep.AUDIT);
    } catch (error) {
      console.error("Error running audit:", error);
      alert("Audit failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleApproveAndGenerate = async () => {
    if (!inputs || !analysis) return;
    setLoading(true);
    try {
      const result = await generateStarterCode(inputs, analysis);
      setCode(result);
      setStep(WorkflowStep.CODE);
    } catch (error) {
      console.error("Error generating code:", error);
      alert("Code generation failed.");
    } finally {
      setLoading(false);
    }
  };

  const renderProgress = () => {
    const steps = [
      { id: WorkflowStep.INPUT, label: 'Requirements' },
      { id: WorkflowStep.ANALYSIS, label: 'Architecture' },
      { id: WorkflowStep.AUDIT, label: 'Audit' },
      { id: WorkflowStep.CODE, label: 'Implementation' }
    ];

    return (
      <div className="flex items-center justify-center space-x-4 mb-8">
        {steps.map((s, idx) => (
          <React.Fragment key={s.id}>
            <div className={`flex items-center ${step === s.id ? 'text-blue-600 font-bold' : 'text-slate-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 border-2 ${step === s.id ? 'border-blue-600 bg-blue-50' : 'border-slate-300'}`}>
                {idx + 1}
              </div>
              <span className="hidden sm:inline">{s.label}</span>
            </div>
            {idx < steps.length - 1 && <div className="h-px w-8 bg-slate-300"></div>}
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            SystemArchitect <span className="text-blue-600">Pro</span>
          </h1>
          <p className="mt-3 text-lg text-slate-500 max-w-2xl mx-auto">
            Professional system design and architectural analysis for robust software engineering.
          </p>
        </header>

        {renderProgress()}

        <main className="bg-white shadow-xl rounded-2xl p-8 border border-slate-200">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mb-4"></div>
              <p className="text-slate-600 font-medium">Architect is thinking...</p>
            </div>
          ) : (
            <>
              {step === WorkflowStep.INPUT && (
                <InputForm onSubmit={handleStartDesign} />
              )}
              {step === WorkflowStep.ANALYSIS && analysis && (
                <DesignView 
                  analysis={analysis} 
                  onNext={handleRunAudit}
                  onBack={() => setStep(WorkflowStep.INPUT)}
                />
              )}
              {step === WorkflowStep.AUDIT && audit && analysis && (
                <AuditorReport 
                  report={audit} 
                  onApprove={handleApproveAndGenerate}
                  onBack={() => setStep(WorkflowStep.ANALYSIS)}
                />
              )}
              {step === WorkflowStep.CODE && code && (
                <CodeExplorer 
                  files={code} 
                  onRestart={() => {
                    setStep(WorkflowStep.INPUT);
                    setAnalysis(null);
                    setAudit(null);
                    setCode(null);
                  }}
                />
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
