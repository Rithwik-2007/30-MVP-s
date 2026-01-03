
export type Lifespan = 'prototype' | 'stable' | 'long-term';

export interface UserInputs {
  goal: string;
  users: string;
  constraints: string;
  nonGoals: string;
  lifespan: Lifespan;
}

export interface SystemFlow {
  id: string;
  name: string;
  architectureOverview: string;
  tradeOffs: string[];
  risks: string[];
  idealUseCase: string;
}

export interface ModuleBreakdown {
  frontend: string;
  backend: string;
  apis: string;
  dataHandling: string;
  security: string;
}

export interface DesignAnalysis {
  flows: SystemFlow[];
  recommendedFlowId: string;
  recommendationReasoning: string;
  moduleBreakdown: ModuleBreakdown;
}

export interface AuditIssue {
  type: 'complexity' | 'ux' | 'safety' | 'ethical' | 'performance';
  severity: 'low' | 'medium' | 'high';
  description: string;
  suggestion: string;
}

export interface AuditReport {
  issues: AuditIssue[];
  overallSimplification: string;
}

export interface StarterCodeFile {
  path: string;
  responsibility: string;
  content: string;
}
