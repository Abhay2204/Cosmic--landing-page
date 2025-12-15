import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Github, Download, Code, Zap } from 'lucide-react';

const MotionDiv = motion.div as any;

const Installation: React.FC = () => {
  return (
    <section id="installation" className="py-24 bg-cosmic-950 border-t border-cosmic-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get Started with <span className="text-cosmic-glow">Cosmic IDE</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Multiple ways to install and run Cosmic IDE. Choose the method that works best for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Download Binaries */}
          <MotionDiv 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-cosmic-accent rounded-lg flex items-center justify-center">
                <Download className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Download Binaries</h3>
                <p className="text-cosmic-glow text-sm">Ready-to-use installers</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-cosmic-900 rounded-lg p-4 border border-white/5">
                <h4 className="text-white font-semibold mb-2">📦 Full Setup (Recommended)</h4>
                <p className="text-gray-400 text-sm mb-3">Complete installer with all dependencies</p>
                <a href="https://drive.google.com/file/d/1CTSYg6KjNwfq4lR4X3g4sGwQ-MK9QqKY/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-cosmic-accent hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors">
                  <Download className="w-4 h-4" />
                  Download Full Setup
                </a>
              </div>

              <div className="bg-cosmic-900 rounded-lg p-4 border border-white/5">
                <h4 className="text-white font-semibold mb-2">🎒 Portable Setup</h4>
                <p className="text-gray-400 text-sm mb-3">No installation required, run anywhere</p>
                <a href="https://drive.google.com/file/d/1clzBhI4AToqt_T__D72M6vNQjHHqyqe8/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-cosmic-700 hover:bg-cosmic-600 border border-white/10 text-white rounded-lg text-sm font-medium transition-colors">
                  <Download className="w-4 h-4" />
                  Download Portable
                </a>
              </div>
            </div>

            <div className="text-xs text-gray-500 bg-cosmic-900/50 rounded-lg p-3">
              <strong>System Requirements:</strong><br />
              • Windows 10/11 (64-bit)<br />
              • 4GB RAM minimum<br />
              • 2GB available storage
            </div>
          </MotionDiv>

          {/* Build from Source */}
          <MotionDiv 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel rounded-xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <Github className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Build from Source</h3>
                <p className="text-purple-400 text-sm">For developers and contributors</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  Prerequisites
                </h4>
                <div className="bg-cosmic-900 rounded-lg p-4 font-mono text-sm text-gray-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="w-4 h-4 text-blue-400" />
                    <span>Node.js 18+</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span>npm or yarn</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">Installation Steps</h4>
                <div className="bg-cosmic-950 rounded-lg overflow-hidden border border-white/10">
                  <div className="bg-cosmic-800 px-4 py-2 text-xs text-gray-400 font-mono border-b border-white/10">
                    Terminal
                  </div>
                  <div className="p-4 font-mono text-sm text-gray-300 space-y-2">
                    <div><span className="text-green-400">#</span> Clone the repository</div>
                    <div className="text-blue-300">git clone https://github.com/Abhay2204/Cosmic-IDE.git</div>
                    <div className="text-blue-300">cd cosmic-ide</div>
                    <br />
                    <div><span className="text-green-400">#</span> Install dependencies</div>
                    <div className="text-blue-300">npm install</div>
                    <br />
                    <div><span className="text-green-400">#</span> Run development mode</div>
                    <div className="text-blue-300">npm run electron:dev</div>
                    <br />
                    <div><span className="text-green-400">#</span> Or run desktop app</div>
                    <div className="text-blue-300">npm run desktop</div>
                  </div>
                </div>
              </div>
            </div>

            <a href="https://github.com/Abhay2204/Cosmic-IDE" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white text-cosmic-900 rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors">
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </MotionDiv>
        </div>

        {/* Additional Info */}
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-panel rounded-xl p-8 max-w-4xl mx-auto border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Need Help?</h3>
            <p className="text-gray-400 mb-6">
              Join our community for support, updates, and to contribute to the future of AI-native development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.linkedin.com/in/abhaymallick2002/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-cosmic-700 hover:bg-cosmic-600 text-white rounded-lg font-medium transition-colors">
                Report Issues
              </a>
              <a href="https://www.linkedin.com/in/abhaymallick2002/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-cosmic-700 hover:bg-cosmic-600 text-white rounded-lg font-medium transition-colors">
                Join Discussions
              </a>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Installation;