
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const benefits = [
    'A privacy-preserving collaboration layer enabling compliant, scalable data access',
    'Unlock AI collaborations that accelerate innovation in healthcare',
    'Drive research impact & create new revenue streams',
    'Healthcare providers: Monetize your data securely while maintaining full control and patient privacy',
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-section-dark">
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              <span className="font-serif italic text-primary">Get Started</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Whether you're a <span className="font-semibold text-white">researcher seeking data</span> or a{" "}
              <span className="font-semibold text-white">healthcare provider</span> looking to create 
              recurring revenue from your data without compromising control and safety — we're here to help.
            </p>
          </div>
          
          <div className="glassmorphism rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left - Benefits */}
              <div>
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-gray-300">{benefit}</p>
                    </div>
                  ))}
                </div>
                
              </div>
              
              {/* Right - Direct Contact CTA */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    Let's Connect
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Whether you're looking to access data or monetize your assets, our team will get back to you within 24 hours.
                  </p>
                </div>
                
                <a 
                  href="mailto:info@datax.me"
                  className="flex items-center justify-center gap-3 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25"
                >
                  <Mail className="w-5 h-5" />
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </a>
                
                <p className="text-xs text-center text-gray-500">
                  We prioritize your privacy. All communications are protected by our confidentiality agreement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
