
import React, { useState } from 'react';
import { ArrowRight, Heart, Brain, Dna, Activity, Pill, Droplets, Search } from 'lucide-react';

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
  { 
    icon: Heart, 
    label: 'Heart Disease', 
    color: 'from-red-500/20 to-red-600/10', 
    hoverBorder: 'hover:border-red-400/50',
    activeBorder: 'border-red-400',
    activeColor: 'from-red-500/30 to-red-600/20',
    query: 'Find patients with atrial fibrillation and prior MI, age 50-70',
    stats: '2.4M records available'
  },
  { 
    icon: Brain, 
    label: 'Neurological', 
    color: 'from-purple-500/20 to-purple-600/10', 
    hoverBorder: 'hover:border-purple-400/50',
    activeBorder: 'border-purple-400',
    activeColor: 'from-purple-500/30 to-purple-600/20',
    query: 'Cohort with Alzheimer\'s diagnosis and MRI imaging data',
    stats: '890K records available'
  },
  { 
    icon: Dna, 
    label: 'Oncology', 
    color: 'from-datax-teal/20 to-datax-cyan/10', 
    hoverBorder: 'hover:border-datax-teal/50',
    activeBorder: 'border-datax-teal',
    activeColor: 'from-datax-teal/30 to-datax-cyan/20',
    query: 'Breast cancer patients with genomic sequencing and treatment history',
    stats: '1.8M records available'
  },
  { 
    icon: Activity, 
    label: 'Autoimmune', 
    color: 'from-orange-500/20 to-orange-600/10', 
    hoverBorder: 'hover:border-orange-400/50',
    activeBorder: 'border-orange-400',
    activeColor: 'from-orange-500/30 to-orange-600/20',
    query: 'Rheumatoid arthritis cohort with biologic therapy outcomes',
    stats: '650K records available'
  },
  { 
    icon: Droplets, 
    label: 'Diabetes', 
    color: 'from-blue-500/20 to-blue-600/10', 
    hoverBorder: 'hover:border-blue-400/50',
    activeBorder: 'border-blue-400',
    activeColor: 'from-blue-500/30 to-blue-600/20',
    query: 'Type 2 diabetes patients with HbA1c trends and comorbidities',
    stats: '3.1M records available'
  },
  { 
    icon: Pill, 
    label: 'Rare Disease', 
    color: 'from-amber-500/20 to-amber-600/10', 
    hoverBorder: 'hover:border-amber-400/50',
    activeBorder: 'border-amber-400',
    activeColor: 'from-amber-500/30 to-amber-600/20',
    query: 'Patients with Fabry disease and enzyme replacement therapy data',
    stats: '45K records available'
  },
];

const StepsSection = () => {
  const [selectedArea, setSelectedArea] = useState<number | null>(null);

  const handleTagClick = (index: number) => {
    setSelectedArea(selectedArea === index ? null : index);
  };

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
              {researchAreas.map((area, index) => {
                const isSelected = selectedArea === index;
                return (
                  <button 
                    key={index}
                    onClick={() => handleTagClick(index)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${isSelected ? area.activeColor : area.color} border ${isSelected ? area.activeBorder : 'border-gray-200/50'} ${!isSelected && area.hoverBorder} backdrop-blur-sm hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer group ${isSelected ? 'shadow-md scale-105' : ''}`}
                  >
                    <area.icon className={`w-3.5 h-3.5 transition-colors ${isSelected ? 'text-gray-800' : 'text-gray-600 group-hover:text-gray-800'}`} />
                    <span className={`text-xs font-medium transition-colors ${isSelected ? 'text-gray-800' : 'text-gray-600 group-hover:text-gray-800'}`}>{area.label}</span>
                  </button>
                );
              })}
            </div>
            
            {/* Dynamic query example */}
            <div className={`mt-6 transition-all duration-300 ${selectedArea !== null ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
              {selectedArea !== null && (
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-datax-teal/20 to-datax-cyan/10">
                      <Search className="w-4 h-4 text-datax-teal" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 mb-1">Example query</p>
                      <p className="text-sm text-gray-800 font-medium italic">"{researchAreas[selectedArea].query}"</p>
                      <p className="text-xs text-datax-teal font-semibold mt-2">{researchAreas[selectedArea].stats}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Default description when nothing selected */}
            <p className={`text-center mt-6 text-gray-600 text-sm max-w-sm mx-auto transition-all duration-300 ${selectedArea === null ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
              <span className="font-semibold text-datax-teal">Click a research area</span> — explore example queries across therapeutic domains
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
