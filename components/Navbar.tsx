import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionDiv = motion.div as any;

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cosmic-900/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <img 
            src="/images/logo.png" 
            alt="Cosmic IDE Logo" 
            className="w-8 h-8 rounded-lg shadow-lg shadow-cosmic-accent/20"
          />
          <span>Cosmic IDE</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
          <a href="#comparison" className="hover:text-white transition-colors">Comparison</a>
          <a href="#community" className="hover:text-white transition-colors">Community</a>
          <a href="#installation" className="hover:text-white transition-colors">Installation</a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/Abhay2204/Cosmic-IDE" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#download" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all border border-white/5 flex items-center gap-2 backdrop-blur-sm">
            <Download className="w-4 h-4" />
            Download Beta
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
            <MotionDiv 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-cosmic-900 border-b border-white/10"
            >
                <div className="flex flex-col p-6 space-y-4 text-center">
                    <a href="#features" className="text-gray-300 py-2" onClick={() => setIsOpen(false)}>Features</a>
                    <a href="#how-it-works" className="text-gray-300 py-2" onClick={() => setIsOpen(false)}>How It Works</a>
                    <a href="#comparison" className="text-gray-300 py-2" onClick={() => setIsOpen(false)}>Comparison</a>
                    <a href="#community" className="text-gray-300 py-2" onClick={() => setIsOpen(false)}>Community</a>
                    <a href="#installation" className="text-gray-300 py-2" onClick={() => setIsOpen(false)}>Installation</a>
                    <a href="https://github.com/Abhay2204/Cosmic-IDE" target="_blank" rel="noopener noreferrer" className="text-gray-300 py-2" onClick={() => setIsOpen(false)}>GitHub</a>
                    <a href="#download" className="bg-cosmic-accent text-white w-full py-3 rounded-lg font-bold" onClick={() => setIsOpen(false)}>
                        Download Now
                    </a>
                </div>
            </MotionDiv>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;