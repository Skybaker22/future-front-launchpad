
import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Connect',
    description: 'Integrate your data infrastructure with our secure platform in minutes.',
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
    <section className="py-24 relative overflow-hidden bg-datax-navy">
      <div className="absolute inset-0 bg-wave-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="font-serif italic text-datax-teal">Works</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Three simple steps to unlock the value of your life science data
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="glassmorphism rounded-2xl p-8 flex-1 text-center group hover:border-datax-teal/30 transition-all duration-300 w-full md:w-auto">
                <div className="text-6xl font-bold text-datax-teal/20 mb-4 group-hover:text-datax-teal/40 transition-colors duration-300">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <ArrowRight className="w-8 h-8 text-datax-teal/40 hidden md:block shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
