import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="font-serif italic text-primary">Privacy</span> Policy
          </h1>
          
          <div className="prose prose-invert prose-gray max-w-none space-y-8">
            <p className="text-gray-400 text-lg">
              Last updated: January 2026
            </p>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
              <p className="text-gray-300">
                DataX ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">2. Information We Collect</h2>
              <p className="text-gray-300">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Contact information (name, email address, phone number)</li>
                <li>Account credentials</li>
                <li>Professional information (organization, role)</li>
                <li>Communications you send to us</li>
              </ul>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">3. How We Use Your Information</h2>
              <p className="text-gray-300">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Send you technical notices and support messages</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">4. Data Security</h2>
              <p className="text-gray-300">
                We implement appropriate technical and organizational measures to protect the security of your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">5. Data Sharing</h2>
              <p className="text-gray-300">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Service providers who assist in our operations</li>
                <li>Professional advisors (lawyers, accountants)</li>
                <li>Authorities when required by law</li>
              </ul>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">6. Your Rights</h2>
              <p className="text-gray-300">
                Depending on your location, you may have rights regarding your personal information, including the right to access, correct, delete, or port your data. Contact us to exercise these rights.
              </p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">7. Contact Us</h2>
              <p className="text-gray-300">
                If you have questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
