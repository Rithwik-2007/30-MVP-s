
export enum EvolutionSpeed {
  STABLE = 'stable',
  MODERATE = 'moderate',
  FAST = 'fast'
}

export interface ProjectConstraints {
  teamSize: string;
  timeframe: string;
  budget: string;
  platforms: string[];
  failureTolerance: string;
}

export interface FutureIntent {
  evolution: EvolutionSpeed;
  scaleScenarios: string;
  futureFeatures: string;
}

export interface ProjectInputs {
  appDescription: string;
  constraints: ProjectConstraints;
  intent: FutureIntent;
  nonNegotiables: string;
}

export interface SystemFlowOption {
  id: string;
  name: string;
  highLevelPipeline: string[];
  strengths: string[];
  weaknesses: string[];
  futurePainPoints: string[];
  appropriateWhen: string;
  whereItBreaks: string;
  costOfChange: string;
  irreversibleDecisions: string[];
}

export interface ScenarioRecommendation {
  scenario: string;
  recommendedOptionId: string;
  reasoning: string;
}

export interface ArchitectureAnalysis {
  options: SystemFlowOption[];
  comparisonTable: {
    criteria: string;
    scores: Record<string, string>;
  }[];
  scenarioRecommendations: ScenarioRecommendation[];
  assumptionsAndUncertainties: string[];
}
