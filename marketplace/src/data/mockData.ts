import { Agent, Workflow } from './types';

export const MOCK_AGENTS: Agent[] = [
  {
    id: 'claude-3-5-sonnet',
    name: 'Claude 3.5 Sonnet',
    description: 'Anthropic\'s most intelligent model to date, excelling at coding, nuance, and reasoning.',
    provider: 'Anthropic',
    pricing: 'Freemium',
    type: 'Coding',
    models: ['Sonnet 3.5'],
    mcpSupport: true,
    rating: 4.9,
    reviewsCount: 1240,
    tags: ['Best for Coding', 'Fast', 'Nuanced'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'gpt-4o',
    name: 'GPT-4o',
    description: 'OpenAI\'s flagship multimodal model, optimized for real-time interaction and versatility.',
    provider: 'OpenAI',
    pricing: 'Freemium',
    type: 'General',
    models: ['GPT-4o', 'GPT-4o-mini'],
    mcpSupport: false,
    rating: 4.8,
    reviewsCount: 2500,
    tags: ['Multimodal', 'Balanced', 'ecosystem'],
    image: 'https://images.unsplash.com/photo-1717501219716-1234a9e52516?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'devin',
    name: 'Devin',
    description: 'The world\'s first fully autonomous AI software engineer. Handles complex dev tasks end-to-end.',
    provider: 'Cognition',
    pricing: 'Paid',
    type: 'Coding',
    models: ['Custom'],
    mcpSupport: true,
    rating: 4.7,
    reviewsCount: 320,
    tags: ['Autonomous', 'DevOps', 'Elite'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    description: 'AI-powered search engine that provides cited answers to complex questions.',
    provider: 'Perplexity AI',
    pricing: 'Freemium',
    type: 'Research',
    models: ['Claude 3', 'GPT-4', 'Sonar'],
    mcpSupport: false,
    rating: 4.9,
    reviewsCount: 1800,
    tags: ['Search', 'Cited', 'Fast'],
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=400'
  }
];

export const MOCK_WORKFLOWS: Workflow[] = [
  {
    id: 'yt-automation',
    title: 'Autonomous YouTube Engine',
    description: 'From script to upload. Automate your entire YouTube content pipeline.',
    goal: 'Create viral videos without touching a camera.',
    agents: ['gpt-4o', 'heygen', 'elevenlabs'],
    tools: ['Adobe Premiere API', 'YouTube API'],
    difficulty: 'Advanced',
    automationLevel: 'High',
    costRange: '$50 - $200 /mo',
    category: 'Content Creation',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'ai-lead-gen',
    title: 'Hyper-Personalized Outreach',
    description: 'Scrape leads, analyze LinkedIn profiles, and write human-like cold emails.',
    goal: 'Book 5x more meetings with half the effort.',
    agents: ['claude-3-5-sonnet', 'apollo-io', 'instantly'],
    tools: ['LinkedIn', 'Gmail'],
    difficulty: 'Intermediate',
    automationLevel: 'Medium',
    costRange: '$30 - $100 /mo',
    category: 'Sales',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'code-reviewer-bot',
    title: 'AI Senior Dev Reviewer',
    description: 'Automatically review PRs for security, logic bugs, and style guide compliance.',
    goal: 'Reduce technical debt and speed up merge time.',
    agents: ['devin', 'sonarqube'],
    tools: ['GitHub Actions', 'Slack'],
    difficulty: 'Intermediate',
    automationLevel: 'Autonomous',
    costRange: 'Free - $40 /mo',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=600'
  }
];
