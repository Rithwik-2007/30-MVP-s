
import React, { useState } from 'react';

interface ReflectionViewProps {
  onRestart: () => void;
}

const ReflectionView: React.FC<ReflectionViewProps> = ({ onRestart }) => {
  const [reflection1, setReflection1] = useState('');
  const [reflection2, setReflection2] = useState('');

  return (
    <div className="p-8 md:p-12 flex flex-col fade-in h-full">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-light text-stone-800 mb-2">Final Thoughts</h2>
        <p className="text-stone-500">The most important part of this tool is what you think about it.</p>
      </div>

      <div className="space-y-8 flex-grow">
        <div className="space-y-4">
          <label className="block text-stone-700 font-medium">
            Looking at your top patterns, how accurate do they feel to your current life?
          </label>
          <textarea
            value={reflection1}
            onChange={(e) => setReflection1(e.target.value)}
            className="w-full h-32 p-4 border border-stone-200 rounded-xl focus:ring-2 focus:ring-stone-200 focus:border-stone-400 outline-none transition-all placeholder-stone-300"
            placeholder="Type your thoughts here..."
          />
        </div>

        <div className="space-y-4">
          <label className="block text-stone-700 font-medium">
            Was there a specific result or career cluster that surprised you?
          </label>
          <textarea
            value={reflection2}
            onChange={(e) => setReflection2(e.target.value)}
            className="w-full h-32 p-4 border border-stone-200 rounded-xl focus:ring-2 focus:ring-stone-200 focus:border-stone-400 outline-none transition-all placeholder-stone-300"
            placeholder="Type your thoughts here..."
          />
        </div>
      </div>

      <div className="mt-12 space-y-4 flex flex-col items-center">
        <p className="text-xs text-stone-400 max-w-sm text-center">
          Note: Your reflections are not saved on any server. If you'd like to keep these thoughts, please copy them or print this page.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => window.print()}
            className="px-8 py-3 bg-stone-100 text-stone-700 rounded-full hover:bg-stone-200 transition-colors font-medium text-sm"
          >
            Save/Print Page
          </button>
          <button
            onClick={onRestart}
            className="px-8 py-3 bg-stone-800 text-stone-50 rounded-full hover:bg-stone-700 transition-colors font-medium text-sm"
          >
            Start Over
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReflectionView;
