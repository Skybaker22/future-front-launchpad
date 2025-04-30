
import React from 'react';
import { CheckCircle } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Create your account in under 2 minutes with our streamlined onboarding process.",
    benefits: ["No credit card required", "Free starter tier", "Instant access"]
  },
  {
    number: "02",
    title: "Configure Platform",
    description: "Customize the platform to match your business needs with our intuitive dashboard.",
    benefits: ["Drag-and-drop interface", "Pre-built templates", "Expert support"]
  },
  {
    number: "03",
    title: "Launch & Scale",
    description: "Go live with confidence knowing our platform scales with your business needs.",
    benefits: ["99.9% uptime guarantee", "Real-time analytics", "Automatic backups"]
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-grid">
      {/* Background decorative element */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-futuristic-purple/10 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It <span className="text-gradient">Works</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Our simple three-step process gets you from sign-up to fully operational in minutes, not days
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="glassmorphism rounded-xl p-8 relative z-10 border-t border-white/5"
            >
              <div className="text-5xl font-bold text-futuristic-purple/20 mb-4">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 mb-6">{step.description}</p>
              
              <ul className="space-y-3">
                {step.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-futuristic-cyan mr-2" />
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
