import React from 'react';
import { Monitor } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
        {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-950 via-cosmic-900 to-cosmic-950"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <MotionDiv 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cosmic-800 to-cosmic-900 border border-white/10 rounded-3xl p-12 md:p-20 text-center shadow-2xl relative overflow-hidden"
        >
            {/* Glow blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cosmic-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Upgrade Your Workflow?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Join thousands of developers building the future with Cosmic IDE. Free for individuals during beta.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                {/* Full Setup Download */}
                <a href="https://drive.google.com/file/d/1CTSYg6KjNwfq4lR4X3g4sGwQ-MK9QqKY/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto px-10 py-5 bg-cosmic-accent hover:bg-indigo-500 text-white rounded-xl font-bold flex items-center justify-center gap-3 transition-transform hover:scale-105 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                    <Monitor className="w-8 h-8" />
                    <div className="text-left">
                        <div className="text-sm font-normal opacity-80">Download Full</div>
                        <div className="text-xl leading-none">Setup</div>
                    </div>
                </a>

                {/* Portable Setup Download */}
                <a href="https://drive.google.com/file/d/1clzBhI4AToqt_T__D72M6vNQjHHqyqe8/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto px-10 py-5 bg-cosmic-700 hover:bg-cosmic-600 border border-white/10 text-white rounded-xl font-bold flex items-center justify-center gap-3 transition-transform hover:scale-105">
                    <Monitor className="w-8 h-8" />
                    <div className="text-left">
                        <div className="text-sm font-normal opacity-80">Download Portable</div>
                        <div className="text-xl leading-none">Setup</div>
                    </div>
                </a>
            </div>
            
            <div className="mt-8 text-center">
                <p className="text-sm text-gray-500 mb-4">
                    v1.0.0 Beta | Windows 10/11 (64-bit)
                </p>
                <div className="text-xs text-gray-600">
                    <span className="font-semibold">Requirements:</span> Windows 10/11, 4GB RAM, 2GB Storage
                </div>
            </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default DownloadSection;