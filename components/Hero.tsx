import React from 'react';
import { ArrowRight, Terminal, Cpu, Zap, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;
const MotionP = motion.p as any;

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-cosmic-accent opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-500 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="space-y-8 text-center lg:text-left">
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full border border-cosmic-accent/30 bg-cosmic-accent/10 text-cosmic-glow text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
              v1.0 Public Beta Live
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
              Code at the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmic-accent to-purple-400 text-glow">
                Speed of Thought
              </span>
            </h1>
          </MotionDiv>

          <MotionP 
            className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Cosmic IDE is the first <strong className="text-white">AI-Native</strong> environment built with <span className="text-orange-400">Rust</span> & <span className="text-cyan-400">Electron</span>. 
            Automate the mundane, focus on the logic.
          </MotionP>

          <MotionDiv 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a href="#download" className="px-8 py-4 bg-cosmic-accent hover:bg-indigo-500 text-white rounded-lg font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(99,102,241,0.3)] group">
              <Download className="w-5 h-5" />
              Download for Windows
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://github.com/Abhay2204/Cosmic-IDE" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-cosmic-700 hover:bg-cosmic-600 border border-white/5 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-all hover:border-white/20">
              <Terminal className="w-5 h-5 text-gray-400" />
              View on GitHub
            </a>
          </MotionDiv>

          <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-gray-500 text-sm font-mono">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Rust Core</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cosmic-glow" />
              <span>AI Native</span>
            </div>
          </div>
        </div>

        {/* Right: Main UI Screenshot */}
        <MotionDiv 
          className="relative lg:h-[600px] flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cosmic-accent/20 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

          {/* Main UI Image */}
          <div className="relative w-full max-w-2xl">
            <img 
              src="/images/Main ui.png" 
              alt="Cosmic IDE Main Interface" 
              className="w-full h-auto rounded-xl shadow-2xl border border-cosmic-600 animate-float"
            />
            {/* Overlay glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-cosmic-accent/10 to-transparent pointer-events-none"></div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Hero;