
import React from 'react';
import { ArrowRight, Heart, Brain, Dna, Activity, Pill, Droplets } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Connect',
    description: 'Integrate your data infrastructure with our secure platform.',
  },
  {
    number: '02',
    title: 'Collaborate',
    description: 'Access AI partnerships and research opportunities while data stays on-premise.',
  },
  {
    number: '03',
    title: 'Create Value',
    description: 'Generate new revenue streams from your data assets through AI collaborations.',
  },
];

const researchAreas = [
  { icon: Heart, label: 'Heart Disease', color: 'from-red-500/20 to-red-600/10', hoverBorder: 'hover:border-red-400/50' },
  { icon: Brain, label: 'Neurological', color: 'from-purple-500/20 to-purple-600/10', hoverBorder: 'hover:border-purple-400/50' },
  { icon: Dna, label: 'Oncology', color: 'from-datax-teal/20 to-datax-cyan/10', hoverBorder: 'hover:border-datax-teal/50' },
  { icon: Activity, label: 'Autoimmune', color: 'from-orange-500/20 to-orange-600/10', hoverBorder: 'hover:border-orange-400/50' },
  { icon: Droplets, label: 'Diabetes', color: 'from-blue-500/20 to-blue-600/10', hoverBorder: 'hover:border-blue-400/50' },
  { icon: Pill, label: 'Rare Disease', color: 'from-amber-500/20 to-amber-600/10', hoverBorder: 'hover:border-amber-400/50' },
];

const StepsSection = () => {
  return (
    <section className="py-32 pb-56 relative overflow-hidden bg-section-light gradient-fade-to-dark">
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            How It <span className="font-serif italic text-datax-teal">Works</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Three simple steps to unlock the value of your life science data
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Steps */}
          <div className="flex flex-col md:flex-row lg:flex-col items-center lg:items-start gap-6 flex-1">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="glassmorphism-light rounded-2xl p-6 group hover:border-datax-teal/30 transition-all duration-300 w-full md:flex-1 lg:w-full">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl font-bold text-datax-teal/30 group-hover:text-datax-teal/50 transition-colors duration-300">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-datax-teal/60 hidden md:block lg:hidden shrink-0 rotate-0 md:rotate-0" />
                )}
              </React.Fragment>
            ))}
          </div>
          
          {/* AI Agent Image with Research Areas */}
          <div className="flex-1 relative max-w-lg">
            {/* Layered glow effects */}
            <div className="absolute -inset-8 bg-gradient-to-tr from-datax-teal/30 via-transparent to-datax-cyan/20 rounded-[3rem] blur-3xl opacity-50"></div>
            <div className="absolute -inset-4 bg-gradient-to-bl from-datax-cyan/20 via-transparent to-datax-teal/25 rounded-3xl blur-2xl opacity-60"></div>
            
            {/* Main image container */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-datax-teal/20 to-datax-cyan/20 rounded-3xl transform rotate-2 scale-105 opacity-40 group-hover:rotate-3 transition-transform duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5),0_0_40px_rgba(45,212,191,0.15)] border border-white/10">
                <img 
                  src="/lovable-uploads/078d0b53-a217-4b2d-bf33-6e42644b0d39.png" 
                  alt="DataX AI Research Assistant - Intelligent data discovery and cohort analysis"
                  className="w-full rounded-2xl"
                />
                {/* Glass overlay */}
                <div className="absolute inset-3 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-datax-teal to-datax-cyan text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-datax-teal/30">
                AI-Powered
              </div>
            </div>
            
            {/* Research area tags */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {researchAreas.map((area, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${area.color} border border-gray-200/50 ${area.hoverBorder} backdrop-blur-sm hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer group`}
                >
                  <area.icon className="w-3.5 h-3.5 text-gray-600 group-hover:text-gray-800 transition-colors" />
                  <span className="text-xs font-medium text-gray-600 group-hover:text-gray-800 transition-colors">{area.label}</span>
                </div>
              ))}
            </div>
            
            {/* Description */}
            <p className="text-center mt-6 text-gray-600 text-sm max-w-sm mx-auto">
              <span className="font-semibold text-datax-teal">Ask naturally</span> — discover cohorts across cardiovascular, autoimmune, oncology, and rare disease research
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
