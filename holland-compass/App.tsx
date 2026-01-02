
import React, { useState, useMemo } from 'react';
import { RiasecType, ViewState, RiasecOption } from './types';
import { QUESTIONS, RIASEC_DETAILS } from './constants';
import Introduction from './components/Introduction';
import QuestionCard from './components/QuestionCard';
import ResultsView from './components/ResultsView';
import ReflectionView from './components/ReflectionView';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, RiasecType>>({});

  const handleStart = () => setView('questionnaire');

  const handleAnswer = (questionId: number, type: RiasecType) => {
    setAnswers(prev => ({ ...prev, [questionId]: type }));
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setView('results');
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else {
      setView('intro');
    }
  };

  const reset = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setView('intro');
  };

  const results = useMemo(() => {
    const scores: Record<RiasecType, number> = {
      [RiasecType.REALISTIC]: 0,
      [RiasecType.INVESTIGATIVE]: 0,
      [RiasecType.ARTISTIC]: 0,
      [RiasecType.SOCIAL]: 0,
      [RiasecType.ENTERPRISING]: 0,
      [RiasecType.CONVENTIONAL]: 0,
    };

    // Fix: Explicitly cast the values of answers to RiasecType[] to avoid 'unknown' index type error in some environments
    (Object.values(answers) as RiasecType[]).forEach(type => {
      scores[type]++;
    });

    const sortedTypes = Object.entries(scores)
      .sort(([, a], [, b]) => b - a)
      .map(([type]) => type as RiasecType);

    const topScore = scores[sortedTypes[0]];
    const secondScore = scores[sortedTypes[1]];
    const thirdScore = scores[sortedTypes[2]];

    // We definitely show top 2. We show top 3 if the 3rd is close to the 2nd.
    const threshold = 1; 
    const finalTypes = [sortedTypes[0], sortedTypes[1]];
    if (secondScore - thirdScore <= threshold) {
      finalTypes.push(sortedTypes[2]);
    }

    return {
      scores,
      dominantTypes: finalTypes
    };
  }, [answers]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <main className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden min-h-[500px] flex flex-col">
        {view === 'intro' && (
          <Introduction onStart={handleStart} />
        )}

        {view === 'questionnaire' && (
          <QuestionCard
            question={QUESTIONS[currentQuestionIndex]}
            totalQuestions={QUESTIONS.length}
            currentIndex={currentQuestionIndex}
            onAnswer={handleAnswer}
            onBack={handleBack}
          />
        )}

        {view === 'results' && (
          <ResultsView
            dominantTypes={results.dominantTypes}
            allScores={results.scores}
            onNext={() => setView('reflection')}
          />
        )}

        {view === 'reflection' && (
          <ReflectionView onRestart={reset} />
        )}
      </main>

      <footer className="mt-8 text-stone-400 text-xs text-center max-w-md px-4 leading-relaxed">
        <p>Holland Compass is for self-reflection only. It does not provide professional, psychological, or medical advice. Your interests are dynamic and change over time.</p>
      </footer>
    </div>
  );
};

export default App;
