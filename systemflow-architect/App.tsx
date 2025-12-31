
import React, { useState } from 'react';
import { ProjectInputs, EvolutionSpeed, ArchitectureAnalysis } from './types';
import InputSection from './components/InputSection';
import AnalysisOutput from './components/AnalysisOutput';
import { analyzeArchitecture } from './services/geminiService';

const INITIAL_INPUTS: ProjectInputs = {
  appDescription: '',
  constraints: {
    teamSize: '',
    timeframe: '',
    budget: '',
    platforms: ['Web'],
    failureTolerance: '',
  },
  intent: {
    evolution: EvolutionSpeed.MODERATE,
    scaleScenarios: '',
    futureFeatures: '',
  },
  nonNegotiables: '',
};

const App: React.FC = () => {
  const [inputs, setInputs] = useState<ProjectInputs>(INITIAL_INPUTS);
  const [analysis, setAnalysis] = useState<ArchitectureAnalysis | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await analyzeArchitecture(inputs);
      setAnalysis(result);
      // Scroll to top of results
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-500 rounded flex items-center justify-center font-bold text-xl">S</div>
            <h1 className="text-xl font-bold tracking-tight">SystemFlow Architect</h1>
          </div>
          <div className="hidden sm:flex text-slate-400 text-sm gap-6">
            <span>Thinking Tool</span>
            <span>Non-Generative</span>
            <span>Authored by User</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Sidebar / Input Area */}
        <aside className="w-full lg:w-96 flex-shrink-0">
          <div className="sticky top-24">
            <h2 className="text-lg font-bold mb-4 text-slate-800">Design Parameters</h2>
            <InputSection
              inputs={inputs}
              setInputs={setInputs}
              onSubmit={handleAnalyze}
              isLoading={loading}
            />
            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">
                {error}
              </div>
            )}
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-grow">
          {!analysis && !loading && (
            <div className="bg-slate-100 border-2 border-dashed border-slate-200 rounded-3xl h-[600px] flex flex-col items-center justify-center p-8 text-center">
              <div className="text-4xl mb-4">📐</div>
              <h2 className="text-2xl font-bold text-slate-600 mb-2">Build Your Blueprint</h2>
              <p className="text-slate-500 max-w-md">
                Enter your application requirements and constraints in the sidebar to visualize multiple system flows and trade-offs.
              </p>
            </div>
          )}

          {loading && (
            <div className="flex flex-col items-center justify-center h-[600px] space-y-6">
              <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
              <div className="text-center">
                <p className="text-lg font-bold text-slate-700">Gemini is analyzing architectural constraints...</p>
                <p className="text-slate-500">Mapping causality and future pain points.</p>
              </div>
            </div>
          )}

          {analysis && !loading && <AnalysisOutput analysis={analysis} />}
        </div>
      </main>

      {/* Footer / Authority Reminder */}
      <footer className="bg-slate-100 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-500">
          <div>
            <h4 className="font-bold text-slate-700 mb-2 uppercase tracking-tighter">Authority Statement</h4>
            <p>
              This tool does not provide "correct" answers. It surfaces structural trade-offs based on the input constraints. 
              The final decision rests entirely with the user. Avoid blindly following AI recommendations in production 
              without internal validation.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-700 mb-2 uppercase tracking-tighter">Tool Mechanics</h4>
            <p>
              Powered by Gemini 3.0 Pro Reasoning. 
              Uses structured prompting to force distinct architectural options. 
              No user data is stored; all sessions are transient.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
