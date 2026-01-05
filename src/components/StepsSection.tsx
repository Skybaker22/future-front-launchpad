
import React from 'react';
import { ArrowRight } from 'lucide-react';

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
          
          {/* AI Agent Image */}
          <div className="flex-1 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-datax-teal/20 via-datax-cyan/10 to-datax-teal/20 rounded-3xl blur-2xl opacity-60"></div>
            <div className="relative">
              <img 
                src="/lovable-uploads/078d0b53-a217-4b2d-bf33-6e42644b0d39.png" 
                alt="DataX AI Research Assistant - Intelligent data discovery and cohort analysis"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border border-white/20"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
            </div>
            <p className="text-center mt-6 text-gray-600 text-sm">
              <span className="font-semibold text-datax-teal">AI-Powered Assistant</span> — Ask questions, discover cohorts, and accelerate your research
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
