import React from 'react';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cosmic-950 border-t border-cosmic-800 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <img 
                src="/images/logo.png" 
                alt="Cosmic IDE Logo" 
                className="w-8 h-8 rounded shadow-lg"
              />
              Cosmic IDE
            </h3>
            <p className="text-gray-400 max-w-sm">
              The AI-native editor for the next generation of software engineers. Built for speed, designed for the future.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#features" className="hover:text-cosmic-glow cursor-pointer">Features</a></li>
              <li><a href="#download" className="hover:text-cosmic-glow cursor-pointer">Download</a></li>
              <li><a href="#installation" className="hover:text-cosmic-glow cursor-pointer">Installation</a></li>
              <li><a href="#comparison" className="hover:text-cosmic-glow cursor-pointer">Comparison</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="https://github.com/Abhay2204/Cosmic-IDE" target="_blank" rel="noopener noreferrer" className="hover:text-cosmic-glow cursor-pointer">GitHub</a></li>
              <li><a href="#community" className="hover:text-cosmic-glow cursor-pointer">Community</a></li>
              <li><a href="https://www.linkedin.com/in/abhaymallick2002/" target="_blank" rel="noopener noreferrer" className="hover:text-cosmic-glow cursor-pointer">LinkedIn</a></li>
              <li><a href="#how-it-works" className="hover:text-cosmic-glow cursor-pointer">How It Works</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cosmic-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Cosmic IDE. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
             <a href="https://github.com/Abhay2204/Cosmic-IDE" target="_blank" rel="noopener noreferrer">
               <Github className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
             </a>
             <a href="https://www.linkedin.com/in/abhaymallick2002/" target="_blank" rel="noopener noreferrer">
               <Linkedin className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
             </a>
             <Twitter className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer transition-colors" />
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            Made with <Heart className="w-3 h-3 text-red-500 fill-current" /> in Rust
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;