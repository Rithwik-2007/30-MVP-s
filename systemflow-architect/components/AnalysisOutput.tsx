
import React from 'react';
import { ArchitectureAnalysis, SystemFlowOption } from '../types';

interface Props {
  analysis: ArchitectureAnalysis;
}

const FlowOptionCard: React.FC<{ option: SystemFlowOption }> = ({ option }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
      <div className="bg-slate-900 p-4">
        <h3 className="text-white font-bold text-lg">{option.name}</h3>
      </div>
      <div className="p-6 flex-grow space-y-6">
        <div>
          <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">High-Level Pipeline</h4>
          <div className="flex items-center flex-wrap gap-2">
            {option.highLevelPipeline.map((step, i) => (
              <React.Fragment key={i}>
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded text-sm border border-slate-200">{step}</span>
                {i < option.highLevelPipeline.length - 1 && <span className="text-slate-400">→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xs font-bold text-green-600 uppercase mb-2">Strengths</h4>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
              {option.strengths.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-red-600 uppercase mb-2">Weaknesses</h4>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
              {option.weaknesses.map((w, i) => <li key={i}>{w}</li>)}
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <p className="text-sm text-slate-700"><span className="font-bold">Breaking Point:</span> {option.whereItBreaks}</p>
          <p className="text-sm text-slate-700 mt-2"><span className="font-bold">Cost of Change:</span> {option.costOfChange}</p>
        </div>

        <div>
          <h4 className="text-xs font-bold text-amber-600 uppercase mb-2">Irreversible Decisions</h4>
          <ul className="list-none text-sm text-slate-600 space-y-1">
            {option.irreversibleDecisions.map((d, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-amber-500">⚠</span> {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const AnalysisOutput: React.FC<Props> = ({ analysis }) => {
  return (
    <div className="space-y-12 pb-20">
      <section>
        <div className="flex items-center gap-2 mb-6">
          <div className="h-2 w-2 bg-indigo-600 rounded-full"></div>
          <h2 className="text-2xl font-bold text-slate-900">Architectural Options</h2>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {analysis.options.map(opt => <FlowOptionCard key={opt.id} option={opt} />)}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-2 mb-6">
          <div className="h-2 w-2 bg-indigo-600 rounded-full"></div>
          <h2 className="text-2xl font-bold text-slate-900">Comparison Matrix</h2>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="p-4 font-semibold border-b">Criteria</th>
                {analysis.options.map(opt => (
                  <th key={opt.id} className="p-4 font-semibold border-b">{opt.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {analysis.comparisonTable.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium text-slate-700 border-b">{row.criteria}</td>
                  {analysis.options.map(opt => (
                    <td key={opt.id} className="p-4 text-slate-600 border-b">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        row.scores[opt.id] === 'High' ? 'bg-green-100 text-green-700' :
                        row.scores[opt.id] === 'Low' ? 'bg-red-100 text-red-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {row.scores[opt.id]}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-indigo-900 text-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-xl font-bold mb-6">Scenario-Based Guidance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {analysis.scenarioRecommendations.map((rec, i) => (
            <div key={i} className="bg-indigo-800/50 p-6 rounded-xl border border-indigo-700">
              <h4 className="font-bold text-indigo-200 mb-2">{rec.scenario}</h4>
              <p className="text-sm text-slate-300 mb-4">
                Recommended: <span className="text-white font-bold">{analysis.options.find(o => o.id === rec.recommendedOptionId)?.name}</span>
              </p>
              <p className="text-sm leading-relaxed">{rec.reasoning}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
          <h4 className="text-amber-800 font-bold mb-2 flex items-center gap-2">
            <span>💡</span> Assumptions & Uncertainties
          </h4>
          <ul className="list-disc list-inside text-sm text-amber-900 space-y-1">
            {analysis.assumptionsAndUncertainties.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AnalysisOutput;
