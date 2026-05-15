import { Search, Monitor, Menu, User, Zap, MessageSquare, Layout, Cpu } from 'lucide-react';
import { motion } from 'motion/react';
import { Agent, Workflow } from './types';
import { MOCK_AGENTS, MOCK_WORKFLOWS } from './data/mockData';
import { useState } from 'react';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 glass-card px-6 py-4 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
        <Cpu className="text-black w-5 h-5" />
      </div>
      <span className="font-mono font-bold text-xl tracking-tighter uppercase">AgentMarketCap</span>
    </div>
    
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
      <a href="#" className="hover:text-white transition-colors">Store</a>
      <a href="#" className="hover:text-white transition-colors">Compare</a>
      <a href="#" className="hover:text-white transition-colors">Workflows</a>
      <a href="#" className="hover:text-white transition-colors">Community</a>
    </div>

    <div className="flex items-center gap-4">
      <div className="relative hidden lg:block">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        <input 
          type="text" 
          placeholder="Search agents..." 
          className="bg-surface-light border border-white/10 rounded-full py-1.5 pl-10 pr-4 text-xs focus:ring-1 focus:ring-brand-primary outline-none transition-all w-64"
        />
      </div>
      <button className="p-2 hover:bg-white/5 rounded-full text-gray-400">
        <User className="w-5 h-5" />
      </button>
      <button className="md:hidden p-2 hover:bg-white/5 rounded-full text-gray-400">
        <Menu className="w-5 h-5" />
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-32 pb-20 px-6 relative overflow-hidden">
    {/* Background Glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-primary/10 blur-[120px] rounded-full -z-10" />
    
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-semibold uppercase tracking-wider"
      >
        <Zap className="w-3 h-3" />
        The World's AI Catalog
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter"
      >
        DISCOVER THE NEXT <br /> 
        <span className="text-brand-primary">GENERATION OF AI.</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-gray-400 max-w-2xl mx-auto"
      >
        AgentMarketCap is the central intelligence for the agentic era. 
        Compare agents, browse automated workflows, and build your AI workforce today.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <button className="px-8 py-3 bg-brand-primary text-black font-bold rounded-lg hover:scale-105 transition-transform">
          Explore Agents
        </button>
        <button className="px-8 py-3 border border-white/10 glass-card font-bold rounded-lg hover:bg-white/5 transition-colors">
          Compare AI
        </button>
      </motion.div>
    </div>
  </section>
);

const SectionHeader = ({ title, subtitle, icon: Icon }: { title: string, subtitle: string, icon: any }) => (
  <div className="flex items-center justify-between mb-8">
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <Icon className="w-5 h-5 text-brand-primary" />
        <h2 className="text-2xl font-bold uppercase tracking-tight">{title}</h2>
      </div>
      <p className="text-gray-500 text-sm">{subtitle}</p>
    </div>
    <button className="text-xs font-bold text-brand-primary hover:underline uppercase tracking-widest">View All</button>
  </div>
);

const AgentCard = ({ agent }: { agent: Agent }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-card rounded-xl overflow-hidden group cursor-pointer border border-white/5 hover:border-brand-primary/30 transition-all"
  >
    <div className="relative aspect-video overflow-hidden">
      <img src={agent.image} alt={agent.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute top-2 right-2 px-2 py-1 bg-black/60 backdrop-blur rounded text-[10px] font-bold text-white uppercase tracking-wider">
        {agent.pricing}
      </div>
    </div>
    <div className="p-4 space-y-3">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-bold group-hover:text-brand-primary transition-colors">{agent.name}</h3>
          <p className="text-[10px] text-gray-500 font-mono uppercase">{agent.provider}</p>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-1 text-xs font-bold text-yellow-500">
            <span>⭐</span> {agent.rating}
          </div>
          <p className="text-[10px] text-gray-600">({agent.reviewsCount})</p>
        </div>
      </div>
      <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
        {agent.description}
      </p>
      <div className="flex flex-wrap gap-1">
        {agent.tags.slice(0, 3).map(tag => (
          <span key={tag} className="px-2 py-0.5 bg-surface-light rounded text-[9px] text-gray-400 border border-white/5">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const WorkflowCard = ({ workflow }: { workflow: Workflow }) => (
  <motion.div 
    whileHover={{ x: 5 }}
    className="flex gap-4 p-4 glass-card rounded-xl border border-white/5 hover:border-brand-secondary/30 transition-all cursor-pointer"
  >
    <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
      <img src={workflow.image} alt={workflow.title} className="w-full h-full object-cover" />
    </div>
    <div className="space-y-2 py-1 flex-1">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-sm leading-tight line-clamp-1">{workflow.title}</h3>
        <span className="text-[10px] px-2 py-0.5 rounded border border-white/10 text-gray-400 font-mono">
          {workflow.difficulty}
        </span>
      </div>
      <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
        {workflow.description}
      </p>
      <div className="flex items-center gap-3 mt-auto">
        <div className="flex -space-x-2">
          {workflow.agents.slice(0, 3).map((a, i) => (
            <div key={i} className="w-6 h-6 rounded-full border-2 border-bg-dark bg-surface-light flex items-center justify-center overflow-hidden">
               <img src={`https://ui-avatars.com/api/?name=${a}&background=random&color=fff&size=24`} className="w-full h-full" />
            </div>
          ))}
        </div>
        <span className="text-[10px] text-gray-500 font-mono">{workflow.costRange}</span>
      </div>
    </div>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  if (selectedAgent) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
          <button 
            onClick={() => setSelectedAgent(null)}
            className="mb-8 text-xs font-bold text-gray-500 hover:text-white transition-colors flex items-center gap-2 uppercase tracking-widest"
          >
            ← Back to Store
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 alien-glow">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={selectedAgent.image} alt={selectedAgent.name} className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                   <h1 className="text-4xl font-bold">{selectedAgent.name}</h1>
                   <span className="px-2 py-1 bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] rounded uppercase font-bold">
                     {selectedAgent.type}
                   </span>
                </div>
                <p className="text-sm font-mono text-gray-500 uppercase">{selectedAgent.provider}</p>
              </div>
              
              <div className="flex items-center gap-6 py-4 border-y border-white/5">
                <div className="text-center">
                   <p className="text-2xl font-bold font-mono">{selectedAgent.rating}</p>
                   <p className="text-[10px] text-gray-600 uppercase">Rating</p>
                </div>
                <div className="w-px h-8 bg-white/5" />
                <div className="text-center">
                   <p className="text-xl font-bold font-mono">{selectedAgent.pricing}</p>
                   <p className="text-[10px] text-gray-600 uppercase">Cost</p>
                </div>
                <div className="w-px h-8 bg-white/5" />
                <div className="text-center">
                   <p className="text-xl font-bold font-mono">{selectedAgent.mcpSupport ? 'YES' : 'NO'}</p>
                   <p className="text-[10px] text-gray-600 uppercase">MCP Support</p>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed">
                {selectedAgent.description}
                <br /><br />
                This agent is highly ranked for its ability to handle complex {selectedAgent.type.toLowerCase()} tasks. It supports integration with various MCP servers and has been verified by the community.
              </p>

              <div className="flex gap-4">
                <button className="flex-1 py-4 bg-brand-primary text-black font-bold rounded-xl hover:scale-[1.02] transition-transform">
                  Deploy to Workspace
                </button>
                <button className="px-6 py-4 glass-card rounded-xl border border-white/10 hover:bg-white/5">
                  Wishlist
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <SectionHeader title="Capabilities" subtitle="Specific models and features" icon={Layout} />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {selectedAgent.models.map(m => (
                 <div key={m} className="p-4 glass-card rounded-xl text-center border border-white/5">
                   <p className="text-xs font-mono font-bold text-gray-300">{m}</p>
                 </div>
               ))}
               {selectedAgent.tags.map(t => (
                 <div key={t} className="p-4 glass-card rounded-xl text-center border border-white/5">
                   <p className="text-[10px] text-gray-500 uppercase tracking-widest">{t}</p>
                 </div>
               ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 pb-24">
        <Hero />

        {/* Featured Section */}
        <section className="mb-20">
          <SectionHeader 
            title="Featured Agents" 
            subtitle="Top performing AI agents curated by experts." 
            icon={Monitor}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOCK_AGENTS.map(agent => (
              <div key={agent.id} onClick={() => setSelectedAgent(agent)}>
                <AgentCard agent={agent} />
              </div>
            ))}
          </div>
        </section>

        {/* Two Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Workflows (Left) */}
          <section className="lg:col-span-2">
            <SectionHeader 
              title="Hot Workflows" 
              subtitle="Ready-to-use automations for your business." 
              icon={Zap}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MOCK_WORKFLOWS.map(workflow => (
                <WorkflowCard key={workflow.id} workflow={workflow} />
              ))}
            </div>
            
            <div className="mt-8 p-6 glass-card rounded-2xl border-dashed border-white/10 flex items-center justify-between group cursor-pointer hover:border-brand-primary/50 transition-colors">
              <div className="space-y-1">
                <h4 className="font-bold">Have a custom workflow?</h4>
                <p className="text-xs text-gray-500">Submit your automation to the marketplace and earn rewards.</p>
              </div>
              <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold transition-colors">
                Submit Now
              </button>
            </div>
          </section>

          {/* AI Comparison (Right) */}
          <aside className="space-y-6">
            <SectionHeader 
              title="Compare" 
              subtitle="Nuance matters." 
              icon={Layout}
            />
            <div className="space-y-4">
              {[
                { t: 'Claude vs Devin', d: 'The battle for autonomous coding.' },
                { t: 'GPT-4o vs Sonnet 3.5', d: 'Which reasoning engine wins?' },
                { t: 'Open Source vs Paid', d: 'Privacy vs Performance tradeoffs.' }
              ].map((item, i) => (
                <div key={i} className="p-4 glass-card rounded-xl border border-white/5 hover:bg-white/5 transition-all cursor-pointer group">
                  <h4 className="font-bold text-sm group-hover:text-brand-primary transition-colors">{item.t}</h4>
                  <p className="text-[11px] text-gray-500 mt-1">{item.d}</p>
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-gradient-to-br from-brand-secondary/20 to-brand-primary/10 rounded-2xl border border-white/10">
              <h4 className="font-bold text-sm mb-2">Weekly Market Insights</h4>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                The agentic market cap grew by 14% this week. Coding agents are dominating adoption...
              </p>
              <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-colors">
                Subscribe to Report
              </button>
            </div>
          </aside>

        </div>

        {/* Footer info */}
        <footer className="mt-32 pt-12 border-t border-white/5 text-center space-y-6">
           <div className="flex items-center justify-center gap-1.5 grayscale opacity-50">
             <Cpu className="w-4 h-4" />
             <span className="font-mono text-xs font-bold tracking-tighter">AGENTMARKETCAP</span>
           </div>
           <p className="text-[10px] text-gray-600 font-mono uppercase tracking-widest">
             © 2024 Intelligence Intelligence Inc. All agents reserved.
           </p>
        </footer>
      </main>
    </div>
  );
}

