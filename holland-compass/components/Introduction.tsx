
import React from 'react';

interface IntroductionProps {
  onStart: () => void;
}

const Introduction: React.FC<IntroductionProps> = ({ onStart }) => {
  return (
    <div className="p-8 md:p-12 flex flex-col items-center text-center space-y-8 fade-in h-full justify-center">
      <div className="space-y-2">
        <h1 className="text-4xl font-light text-stone-800 tracking-tight">Holland Compass</h1>
        <p className="text-stone-500 font-light italic">A quiet space for interest reflection</p>
      </div>

      <div className="space-y-6 max-w-md text-stone-600 leading-relaxed">
        <p>
          This tool is based on the <strong>RIASEC</strong> model, which describes six broad patterns of how people tend to interact with the world and their work.
        </p>
        <p className="text-sm border-l-2 border-stone-200 pl-4 italic text-stone-500">
          “This tool helps you understand patterns in what you enjoy — not what you must become.”
        </p>
        <p>
          There are no right or wrong answers, and no ticking clock. Choose the option that feels most like 'you' right now.
        </p>
      </div>

      <button
        onClick={onStart}
        className="px-10 py-4 bg-stone-800 text-stone-50 rounded-full hover:bg-stone-700 transition-colors duration-300 font-medium tracking-wide"
      >
        Begin Reflection
      </button>
    </div>
  );
};

export default Introduction;
