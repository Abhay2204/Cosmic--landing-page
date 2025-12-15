import React from 'react';
import { motion } from 'framer-motion';
import { Github, Heart, Star, Users } from 'lucide-react';

const MotionDiv = motion.div as any;

const Community: React.FC = () => {
  return (
    <section id="community" className="py-24 bg-gradient-to-b from-cosmic-900 to-cosmic-950 border-t border-cosmic-800">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-cosmic-accent/10 border border-cosmic-accent/30 text-cosmic-glow text-xs font-bold uppercase tracking-widest mb-4">
                Open Source
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Built by Developers, <br/> For Developers
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
                Cosmic IDE is fully open source. Inspect the code, contribute features, or build your own fork. We believe in transparency.
            </p>
            
            <a href="#" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-cosmic-950 rounded-lg font-bold hover:bg-gray-200 transition-colors">
                <Github className="w-5 h-5" />
                Star on GitHub
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <MotionDiv 
                className="p-6"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center justify-center gap-2 text-yellow-400 mb-2">
                    <Star className="w-6 h-6 fill-current" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">42</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Stars</div>
            </MotionDiv>
            
             <MotionDiv 
                className="p-6"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
                <div className="flex items-center justify-center gap-2 text-pink-400 mb-2">
                    <Heart className="w-6 h-6 fill-current" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">1</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Contributors</div>
                <div className="text-xs text-gray-600 mt-1">(just you!)</div>
            </MotionDiv>



             <MotionDiv 
                className="p-6"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
            >
                <div className="flex items-center justify-center gap-2 text-green-400 mb-2">
                    <span className="font-mono font-bold text-xl">TS</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">90.3%</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">TypeScript</div>
            </MotionDiv>
        </div>

        {/* Language Breakdown */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-white mb-6">Tech Stack</h3>
          <div className="bg-cosmic-800/30 rounded-lg p-6 border border-cosmic-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex justify-between">
                <span className="text-blue-400 font-mono">TypeScript</span>
                <span className="text-gray-300">90.3%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-yellow-400 font-mono">JavaScript</span>
                <span className="text-gray-300">7.6%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-orange-400 font-mono">HTML</span>
                <span className="text-gray-300">0.7%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-red-400 font-mono">Rust</span>
                <span className="text-gray-300">0.5%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-400 font-mono">NSIS</span>
                <span className="text-gray-300">0.5%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-400 font-mono">Batchfile</span>
                <span className="text-gray-300">0.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 font-mono">Other</span>
                <span className="text-gray-300">0.2%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;