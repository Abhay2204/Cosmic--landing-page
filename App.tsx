import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Comparison from './components/Comparison';
import Installation from './components/Installation';
import Community from './components/Community';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import StarBackground from './components/StarBackground';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cosmic-900 text-white selection:bg-cosmic-accent selection:text-white">
      <StarBackground />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Comparison />
        <Installation />
        <Community />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;