
import React from 'react';
import { ProjectInputs, EvolutionSpeed } from '../types';

interface Props {
  inputs: ProjectInputs;
  setInputs: React.Dispatch<React.SetStateAction<ProjectInputs>>;
  onSubmit: () => void;
  isLoading: boolean;
}

const InputSection: React.FC<Props> = ({ inputs, setInputs, onSubmit, isLoading }) => {
  const handleChange = (field: string, value: any) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const handleConstraintChange = (field: string, value: string) => {
    setInputs(prev => ({
      ...prev,
      constraints: { ...prev.constraints, [field]: value }
    }));
  };

  const handleIntentChange = (field: string, value: any) => {
    setInputs(prev => ({
      ...prev,
      intent: { ...prev.intent, [field]: value }
    }));
  };

  return (
    <div className="space-y-8 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <section>
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">1. Core Vision</h3>
        <label className="block text-sm font-medium text-slate-700 mb-1">App Description</label>
        <textarea
          className="w-full h-32 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-sm"
          placeholder="What are you building? Who is it for? What is the primary value loop?"
          value={inputs.appDescription}
          onChange={(e) => handleChange('appDescription', e.target.value)}
        />
      </section>

      <section>
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">2. Current Constraints</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Team Size</label>
            <input
              type="text"
              className="w-full p-2 border border-slate-300 rounded-lg text-sm"
              placeholder="e.g., Solo dev, 5 engineers"
              value={inputs.constraints.teamSize}
              onChange={(e) => handleConstraintChange('teamSize', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Timeframe</label>
            <input
              type="text"
              className="w-full p-2 border border-slate-300 rounded-lg text-sm"
              placeholder="e.g., 3 months to MVP"
              value={inputs.constraints.timeframe}
              onChange={(e) => handleConstraintChange('timeframe', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Budget</label>
            <input
              type="text"
              className="w-full p-2 border border-slate-300 rounded-lg text-sm"
              placeholder="e.g., Low, Seed stage, High"
              value={inputs.constraints.budget}
              onChange={(e) => handleConstraintChange('budget', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Failure Tolerance</label>
            <input
              type="text"
              className="w-full p-2 border border-slate-300 rounded-lg text-sm"
              placeholder="e.g., 99.9% uptime, occasional glitches okay"
              value={inputs.constraints.failureTolerance}
              onChange={(e) => handleConstraintChange('failureTolerance', e.target.value)}
            />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">3. Future Intent</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Planned Evolution</label>
            <div className="flex gap-4">
              {Object.values(EvolutionSpeed).map(speed => (
                <button
                  key={speed}
                  onClick={() => handleIntentChange('evolution', speed)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all border ${
                    inputs.intent.evolution === speed
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-md'
                      : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {speed}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Scale Scenarios</label>
            <textarea
              className="w-full h-20 p-3 border border-slate-300 rounded-lg text-sm"
              placeholder="e.g., 10k users vs 1M users, data volume growth..."
              value={inputs.intent.scaleScenarios}
              onChange={(e) => handleIntentChange('scaleScenarios', e.target.value)}
            />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">4. Guardrails</h3>
        <label className="block text-sm font-medium text-slate-700 mb-1">Non-Negotiables / Ethics / Safety</label>
        <textarea
          className="w-full h-24 p-3 border border-slate-300 rounded-lg text-sm"
          placeholder="e.g., Data must never leave EU, User consent is mandatory at step X..."
          value={inputs.nonNegotiables}
          onChange={(e) => handleChange('nonNegotiables', e.target.value)}
        />
      </section>

      <button
        onClick={onSubmit}
        disabled={isLoading || !inputs.appDescription}
        className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg ${
          isLoading || !inputs.appDescription
            ? 'bg-slate-400 cursor-not-allowed'
            : 'bg-indigo-600 hover:bg-indigo-700 hover:-translate-y-0.5 active:translate-y-0'
        }`}
      >
        {isLoading ? 'Analyzing System Flows...' : 'Generate Architectural Analysis'}
      </button>
    </div>
  );
};

export default InputSection;
