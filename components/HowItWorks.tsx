import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Code2, 
  FileText, 
  Terminal, 
  Eye, 
  Zap, 
  ChevronRight,
  Sparkles,
  CheckCircle
} from 'lucide-react';

const MotionDiv = motion.div as any;

interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  details: string[];
  codeExample?: string;
  preview?: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    id: 'chat',
    title: 'AI-Powered Chat',
    description: 'Start with natural language. Describe your project idea and watch Cosmic IDE understand your vision.',
    icon: Bot,
    details: [
      'Multi-provider AI integration (GPT-4o, Claude 3.5, Gemini)',
      'Context-aware responses based on your project',
      'Smart project structure suggestions',
      'Real-time code generation'
    ],
    codeExample: `// User: "Create a modern portfolio website with dark theme"
// AI Response: I'll create a responsive portfolio with:
// - Modern dark theme with cosmic colors
// - Smooth animations and transitions  
// - Mobile-first responsive design
// - Contact form with validation`,
    preview: 'Portfolio website with dark cosmic theme'
  },
  {
    id: 'generate',
    title: 'Intelligent Code Generation',
    description: 'AI automatically creates complete project structures with proper file organization and best practices.',
    icon: Code2,
    details: [
      'Automatic file creation from code blocks',
      'Smart naming based on content analysis',
      'Project structure optimization',
      'Cross-file dependency management'
    ],
    codeExample: `portfolio/
├── index.html          // Main landing page
├── styles/
│   ├── main.css       // Core styles
│   └── animations.css // Smooth transitions
├── scripts/
│   └── app.js         // Interactive features
└── assets/
    └── images/        // Optimized assets`,
    preview: 'Complete project structure generated'
  },
  {
    id: 'edit',
    title: 'Advanced Code Editor',
    description: 'Rust-powered editor with IntelliSense, syntax highlighting, and AI-assisted coding.',
    icon: FileText,
    details: [
      'Syntax highlighting for 20+ languages',
      'Real-time error detection and fixes',
      'AI-powered auto-completion',
      'Multi-cursor editing and refactoring'
    ],
    codeExample: `function createPortfolio() {
  // AI suggests: Add animation library
  const timeline = gsap.timeline();
  
  // Auto-complete: .from(), .to(), .set()
  timeline.from('.hero-title', {
    opacity: 0,
    y: 50,
    duration: 1.2
  });
}`,
    preview: 'IntelliSense suggestions and error detection'
  },
  {
    id: 'terminal',
    title: 'Integrated Terminal',
    description: 'Multi-terminal system with AI command suggestions and automated task execution.',
    icon: Terminal,
    details: [
      'Split panes and tabbed terminals',
      'AI-suggested commands',
      'Automated build processes',
      'Real-time output monitoring'
    ],
    codeExample: `$ npm init -y
$ npm install gsap three.js
$ npm run dev

✓ Development server started
✓ Live reload enabled
✓ Hot module replacement active
→ http://localhost:3000`,
    preview: 'Multi-terminal with live development server'
  },
  {
    id: 'preview',
    title: 'Live Preview System',
    description: 'Instant preview with hot reload, responsive testing, and browser synchronization.',
    icon: Eye,
    details: [
      'Real-time preview updates',
      'Responsive design testing',
      'Cross-browser compatibility',
      'Performance monitoring'
    ],
    codeExample: `// Live Server Status
Port: 3000
Status: ✓ Running
Hot Reload: ✓ Active
CORS: ✓ Enabled

// Auto-detected changes:
- styles/main.css (updated)
- scripts/app.js (modified)
→ Refreshing preview...`,
    preview: 'Live preview with responsive testing'
  },
  {
    id: 'deploy',
    title: 'Smart Deployment',
    description: 'AI-assisted deployment with optimization, testing, and performance monitoring.',
    icon: Zap,
    details: [
      'Automated build optimization',
      'Performance analysis',
      'Deployment suggestions',
      'Continuous integration setup'
    ],
    codeExample: `$ cosmic deploy --optimize

✓ Code minification complete
✓ Assets optimized (87% reduction)
✓ Performance score: 98/100
✓ Deployed to production

🚀 Your site is live!
→ https://your-portfolio.dev`,
    preview: 'Optimized production deployment'
  }
];

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState('chat');
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('how-it-works');
      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setShowFloatingCTA(isVisible && rect.top < -100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentStep = workflowSteps.find(step => step.id === activeStep);

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-cosmic-950 via-cosmic-900 to-cosmic-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cosmic-accent/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-cosmic-accent/30 bg-cosmic-accent/10 text-cosmic-glow text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Complete Development Workflow
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmic-accent to-purple-400 text-glow">Cosmic IDE</span> Works
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            From idea to deployment in minutes, not hours. Experience the future of AI-native development 
            with intelligent automation at every step.
          </p>
        </MotionDiv>

        {/* Workflow Steps */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Step Navigation */}
          <div className="space-y-4">
            {workflowSteps.map((step, index) => (
              <MotionDiv
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 group ${
                  activeStep === step.id 
                    ? 'bg-cosmic-accent/10 border-cosmic-accent/50 shadow-[0_0_30px_rgba(99,102,241,0.2)]' 
                    : 'bg-cosmic-800/50 border-white/10 hover:border-cosmic-accent/30 hover:bg-cosmic-700/50'
                }`}
                onClick={() => setActiveStep(step.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                    activeStep === step.id ? 'bg-cosmic-accent' : 'bg-cosmic-700 group-hover:bg-cosmic-accent'
                  }`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono text-cosmic-glow">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className={`text-lg font-semibold transition-colors ${
                        activeStep === step.id ? 'text-cosmic-glow' : 'text-white group-hover:text-cosmic-glow'
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-all ${
                    activeStep === step.id ? 'text-cosmic-accent rotate-90' : 'text-gray-500 group-hover:text-cosmic-accent'
                  }`} />
                </div>
              </MotionDiv>
            ))}
          </div>

          {/* Step Details */}
          <div className="flex items-center justify-center lg:min-h-[600px]">
            <div className="w-full">
              <AnimatePresence mode="wait">
                {currentStep && (
                  <MotionDiv
                    key={currentStep.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="glass-panel rounded-xl p-8 border border-cosmic-accent/20"
                  >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 bg-cosmic-accent rounded-xl flex items-center justify-center">
                      <currentStep.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{currentStep.title}</h3>
                      <p className="text-cosmic-glow text-sm">{currentStep.preview}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                      <div className="space-y-2">
                        {currentStep.details.map((detail, index) => (
                          <MotionDiv
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3 text-gray-300"
                          >
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-sm">{detail}</span>
                          </MotionDiv>
                        ))}
                      </div>
                    </div>

                    {currentStep.codeExample && (
                      <div>
                        <h4 className="text-white font-semibold mb-3">Example:</h4>
                        <div className="bg-cosmic-950 rounded-lg overflow-hidden border border-white/10">
                          {/* Mock IDE Header */}
                          <div className="flex items-center justify-between px-4 py-2 bg-cosmic-800 border-b border-white/10">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <div className="text-xs text-gray-400 font-mono">
                              {currentStep.id === 'chat' ? 'AI Chat' : 
                               currentStep.id === 'generate' ? 'File Explorer' :
                               currentStep.id === 'edit' ? 'main.js' :
                               currentStep.id === 'terminal' ? 'Terminal' :
                               currentStep.id === 'preview' ? 'Live Preview' : 'Deploy'}
                            </div>
                            <div className="w-4"></div>
                          </div>
                          <div className="p-4 font-mono text-sm">
                            <pre className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                              {currentStep.codeExample}
                            </pre>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  </MotionDiv>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>




      </div>

      {/* Floating CTA */}
      <AnimatePresence>
        {showFloatingCTA && (
          <MotionDiv
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <button className="px-6 py-3 bg-cosmic-accent hover:bg-indigo-500 text-white rounded-full font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-[0_0_30px_rgba(99,102,241,0.4)] pulse-glow">
              <Zap className="w-4 h-4" />
              Try Now
            </button>
          </MotionDiv>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HowItWorks;