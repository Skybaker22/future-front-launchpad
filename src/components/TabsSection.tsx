
import React, { useState } from 'react';
import { Shield, Key, LineChart, HandCoins, Database, ShieldCheck } from 'lucide-react';

const tabs = [
  {
    id: 'data-developers',
    label: 'Data Developers',
    title: 'For Data Developers',
    description: 'Access sensitive life science datasets through our federated learning technology. Train AI models securely without data ever leaving premises.',
    features: [
      { icon: Database, text: 'Millions of datasets from global partners' },
      { icon: Key, text: 'Fast access — weeks instead of months' },
      { icon: ShieldCheck, text: 'Fully compliant and secure data access' },
    ],
    stat: { value: '100%', label: 'Data sovereignty maintained' },
  },
  {
    id: 'data-partners',
    label: 'Data Partners',
    title: 'For Data Partners',
    description: 'We handle the technical complexity so you can focus on what matters — patient care and research.',
    features: [
      { icon: HandCoins, text: 'New revenue streams from your data' },
      { icon: LineChart, text: 'Accelerate healthcare innovation' },
      { icon: Shield, text: 'Complete transparency & control' },
    ],
    stat: { value: '0%', label: 'Upfront data costs' },
    painPoints: [
      { problem: 'No IT resources for integration', solution: 'Fully managed setup — we handle everything' },
      { problem: 'Data privacy & compliance concerns', solution: 'Data never leaves your premises' },
      { problem: 'Complex legal agreements', solution: 'Standardized contracts, fast onboarding' },
      { problem: 'Unclear ROI from data sharing', solution: 'Outcome-based pricing — pay only for results' },
    ],
  },
];

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState('data-developers');
  const activeContent = tabs.find(t => t.id === activeTab)!;

  return (
    <section id="data-developers" className="py-24 relative overflow-hidden bg-datax-navy">
      <div className="absolute inset-0 bg-wave-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Who We <span className="font-serif italic text-datax-teal">Serve</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Connecting data developers with data partners to accelerate healthcare AI innovation
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-datax-teal text-datax-navy'
                  : 'glassmorphism hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Left - Visual */}
          <div className="glassmorphism rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-datax-teal/10 to-transparent"></div>
            <div className="relative z-10">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-6xl font-bold text-datax-teal">{activeContent.stat.value}</span>
              </div>
              <p className="text-xl text-gray-300 mb-6">{activeContent.stat.label}</p>
              
              {/* Pain Points for Data Partners */}
              {activeContent.painPoints && (
                <div className="space-y-3 mt-6 border-t border-white/10 pt-6">
                  <p className="text-sm text-datax-teal font-medium uppercase tracking-wide mb-4">We solve your biggest challenges</p>
                  {activeContent.painPoints.map((item, i) => (
                    <div key={i} className="bg-white/5 rounded-lg p-3">
                      <p className="text-gray-400 text-sm line-through mb-1">{item.problem}</p>
                      <p className="text-gray-200 text-sm font-medium">✓ {item.solution}</p>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Placeholder grid for Data Developers */}
              {!activeContent.painPoints && (
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="h-24 bg-white/5 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-datax-teal/20"></div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Right - Text */}
          <div>
            <h3 className="text-3xl font-bold mb-4">{activeContent.title}</h3>
            <p className="text-gray-400 mb-8">{activeContent.description}</p>
            
            <div className="space-y-4">
              {activeContent.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-4 glassmorphism rounded-lg p-4">
                  <div className="w-10 h-10 rounded-full bg-datax-teal/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-datax-teal" />
                  </div>
                  <span className="text-gray-200">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
