import React from 'react';
import { Check, X } from 'lucide-react';
import { ComparisonRow } from '../types';

const comparisonData: ComparisonRow[] = [
  { feature: "AI Integration", cosmic: "Native, Multi-Model, Agentic", vscode: "Extension-based only" },
  { feature: "Startup Speed", cosmic: "Instant (Rust Core)", vscode: "Slow (Heavy JS)" },
  { feature: "Memory Usage", cosmic: "Optimized (Low)", vscode: "High (Electron Bloat)" },
  { feature: "Configuration", cosmic: "Zero-Config (Auto-detect)", vscode: "Manual JSON editing" },
  { feature: "Debugging", cosmic: "AI-Assisted Auto-Debug", vscode: "Manual Breakpoints" },
];

const Comparison: React.FC = () => {
  return (
    <section id="comparison" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Why Switch to <span className="text-cosmic-accent">Cosmic</span>?
            </h2>
            <p className="text-gray-400">See how we stack up against the standard.</p>
        </div>

        <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-cosmic-800 text-sm uppercase tracking-wider">
                <th className="p-6 text-gray-400 font-medium w-1/3">Feature</th>
                <th className="p-6 text-cosmic-glow font-bold w-1/3 bg-cosmic-accent/10 border-b-2 border-cosmic-accent">
                    Cosmic IDE
                </th>
                <th className="p-6 text-gray-500 font-medium w-1/3">
                    Standard VS Code
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cosmic-700">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="p-6 font-medium text-white">{row.feature}</td>
                  <td className="p-6 bg-cosmic-accent/5 text-cosmic-100 font-semibold relative">
                    {/* Glow effect on hover for the cell */}
                    {typeof row.cosmic === 'boolean' ? (
                        row.cosmic ? <Check className="w-5 h-5 text-green-400" /> : <X className="w-5 h-5 text-red-400" />
                    ) : (
                        row.cosmic
                    )}
                  </td>
                  <td className="p-6 text-gray-500">
                    {typeof row.vscode === 'boolean' ? (
                        row.vscode ? <Check className="w-5 h-5 text-gray-600" /> : <X className="w-5 h-5 text-gray-600" />
                    ) : (
                        row.vscode
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;