
import React from 'react';
import { HandCoins, LineChart, Shield, Database, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: HandCoins,
    title: 'AI Partnership Gateway',
    description: 'Gateway for AI partnerships from EU & worldwide. We bring demand to your datasets.',
    highlight: true,
  },
  {
    icon: LineChart,
    title: 'Academic Value Creation',
    description: 'Joint research projects, publications in top-tier journals, and new grants & funding opportunities.',
  },
  {
    icon: Shield,
    title: 'Secure On-Premise Infrastructure',
    description: 'Federated learning technology keeps you in full control. Companies train on anonymized data on-premise.',
  },
  {
    icon: Database,
    title: 'Outcome-Based Revenue',
    description: 'Participate in future generated value. Track value along the data value chain.',
  },
];

const FeaturesGrid = () => {
  return (
    <section id="data-partners" className="py-24 relative overflow-hidden bg-datax-navy">
      <div className="absolute inset-0 bg-wave-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            For <span className="font-serif italic text-datax-teal">Data Partners</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Unlock the value of your datasets through secure AI partnerships while maintaining full control
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`glassmorphism rounded-2xl p-8 group hover:border-datax-teal/30 transition-all duration-300 ${
                feature.highlight ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-datax-teal/20 flex items-center justify-center shrink-0 group-hover:bg-datax-teal/30 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-datax-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-datax-teal transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                  
                  {feature.highlight && (
                    <div className="flex flex-wrap gap-3 mt-6">
                      {['EU Partners', 'Global Reach', 'Enterprise Ready'].map((tag, i) => (
                        <span key={i} className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-sm">
                          <CheckCircle className="w-4 h-4 text-datax-teal" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
