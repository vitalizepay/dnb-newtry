import Layout from '@/components/layout/Layout';
import ServicePageBanner from '@/components/services/ServicePageBanner';
import ServiceHero from '@/components/services/ServiceHero';
import ServicesList from '@/components/services/ServicesList';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import CTASection from '@/components/home/CTASection';
import sectionImg6 from '@/assets/section-img-6.jpg';
import sectionImg8 from '@/assets/section-img-8.jpg';
import sectionImg9 from '@/assets/section-img-9.jpg';
import sectionImg2 from '@/assets/section-img-2.jpg';
import sectionImg3 from '@/assets/section-img-3.jpg';

const services = [
  {
    title: 'HR & Administration',
    description: 'Comprehensive human resources management and administrative support services.'
  },
  {
    title: 'Legal Compliance',
    description: 'Ensuring your business remains compliant with local laws and regulations across the GCC.'
  },
  {
    title: 'Visa & Immigration',
    description: 'Streamlined visa processing and immigration support for your workforce.'
  },
  {
    title: 'Office Setup & Management',
    description: 'Complete office setup solutions from finding space to managing day-to-day operations.'
  }
];

const CorporateServices = () => {
  return (
    <Layout>
      <ServicePageBanner 
        title="Corporate Services"
        subtitle="Streamline your operations with our end-to-end corporate services tailored for growth in the GCC."
      />
      
      <ServiceHero
        headline="Focus on Core."
        accentHeadline="Do More!"
        description="Focus on your core business. Dillon & Bird's comprehensive suite of corporate services is designed to streamline your non-core operations, allowing you to dedicate your resources and energy to driving growth and innovation within the GCC."
        image={sectionImg6}
        imageAlt="Corporate services and office operations"
      />
      
      <ServicesList
        title="Our Corporate Services Include:"
        services={services}
      />
      
      <ServiceBenefits
        title="What It Means For You"
        description="From HR to legal compliance, we handle the essentials while you build your business. Our end-to-end operational support ensures seamless operations so you can focus on what matters most—growth."
        images={[sectionImg8, sectionImg9, sectionImg2, sectionImg3]}
        ctaText="Get Started"
        ctaLink="/contact"
      />
      
      <CTASection />
    </Layout>
  );
};

export default CorporateServices;
