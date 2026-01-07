import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Mail, CheckCircle, Calendar } from 'lucide-react';

const CTABanner = () => {
  const benefits = [
    'A privacy-preserving collaboration layer enabling compliant, scalable data access',
    'Unlock AI collaborations that accelerate innovation in healthcare',
    'Drive research impact & create new revenue streams',
    'Healthcare providers: Monetize your data securely while maintaining full control and patient privacy',
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-section-dark">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
      
      {/* Animated glow orbs */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-primary/15 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Start Your Journey Today</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your{' '}
              <span className="text-primary">Data Workflow</span>?
            </h2>
            
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Whether you're a <span className="font-semibold text-white">researcher seeking data</span> or a{" "}
              <span className="font-semibold text-white">healthcare provider</span> looking to create 
              recurring revenue from your data without compromising control and safety — we're here to help.
            </p>
          </div>

          {/* Content Card */}
          <div className="glassmorphism rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left - Benefits */}
              <div>
                <div className="space-y-4">
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
              
              {/* Right - Contact Options */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    Let's Connect
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Whether you're looking to access data or monetize your assets, reach out or book a call directly.
                  </p>
                </div>
                
                {/* Two CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:info@datax.me"
                    className="flex-1 flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25"
                  >
                    <Mail className="w-5 h-5" />
                    Contact Us
                  </a>
                  
                  <a 
                    href="https://calendly.com/info-datax/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <Calendar className="w-5 h-5" />
                    Book a Call
                  </a>
                </div>
                
                <p className="text-xs text-center text-gray-500">
                  We respond within 24 hours. All communications are confidential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
