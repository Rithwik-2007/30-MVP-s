
import React from 'react';
import { RiasecType } from '../types';
import { RIASEC_DETAILS } from '../constants';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

interface ResultsViewProps {
  dominantTypes: RiasecType[];
  allScores: Record<RiasecType, number>;
  onNext: () => void;
}

const ResultsView: React.FC<ResultsViewProps> = ({ dominantTypes, allScores, onNext }) => {
  const chartData = Object.entries(allScores).map(([key, value]) => ({
    subject: RIASEC_DETAILS[key as RiasecType].title,
    A: value,
    fullMark: 12,
  }));

  return (
    <div className="p-8 md:p-12 flex flex-col fade-in">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-light text-stone-800 mb-2">Your Interest Landscape</h2>
        <p className="text-stone-500">Based on your selections, these patterns stood out most.</p>
      </div>

      <div className="h-64 w-full mb-10">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
            <PolarGrid stroke="#e5e7eb" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#6b7280', fontSize: 12 }} />
            <Radar
              name="Interests"
              dataKey="A"
              stroke="#57534e"
              fill="#57534e"
              fillOpacity={0.1}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-12">
        {dominantTypes.map((type) => {
          const detail = RIASEC_DETAILS[type];
          return (
            <section key={type} className="border-t border-stone-100 pt-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-stone-800 text-stone-50 flex items-center justify-center text-xs font-bold">
                  {detail.title[0]}
                </span>
                <h3 className="text-xl font-medium text-stone-800">
                  The {detail.title} Type
                </h3>
              </div>
              
              <p className="text-stone-700 leading-relaxed mb-6">
                {detail.longDesc}
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-3">You often enjoy</h4>
                  <ul className="space-y-2">
                    {detail.enjoyments.map((item, i) => (
                      <li key={i} className="text-sm text-stone-600 flex items-start gap-2">
                        <span className="text-stone-300">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-3">Common Clusters</h4>
                  <div className="flex flex-wrap gap-2">
                    {detail.careerClusters.map((cluster, i) => (
                      <span key={i} className="px-3 py-1 bg-stone-50 text-stone-600 border border-stone-100 rounded-md text-sm">
                        {cluster}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-stone-50 rounded-lg italic text-stone-500 text-sm border-l-2 border-stone-200">
                <strong>Clarification:</strong> {detail.notLabel}
              </div>
            </section>
          );
        })}

        <section className="border-t border-stone-100 pt-8 pb-4">
          <h4 className="text-sm font-bold text-stone-800 mb-3">What this does NOT mean</h4>
          <p className="text-sm text-stone-500 leading-relaxed">
            This reflection is a snapshot of your current preferences. It is not a prediction of success, nor a limit on your capabilities. Many successful people have careers that blend several of these types or move between them throughout their lives.
          </p>
        </section>
      </div>

      <div className="mt-12 flex justify-center">
        <button
          onClick={onNext}
          className="px-10 py-4 border-2 border-stone-800 text-stone-800 rounded-full hover:bg-stone-800 hover:text-white transition-all duration-300 font-medium"
        >
          Continue to Reflection
        </button>
      </div>
    </div>
  );
};

export default ResultsView;
