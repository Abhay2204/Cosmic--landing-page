import React from 'react';
import { motion } from 'framer-motion';
import { Extension } from '../types';
import { Box, Code, Database, FileJson, Layers, Palette, Terminal, Zap } from 'lucide-react';

const MotionDiv = motion.div as any;

const extensions: Extension[] = [
  { name: "Cosmic Python", description: "IntelliSense, linting, and debugging for Python.", downloads: "2.4M", author: "Cosmic Team", icon: Code, color: "text-blue-400" },
  { name: "Rust Analyzer Ultra", description: "Enhanced Rust language support with AI suggestions.", downloads: "850K", author: "Rustacean", icon: Zap, color: "text-orange-400" },
  { name: "Neon Theme", description: "Cyberpunk aesthetics for late night coding.", downloads: "1.2M", author: "DesignCore", icon: Palette, color: "text-pink-400" },
  { name: "Docker Lens", description: "Manage containers and images visually.", downloads: "500K", author: "ContainerCorp", icon: Box, color: "text-blue-300" },
  { name: "React Vibe", description: "Snippets and refactoring tools for React 19.", downloads: "3.1M", author: "Metaverse", icon: Layers, color: "text-cyan-400" },
  { name: "Postgres Pro", description: "Database management integrated into your IDE.", downloads: "400K", author: "DataWiz", icon: Database, color: "text-indigo-400" },
];

const ExtensionMarketplace: React.FC = () => {
  return (
    <section className="py-24 bg-cosmic-950 border-t border-cosmic-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Infinite <span className="text-purple-400">Extensibility</span>
                </h2>
                <p className="text-gray-400 max-w-xl text-lg">
                    Compatible with the VS Code extension ecosystem. Install your favorites or build your own with our Rust API.
                </p>
            </div>
            <button className="text-cosmic-glow hover:text-white font-mono text-sm flex items-center gap-2 border-b border-cosmic-glow/30 pb-1 hover:border-white transition-all">
                Browse Marketplace &rarr;
            </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {extensions.map((ext, idx) => (
            <MotionDiv 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-cosmic-900 border border-white/5 rounded-xl p-5 hover:border-cosmic-accent/40 hover:bg-cosmic-800 transition-all group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-cosmic-950 border border-white/5 ${ext.color}`}>
                    <ext.icon size={24} />
                </div>
                <div className="text-xs font-mono text-gray-500 bg-cosmic-950 px-2 py-1 rounded">
                    {ext.downloads} ⬇
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cosmic-glow transition-colors">{ext.name}</h3>
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">{ext.description}</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="w-4 h-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-600"></span>
                {ext.author}
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtensionMarketplace;