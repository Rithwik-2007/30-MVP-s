
import React from 'react';
import { Question, RiasecType } from '../types';

interface QuestionCardProps {
  question: Question;
  totalQuestions: number;
  currentIndex: number;
  onAnswer: (id: number, type: RiasecType) => void;
  onBack: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  totalQuestions,
  currentIndex,
  onAnswer,
  onBack
}) => {
  return (
    <div className="p-8 md:p-12 flex flex-col h-full fade-in" key={question.id}>
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={onBack}
          className="text-sm text-stone-400 hover:text-stone-600 transition-colors flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <span className="text-xs font-medium text-stone-400 tracking-widest uppercase">
          Step {currentIndex + 1} of {totalQuestions}
        </span>
      </div>

      <h2 className="text-2xl text-stone-800 mb-8 leading-snug font-medium">
        {question.prompt}
      </h2>

      <div className="space-y-3 flex-grow">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onAnswer(question.id, option.type)}
            className="w-full p-4 text-left border border-stone-100 rounded-xl hover:border-stone-300 hover:bg-stone-50 transition-all duration-200 group flex justify-between items-center"
          >
            <span className="text-stone-700 font-normal leading-relaxed">{option.text}</span>
            <svg className="w-5 h-5 text-stone-300 group-hover:text-stone-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ))}
      </div>

      <div className="mt-8 w-full bg-stone-100 h-1 rounded-full overflow-hidden">
        <div
          className="bg-stone-300 h-full transition-all duration-500 ease-out"
          style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default QuestionCard;
