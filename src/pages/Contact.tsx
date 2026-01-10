import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { MapPin, Phone, Mail, Clock, Plus, Minus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a comprehensive range of services including Strategic Partnerships, Management Consulting, Corporate Services, Company Formation, Accounting & Financial Services, Financial Planning & Investor Services, and Technology Consulting.'
  },
  {
    question: 'Can you assist with company formation in the UAE or other GCC countries?',
    answer: 'Yes, we specialize in company formation across all GCC countries. Our team handles everything from jurisdiction advisory to documentation, government liaison, and post-formation support.'
  },
  {
    question: 'Do you help startups as well as large enterprises?',
    answer: 'Absolutely! We work with businesses of all sizes, from ambitious startups to established family enterprises. Our services are tailored to meet the unique needs of each client.'
  },
  {
    question: 'How do I get started with your team?',
    answer: 'Simply fill out our contact form or give us a call. Our team will schedule an initial consultation to understand your needs and recommend the best approach for your business.'
  },
  {
    question: 'Are your accounting services compliant with local audit standards?',
    answer: 'Yes, our accounting and financial services are fully compliant with local GCC audit standards and international accounting principles. We ensure your financials are investor-ready and audit-proof.'
  },
  {
    question: 'Do you offer tailored technology solutions for businesses?',
    answer: 'Yes, our technology consulting services include digital transformation, system integration, process automation, and strategic technology planning tailored to your specific business requirements.'
  }
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    enquiryType: '',
    heardAboutUs: '',
    message: '',
    privacyAgreed: false
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAgreed) {
      toast({
        title: "Privacy Policy Required",
        description: "Please agree to the Privacy Policy to continue.",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll be in touch shortly.",
    });
    setFormData({ 
      name: '', 
      email: '', 
      company: '', 
      phone: '', 
      enquiryType: '',
      heardAboutUs: '',
      message: '',
      privacyAgreed: false
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-display text-primary-dark mb-6">
              Contact Us
            </h1>
            <p className="text-body text-lg">
              Let's build something great together. Reach out today — your next big move starts here.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Wave Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 400C200 300 400 500 600 400C800 300 1000 500 1200 400C1400 300 1440 400 1440 400V800H0V400Z" fill="currentColor" className="text-primary"/>
            <path d="M0 500C200 400 400 600 600 500C800 400 1000 600 1200 500C1400 400 1440 500 1440 500V800H0V500Z" fill="currentColor" className="text-primary" opacity="0.5"/>
          </svg>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto bg-card p-8 md:p-10 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+971 50 123 4567"
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="enquiryType" className="block text-sm font-medium text-foreground mb-2">
                    Enquiry Type *
                  </label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  >
                    <option value="">-Select-</option>
                    <option value="partnerships">Partnerships</option>
                    <option value="consulting">Management Consulting</option>
                    <option value="corporate">Corporate Services</option>
                    <option value="formation">Company Formation</option>
                    <option value="accounting">Accounting & Financial Services</option>
                    <option value="financial">Financial Planning</option>
                    <option value="technology">Technology Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="heardAboutUs" className="block text-sm font-medium text-foreground mb-2">
                    How Did You Hear About Us *
                  </label>
                  <select
                    id="heardAboutUs"
                    name="heardAboutUs"
                    value={formData.heardAboutUs}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  >
                    <option value="">-Select-</option>
                    <option value="google">Google Search</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="referral">Referral</option>
                    <option value="social">Social Media</option>
                    <option value="event">Event/Conference</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none bg-background"
                />
              </div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacyAgreed"
                  name="privacyAgreed"
                  checked={formData.privacyAgreed}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-primary border-border rounded focus:ring-primary"
                />
                <label htmlFor="privacyAgreed" className="text-sm text-muted-foreground">
                  I agree to the terms of the Privacy Policy
                </label>
              </div>
              <button type="submit" className="btn-primary w-full">
                Connect Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-section text-primary-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Answer to Common Enquiries About Our Service</p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-background rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="font-medium text-foreground pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
