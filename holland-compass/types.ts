
export enum RiasecType {
  REALISTIC = 'REALISTIC',
  INVESTIGATIVE = 'INVESTIGATIVE',
  ARTISTIC = 'ARTISTIC',
  SOCIAL = 'SOCIAL',
  ENTERPRISING = 'ENTERPRISING',
  CONVENTIONAL = 'CONVENTIONAL'
}

export interface RiasecOption {
  id: string;
  text: string;
  type: RiasecType;
}

export interface Question {
  id: number;
  prompt: string;
  options: RiasecOption[];
}

export interface TypeDetail {
  title: string;
  shortDesc: string;
  longDesc: string;
  enjoyments: string[];
  careerClusters: string[];
  notLabel: string;
}

export type ViewState = 'intro' | 'questionnaire' | 'results' | 'reflection';
