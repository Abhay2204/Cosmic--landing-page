import React from 'react';
import { Bot, Zap, Code2, Puzzle, GitBranch, Terminal, ShieldCheck, Search } from 'lucide-react';
import { Feature } from '../types';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

const features: Feature[] = [
  {
    title: "Multi-Provider AI",
    description: "Connect OpenRouter, Gemini, OpenAI, and Anthropic natively. Switch between GPT-4o and Claude 3.5 Sonnet instantly.",
    icon: Bot,
    tags: ["Gemini 1.5", "GPT-4o", "Claude 3.5"]
  },
  {
    title: "Rust-Powered Core",
    description: "Built on Rust for millisecond startup times and minimal memory footprint, unlike heavy JS-based editors.",
    icon: Zap,
    tags: ["Rust", "Performance", "Low RAM"]
  },
  {
    title: "Context-Aware Coding",
    description: "The AI understands your entire repository, dependencies, and architecture, not just the active file.",
    icon: Code2,
    tags: ["RAG", "Deep Context"]
  },
  {
    title: "Autonomous BugBot",
    description: "An agent capable of scanning for race conditions and logic errors, suggesting fixes before you even compile.",
    icon: ShieldCheck,
    tags: ["Agents", "Auto-Fix"]
  },
  {
    title: "Extension Marketplace",
    description: "VS Code compatible extensions with 1000+ plugins. Install Python, Rust, React tools and themes instantly.",
    icon: Puzzle,
    tags: ["Marketplace", "VS Code Compatible"]
  },
  {
    title: "Smart Command Palette",
    description: "Access every file, setting, and AI command from a single keystroke. Fuzzy search with intelligent suggestions.",
    icon: Search,
    tags: ["Command", "Quick Access"]
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-cosmic-950 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Engineered for <span className="text-cosmic-glow">Excellence</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Every feature is crafted to reduce friction between your idea and the code.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <MotionDiv 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 glass-panel rounded-xl hover:bg-cosmic-800 transition-all duration-300 hover:-translate-y-2 border-t border-transparent hover:border-cosmic-accent/50"
            >
              <div className="w-12 h-12 bg-cosmic-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cosmic-accent transition-colors">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cosmic-glow transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {feature.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {feature.tags?.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold text-gray-500 bg-cosmic-900 px-2 py-1 rounded border border-white/5">
                        {tag}
                    </span>
                ))}
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* Feature Gallery */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              See It In <span className="text-cosmic-glow">Action</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Real screenshots from Cosmic IDE showcasing the features that make development effortless.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Cosmic Agent */}
            <MotionDiv 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-cosmic-accent/50 transition-all duration-300"
            >
              <div className="relative h-[500px]">
                <img 
                  src="/images/Cosmic Agent.png" 
                  alt="Cosmic AI Agent Interface" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-cosmic-900/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-white font-semibold mb-1">AI Agent</h4>
                <p className="text-gray-300 text-xs">Autonomous coding assistant</p>
              </div>
            </MotionDiv>

            {/* Automated Debugger */}
            <MotionDiv 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-cosmic-accent/50 transition-all duration-300"
            >
              <div className="relative h-[500px]">
                <img 
                  src="/images/automated debuggr.png" 
                  alt="Automated Debugger Interface" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-cosmic-900/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-white font-semibold mb-1">Auto Debugger</h4>
                <p className="text-gray-300 text-xs">AI-powered bug detection</p>
              </div>
            </MotionDiv>

            {/* Extension Marketplace */}
            <MotionDiv 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-cosmic-accent/50 transition-all duration-300"
            >
              <div className="relative h-[500px]">
                <img 
                  src="/images/extension market place.png" 
                  alt="Extension Marketplace Interface" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-cosmic-900/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-white font-semibold mb-1">Extensions</h4>
                <p className="text-gray-300 text-xs">Cosmic Ide Custom marketplace</p>
              </div>
            </MotionDiv>

            {/* Settings */}
            <MotionDiv 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-cosmic-accent/50 transition-all duration-300"
            >
              <div className="relative h-[500px]">
                <img 
                  src="/images/settings.png" 
                  alt="Settings Interface" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-cosmic-900/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-white font-semibold mb-1">Settings</h4>
                <p className="text-gray-300 text-xs">Intuitive configuration</p>
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;