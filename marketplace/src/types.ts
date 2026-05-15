export interface Agent {
  id: string;
  name: string;
  description: string;
  provider: string;
  pricing: 'Free' | 'Paid' | 'Freemium' | 'Open Source';
  type: 'General' | 'Coding' | 'Research' | 'Automation' | 'Creative';
  models: string[];
  mcpSupport: boolean;
  rating: number;
  reviewsCount: number;
  tags: string[];
  image: string;
}

export interface Workflow {
  id: string;
  title: string;
  description: string;
  goal: string;
  agents: string[]; // Agent IDs
  tools: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  automationLevel: 'Low' | 'Medium' | 'High' | 'Autonomous';
  costRange: string;
  category: string;
  image: string;
}

export interface ComparisonCriteria {
  label: string;
  key: keyof Agent | string;
  type: 'text' | 'boolean' | 'rating' | 'list';
}
