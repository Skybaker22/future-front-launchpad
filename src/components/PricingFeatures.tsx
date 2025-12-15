
import React from 'react';
import { HandCoins, Key, ShieldCheck } from 'lucide-react';

interface PricingFeatureProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
}

const PricingFeature = ({ icon, title, description }: PricingFeatureProps) => {
  return (
    <div className="flex gap-6 items-start py-6 group">
      <div className="flex-shrink-0 mt-1 w-14 h-14 glassmorphism rounded-full flex items-center justify-center group-hover:bg-datax-teal/10 transition-all duration-300">
        {icon}
      </div>
      <div className="flex-1">
        {title}
        {description}
      </div>
    </div>
  );
};

const PricingFeatures = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-datax-navy border-t border-white/5">
      {/* Background decorative element */}
      <div className="absolute inset-0 bg-wave-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-datax-teal">Approach</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Redefining how life science data is accessed, paid for, and monitored
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto glassmorphism rounded-xl p-8 lg:p-12 border border-white/10 shadow-lg relative overflow-hidden">
          {/* Decorative glow effects */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-datax-teal/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-datax-teal/10 rounded-full blur-3xl"></div>
          
          <PricingFeature
            icon={<HandCoins className="w-10 h-10 text-datax-teal" />}
            title={
              <h3 className="text-xl md:text-2xl font-medium mb-2 group-hover:text-datax-teal transition-colors">
                <span className="text-datax-teal">Secure and transparent</span> outcome-based pricing
              </h3>
            }
            description={
              <p className="text-xl md:text-2xl font-medium text-white">
                <span className="text-datax-teal">Pay</span> only for the <span className="text-datax-teal">actual business impact of the data</span>
              </p>
            }
          />
          
          <div className="border-t border-white/10 my-2"></div>
          
          <PricingFeature
            icon={<Key className="w-10 h-10 text-datax-teal" />}
            title={
              <h3 className="text-xl md:text-2xl font-medium mb-2 group-hover:text-datax-teal transition-colors">
                <span className="text-datax-teal">Secure and compliant</span> access to sensitive datasets via
              </h3>
            }
            description={
              <p className="text-xl md:text-2xl font-medium text-white">
                <span className="text-datax-teal">confidential computing ("Data visiting")</span>
              </p>
            }
          />
          
          <div className="border-t border-white/10 my-2"></div>
          
          <PricingFeature
            icon={<ShieldCheck className="w-10 h-10 text-datax-teal" />}
            title={
              <h3 className="text-xl md:text-2xl font-medium mb-2 group-hover:text-datax-teal transition-colors">
                <span className="text-datax-teal">Complete transparency</span> and <span className="text-datax-teal">oversight</span> regarding when,
              </h3>
            }
            description={
              <p className="text-xl md:text-2xl font-medium text-white">
                by whom, and for what reasons data is accessed
              </p>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default PricingFeatures;
