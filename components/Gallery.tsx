import React from 'react';
import { motion } from 'framer-motion';
import { Command, GitGraph, MessageSquare, Search, Split } from 'lucide-react';

const MotionDiv = motion.div as any;

const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-cosmic-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Designed for <span className="text-cosmic-glow">Flow</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A user interface that gets out of your way and puts your code front and center.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 h-auto md:h-[600px]">
          {/* Main Large Item: Command Palette */}
          <MotionDiv 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden group border border-white/5 hover:border-cosmic-accent/30 transition-all"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cosmic-accent via-purple-500 to-cosmic-accent opacity-50"></div>
            <div className="flex items-center gap-3 mb-6 text-cosmic-glow">
              <Command className="w-6 h-6" />
              <span className="font-mono text-sm tracking-wider uppercase">Smart Command Palette</span>
            </div>
            
            {/* Mock UI */}
            <div className="bg-cosmic-950 rounded-xl border border-cosmic-700 shadow-2xl p-4 max-w-lg mx-auto transform group-hover:scale-105 transition-transform duration-500">
              <div className="flex items-center gap-3 border-b border-cosmic-700 pb-3 mb-3">
                <Search className="w-4 h-4 text-gray-500" />
                <span className="text-gray-400 font-mono text-sm">run debug|</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-cosmic-accent/10 rounded border border-cosmic-accent/20 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-white text-sm">Debug: Start Session</span>
                  </div>
                  <span className="text-xs text-gray-500 font-mono">Shift+F5</span>
                </div>
                <div className="flex items-center justify-between p-2 hover:bg-white/5 rounded cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-transparent border border-gray-500"></div>
                    <span className="text-gray-300 text-sm">Run: Run Tests</span>
                  </div>
                </div>
                 <div className="flex items-center justify-between p-2 hover:bg-white/5 rounded cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-transparent border border-gray-500"></div>
                    <span className="text-gray-300 text-sm">Run: Build Production</span>
                  </div>
                </div>
              </div>
            </div>
             <p className="absolute bottom-8 left-8 right-8 text-gray-400 text-sm text-center">
              Access every file, setting, and AI command from a single keystroke.
            </p>
          </MotionDiv>

          {/* Side Item 1: Git Graph */}
          <MotionDiv 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="glass-panel rounded-2xl p-6 relative overflow-hidden hover:bg-cosmic-800 transition-colors border border-white/5"
          >
            <div className="flex items-center gap-3 mb-4 text-pink-400">
              <GitGraph className="w-5 h-5" />
              <span className="font-mono text-xs tracking-wider uppercase">Visual Git</span>
            </div>
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <div className="h-8 w-0.5 bg-gray-700 mx-1"></div>
                <span className="text-white">feat: add ai-agent</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <div className="h-8 w-0.5 bg-gray-700 mx-1"></div>
                <span className="text-gray-400">fix: memory leak</span>
              </div>
               <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-gray-500">init commit</span>
              </div>
            </div>
          </MotionDiv>

          {/* Side Item 2: AI Chat */}
          <MotionDiv 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="glass-panel rounded-2xl p-6 relative overflow-hidden hover:bg-cosmic-800 transition-colors border border-white/5"
          >
             <div className="flex items-center gap-3 mb-4 text-cyan-400">
              <MessageSquare className="w-5 h-5" />
              <span className="font-mono text-xs tracking-wider uppercase">AI Assistant</span>
            </div>
            <div className="space-y-3">
              <div className="bg-cosmic-950 p-2 rounded-lg rounded-tl-none border border-cosmic-700 text-xs text-gray-300">
                How do I fix this race condition in Rust?
              </div>
              <div className="bg-cosmic-accent/10 p-2 rounded-lg rounded-tr-none border border-cosmic-accent/20 text-xs text-white ml-4">
                Use a <code className="bg-black/30 px-1 rounded text-orange-300">Mutex&lt;T&gt;</code> wrapped in an <code className="bg-black/30 px-1 rounded text-orange-300">Arc</code> to share state safely.
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default Gallery;