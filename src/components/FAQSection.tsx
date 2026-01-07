import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ScrollReveal from './ScrollReveal';

const faqs = [
  {
    question: "How does DataX ensure data privacy and security?",
    answer: "DataX employs enterprise-grade security measures including end-to-end encryption, SOC 2 Type II compliance, and HIPAA-compliant infrastructure. All data is anonymized before analysis, ensuring patient privacy is never compromised. We also implement strict access controls and audit logging for complete transparency."
  },
  {
    question: "What compliance standards does DataX meet?",
    answer: "DataX is fully compliant with HIPAA, GDPR, and SOC 2 Type II standards. We undergo regular third-party audits and maintain comprehensive documentation of our security practices. Our platform is designed to meet the stringent requirements of healthcare organizations and life sciences companies."
  },
  {
    question: "How does the data collaboration process work?",
    answer: "Our platform enables secure data collaboration through a three-step process: First, data providers securely upload and anonymize their datasets. Then, our matching engine identifies relevant cohorts for research needs. Finally, insights are delivered to researchers without exposing raw patient data, ensuring privacy-preserving analytics."
  },
  {
    question: "Who can access my organization's data?",
    answer: "Only authorized users within your organization can access your raw data. When participating in collaborations, only aggregated, anonymized insights are shared—never individual patient records. You maintain full control over data permissions and can revoke access at any time through our granular access control system."
  },
  {
    question: "What types of healthcare data can be analyzed?",
    answer: "DataX supports a wide range of healthcare data types including electronic health records (EHR), claims data, lab results, imaging data, genomic information, and real-world evidence. Our platform is designed to harmonize data from multiple sources for comprehensive analysis."
  },
  {
    question: "How quickly can I get started with DataX?",
    answer: "Most organizations are fully onboarded within 2-4 weeks. Our team handles the technical integration, data mapping, and compliance verification. We provide dedicated support throughout the process and offer training to ensure your team can maximize the platform's capabilities from day one."
  },
  {
    question: "Can DataX integrate with our existing systems?",
    answer: "Yes, DataX offers flexible integration options including REST APIs, SFTP, and direct database connections. We support major EHR systems, data warehouses, and cloud platforms. Our integration team works closely with your IT department to ensure seamless connectivity with your existing infrastructure."
  },
  {
    question: "What makes DataX different from other healthcare data platforms?",
    answer: "DataX combines privacy-preserving technology with AI-powered insights, enabling collaboration without compromising data security. Our unique approach allows multiple organizations to derive insights from combined datasets while each party's data never leaves their secure environment. This federated approach, combined with our intuitive AI agent, makes complex analyses accessible to non-technical users."
  }
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-datax-teal/10 text-datax-teal rounded-full">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about DataX, data privacy, and compliance.
              </p>
            </div>
          </ScrollReveal>

          {/* Accordion */}
          <ScrollReveal delay={0.1}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border border-border/50 rounded-xl px-6 data-[state=open]:border-datax-teal/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline hover:text-datax-teal py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={0.2}>
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Still have questions?
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center text-datax-teal hover:text-datax-cyan font-medium transition-colors"
              >
                Contact our team →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
