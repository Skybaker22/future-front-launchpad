
import React, { useState } from 'react';
import { Shield, Key, LineChart, HandCoins, Database, ShieldCheck } from 'lucide-react';

const tabs = [
  {
    id: 'data-access',
    label: 'Secure Access',
    title: 'Compliant Data Access',
    description: 'Access sensitive life science datasets through our federated learning technology. Data never leaves the premises while AI models train securely.',
    features: [
      { icon: Shield, text: 'End-to-end encryption' },
      { icon: Key, text: 'Privacy-preserving protocols' },
      { icon: ShieldCheck, text: 'Regulatory compliance built-in' },
    ],
    stat: { value: '100%', label: 'Data sovereignty maintained' },
  },
  {
    id: 'transparency',
    label: 'Transparency',
    title: 'Complete Transparency',
    description: 'Full oversight regarding when, by whom, and for what reasons your data is accessed. Track every interaction in real-time.',
    features: [
      { icon: LineChart, text: 'Real-time access logs' },
      { icon: Database, text: 'Audit trail reporting' },
      { icon: ShieldCheck, text: 'Usage analytics dashboard' },
    ],
    stat: { value: '24/7', label: 'Monitoring & visibility' },
  },
  {
    id: 'pricing',
    label: 'Value-Based Pricing',
    title: 'Outcome-Based Revenue',
    description: 'Pay only for the actual business impact of the data. Our innovative pricing model ensures fair value exchange.',
    features: [
      { icon: HandCoins, text: 'Performance-based fees' },
      { icon: LineChart, text: 'Value chain tracking' },
      { icon: Database, text: 'Transparent cost breakdown' },
    ],
    stat: { value: '0%', label: 'Upfront data costs' },
  },
];

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState('data-access');
  const activeContent = tabs.find(t => t.id === activeTab)!;

  return (
    <section className="py-24 relative overflow-hidden bg-datax-navy">
      <div className="absolute inset-0 bg-wave-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="font-serif italic text-datax-teal">Approach</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A comprehensive platform designed specifically for the unique challenges of life science data
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Left - Visual */}
          <div className="glassmorphism rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-datax-teal/10 to-transparent"></div>
            <div className="relative z-10">
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-6xl font-bold text-datax-teal">{activeContent.stat.value}</span>
              </div>
              <p className="text-xl text-gray-300">{activeContent.stat.label}</p>
              
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="h-24 bg-white/5 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-datax-teal/20"></div>
                  </div>
                ))}
              </div>
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
