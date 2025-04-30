
import React from 'react';
import { CheckCircle } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Secure Data Access",
    description: "Access critical life science data through our secure, compliant platform.",
    benefits: ["End-to-end encryption", "Privacy-preserving", "Regulatory compliant"]
  },
  {
    number: "02",
    title: "Risk Mitigation",
    description: "Built-in financial risk management tools protect your company's exposure.",
    benefits: ["Custom risk profiles", "Automated compliance", "Financial safeguards"]
  },
  {
    number: "03",
    title: "Accelerated Innovation",
    description: "Focus on breakthroughs while our platform handles data security and risk.",
    benefits: ["Faster time-to-insights", "Cross-institutional collaboration", "Streamlined workflows"]
  }
];

const HowItWorks = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-datax-navy">
      {/* Background decorative element */}
      <div className="absolute inset-0 bg-wave-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-datax-teal">Approach</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A comprehensive platform designed specifically for the unique challenges of life science data
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="glassmorphism rounded-xl p-8 relative z-10 border-t border-white/5"
            >
              <div className="text-5xl font-bold text-datax-teal/20 mb-4">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 mb-6">{step.description}</p>
              
              <ul className="space-y-3">
                {step.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-datax-teal mr-2" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
