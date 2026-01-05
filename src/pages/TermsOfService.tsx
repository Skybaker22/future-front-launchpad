import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="font-serif italic text-primary">Terms</span> of Service
            </h1>
          </ScrollReveal>
          
          <div className="prose prose-invert prose-gray max-w-none space-y-8">
            <p className="text-gray-400 text-lg">
              Last updated: January 2026
            </p>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">1. Agreement to Terms</h2>
              <p className="text-gray-300">
                By accessing or using DataX's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">2. Description of Services</h2>
              <p className="text-gray-300">
                DataX provides a privacy-preserving data collaboration platform that enables secure access to healthcare data for research and AI development purposes. Our services include data access, collaboration tools, and related support.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">3. User Responsibilities</h2>
              <p className="text-gray-300">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use the platform in compliance with all applicable laws</li>
                <li>Respect data privacy and confidentiality requirements</li>
                <li>Not attempt to access data without proper authorization</li>
              </ul>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">4. Data Usage and Compliance</h2>
              <p className="text-gray-300">
                All data accessed through DataX must be used in accordance with applicable privacy regulations, including but not limited to GDPR, HIPAA, and other relevant data protection laws. Users must maintain appropriate data handling practices and security measures.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">5. Intellectual Property</h2>
              <p className="text-gray-300">
                The DataX platform, including all content, features, and functionality, is owned by DataX and protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">6. Limitation of Liability</h2>
              <p className="text-gray-300">
                DataX shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the services, even if we have been advised of the possibility of such damages.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">7. Termination</h2>
              <p className="text-gray-300">
                We reserve the right to terminate or suspend your access to our services at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">8. Changes to Terms</h2>
              <p className="text-gray-300">
                We may modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">9. Contact Us</h2>
              <p className="text-gray-300">
                If you have questions about these Terms, please contact us at:
              </p>
              <p className="text-primary">
                <a href="mailto:info@datax.me" className="hover:underline">info@datax.me</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
