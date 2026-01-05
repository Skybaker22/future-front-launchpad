
import React, { useState } from 'react';
import { ArrowRight, Heart, Brain, Dna, Activity, Pill, Droplets, Search } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

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
    query: 'Find patients with atrial fibrillation and prior MI, age 50-70',
    stats: '2.4M records available',
    recordCount: 2400000
  },
  { 
    icon: Brain, 
    label: 'Neurological', 
    query: 'Cohort with Alzheimer\'s diagnosis and MRI imaging data',
    stats: '890K records available',
    recordCount: 890000
  },
  { 
    icon: Dna, 
    label: 'Oncology', 
    query: 'Breast cancer patients with genomic sequencing and treatment history',
    stats: '1.8M records available',
    recordCount: 1800000
  },
  { 
    icon: Activity, 
    label: 'Autoimmune', 
    query: 'Rheumatoid arthritis cohort with biologic therapy outcomes',
    stats: '650K records available',
    recordCount: 650000
  },
  { 
    icon: Droplets, 
    label: 'Diabetes', 
    query: 'Type 2 diabetes patients with HbA1c trends and comorbidities',
    stats: '3.1M records available',
    recordCount: 3100000
  },
  { 
    icon: Pill, 
    label: 'Rare Disease', 
    query: 'Patients with Fabry disease and enzyme replacement therapy data',
    stats: '45K records available',
    recordCount: 45000
  },
];

const formatRecordCount = (count: number): string => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(0)}K`;
  }
  return count.toString();
};

const StepsSection = () => {
  const [selectedAreas, setSelectedAreas] = useState<number[]>([]);

  const handleTagClick = (index: number) => {
    setSelectedAreas(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  const totalRecords = selectedAreas.reduce(
    (sum, idx) => sum + researchAreas[idx].recordCount, 
    0
  );

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
              <div key={step.number} className="w-full contents">
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
                  <ArrowRight className="w-6 h-6 text-datax-teal/60 hidden md:block lg:hidden shrink-0" />
                )}
              </div>
            ))}
          </div>
          
          {/* AI Agent Image with Research Areas */}
          <div className="flex-1 relative max-w-lg">
            {/* Layered glow effects (decorative) */}
            <div className="pointer-events-none absolute -inset-8 bg-gradient-to-tr from-datax-teal/30 via-transparent to-datax-cyan/20 rounded-[3rem] blur-3xl opacity-50"></div>
            <div className="pointer-events-none absolute -inset-4 bg-gradient-to-bl from-datax-cyan/20 via-transparent to-datax-teal/25 rounded-3xl blur-2xl opacity-60"></div>
            
            {/* Main image container */}
            <div className="relative group z-10">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-datax-teal/20 to-datax-cyan/20 rounded-3xl transform rotate-2 scale-105 opacity-40 group-hover:rotate-3 transition-transform duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5),0_0_40px_rgba(45,212,191,0.15)] border border-white/10">
                <img 
                  src="/lovable-uploads/078d0b53-a217-4b2d-bf33-6e42644b0d39.png" 
                  alt="DataX AI Research Assistant - Intelligent data discovery and cohort analysis"
                  className="w-full rounded-2xl"
                />
                {/* Glass overlay */}
                <div className="pointer-events-none absolute inset-3 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-datax-teal to-datax-cyan text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-datax-teal/30">
                AI-Powered
              </div>
            </div>
            
            {/* Research area tags */}
            <div className="relative z-10 mt-8">
              {/* Clear all button */}
              <div className={`flex justify-center mb-3 transition-all duration-300 ${selectedAreas.length > 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <button
                  onClick={() => setSelectedAreas([])}
                  className="text-xs text-gray-500 hover:text-datax-teal transition-colors flex items-center gap-1 px-2 py-1 rounded-md hover:bg-datax-teal/5"
                >
                  <span>Clear all</span>
                  <span className="text-datax-teal">({selectedAreas.length})</span>
                </button>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
              {researchAreas.map((area, index) => {
                const isSelected = selectedAreas.includes(index);
                return (
                  <Tooltip key={index} delayDuration={300}>
                    <TooltipTrigger asChild>
                      <button 
                        onClick={() => handleTagClick(index)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 cursor-pointer group ${
                          isSelected 
                            ? 'bg-gradient-to-r from-datax-teal to-datax-cyan text-white shadow-md shadow-datax-teal/25 scale-105 border border-datax-teal' 
                            : 'bg-gradient-to-r from-datax-teal/10 to-datax-cyan/5 border border-datax-teal/20 hover:border-datax-teal/40 hover:from-datax-teal/20 hover:to-datax-cyan/10 hover:scale-105 hover:shadow-md'
                        }`}
                      >
                        <area.icon className={`w-3.5 h-3.5 transition-colors ${isSelected ? 'text-white' : 'text-datax-teal group-hover:text-datax-teal'}`} />
                        <span className={`text-xs font-medium transition-colors ${isSelected ? 'text-white' : 'text-gray-700 group-hover:text-gray-900'}`}>{area.label}</span>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent 
                      side="top" 
                      className="max-w-xs bg-gray-900 text-white border-gray-800 p-3"
                    >
                      <div className="space-y-2">
                        <p className="text-xs text-gray-400 italic">"{area.query}"</p>
                        <p className="text-xs font-semibold text-datax-teal">{area.stats}</p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
              </div>
            </div>
            {/* Dynamic query examples */}
            <div className={`relative z-10 mt-6 transition-all duration-300 ${selectedAreas.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
              {selectedAreas.length > 0 && (
                <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-lg overflow-hidden">
                  {/* Combined summary row */}
                  <div className="bg-gradient-to-r from-datax-teal/10 to-datax-cyan/5 px-4 py-3 border-b border-gray-200/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-datax-teal animate-pulse"></div>
                        <span className="text-sm font-medium text-gray-700">
                          {selectedAreas.length} research {selectedAreas.length === 1 ? 'area' : 'areas'} selected
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-datax-teal">{formatRecordCount(totalRecords)}</span>
                        <span className="text-xs text-gray-500 ml-1">total records</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Individual queries */}
                  <div className="p-4 space-y-3 max-h-48 overflow-y-auto">
                    {selectedAreas.map((areaIndex) => (
                      <div key={areaIndex} className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-datax-teal/20 to-datax-cyan/10 shrink-0">
                          <Search className="w-4 h-4 text-datax-teal" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            {React.createElement(researchAreas[areaIndex].icon, { className: "w-3 h-3 text-datax-teal" })}
                            <p className="text-xs text-gray-500 font-medium">{researchAreas[areaIndex].label}</p>
                          </div>
                          <p className="text-sm text-gray-800 font-medium italic">"{researchAreas[areaIndex].query}"</p>
                          <p className="text-xs text-datax-teal font-semibold mt-1">{researchAreas[areaIndex].stats}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Default description when nothing selected */}
            <p className={`text-center mt-6 text-gray-600 text-sm max-w-sm mx-auto transition-all duration-300 ${selectedAreas.length === 0 ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
              <span className="font-semibold text-datax-teal">Click research areas</span> — select multiple to explore combined queries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
