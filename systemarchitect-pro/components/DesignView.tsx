
import React, { useState } from 'react';
import { DesignAnalysis } from '../types';

interface DesignViewProps {
  analysis: DesignAnalysis;
  onNext: () => void;
  onBack: () => void;
}

const DesignView: React.FC<DesignViewProps> = ({ analysis, onNext, onBack }) => {
  const [activeTab, setActiveTab] = useState<'flows' | 'breakdown'>('flows');

  const recommendedFlow = analysis.flows.find(f => f.id === analysis.recommendedFlowId) || analysis.flows[0];

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex border-b border-slate-200 mb-6">
        <button 
          onClick={() => setActiveTab('flows')}
          className={`pb-4 px-6 font-semibold transition-colors ${activeTab === 'flows' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
        >
          System Flows
        </button>
        <button 
          onClick={() => setActiveTab('breakdown')}
          className={`pb-4 px-6 font-semibold transition-colors ${activeTab === 'breakdown' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
        >
          Detailed Breakdown
        </button>
      </div>

      {activeTab === 'flows' ? (
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Alternative Architectures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {analysis.flows.map((flow) => (
                <div 
                  key={flow.id} 
                  className={`p-6 rounded-xl border-2 transition ${flow.id === analysis.recommendedFlowId ? 'border-blue-200 bg-blue-50 shadow-sm' : 'border-slate-100 hover:border-slate-300'}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{flow.name}</h3>
                    {flow.id === analysis.recommendedFlowId && (
                      <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Recommended</span>
                    )}
                  </div>
                  <p className="text-slate-700 text-sm mb-4 leading-relaxed">{flow.architectureOverview}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Trade-offs</h4>
                      <ul className="text-xs space-y-1 text-slate-600 list-disc list-inside">
                        {flow.tradeOffs.map((t, idx) => <li key={idx}>{t}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Risks</h4>
                      <ul className="text-xs space-y-1 text-slate-600 list-disc list-inside">
                        {flow.risks.map((r, idx) => <li key={idx}>{r}</li>)}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <p className="text-xs text-slate-500 italic"><span className="font-bold">Ideal Use Case:</span> {flow.idealUseCase}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1a1 1 0 112 0v1a1 1 0 11-2 0zM13.536 15.657a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM16.464 13.536a1 1 0 10-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707z" />
              </svg>
              Recommendation Reasoning
            </h2>
            <p className="text-slate-300 leading-relaxed mb-2">Selected: <span className="font-bold text-white">{recommendedFlow.name}</span></p>
            <p className="text-slate-300 leading-relaxed whitespace-pre-wrap">{analysis.recommendationReasoning}</p>
          </section>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
          {Object.entries(analysis.moduleBreakdown).map(([key, value]) => (
            <div key={key} className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-800 mb-3 capitalize">{key}</h3>
              <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-wrap">{value}</p>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-between items-center pt-8 border-t border-slate-100">
        <button 
          onClick={onBack}
          className="text-slate-600 hover:text-slate-800 font-semibold px-4 py-2"
        >
          ← Back to Inputs
        </button>
        <button 
          onClick={onNext}
          className="bg-slate-900 hover:bg-black text-white font-bold py-3 px-10 rounded-lg shadow-lg flex items-center transition active:scale-95"
        >
          Proceed to Auditor Mode
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DesignView;
