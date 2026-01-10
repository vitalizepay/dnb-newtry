import Layout from '@/components/layout/Layout';
import ServicePageBanner from '@/components/services/ServicePageBanner';
import ServiceHero from '@/components/services/ServiceHero';
import ServicesList from '@/components/services/ServicesList';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import CTASection from '@/components/home/CTASection';
import corporateHero from '@/assets/corporate-hero.jpg';
import corporateCollage1 from '@/assets/corporate-collage-1.jpg';
import corporateCollage2 from '@/assets/corporate-collage-2.jpg';
import corporateCollage3 from '@/assets/corporate-collage-3.jpg';
import corporateCollage4 from '@/assets/corporate-collage-4.jpg';

const services = [
  {
    title: 'Administrative Support',
    description: 'We handle essential administrative tasks, ensuring efficiency and compliance.'
  },
  {
    title: 'HR Solutions',
    description: 'We provide support with human resources functions, from talent acquisition to employee management.'
  },
  {
    title: 'Compliance and Regulatory Guidance',
    description: 'We navigate the complexities of GCC regulations, ensuring your business operates smoothly and within legal frameworks.'
  },
  {
    title: 'Vendor Management',
    description: 'We optimize your vendor relationships, ensuring cost-effectiveness and quality service.'
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
        image={corporateHero}
        imageAlt="Corporate services and office operations"
      />
      
      <ServicesList
        title="Our Tailored Corporate Services Encompass:"
        services={services}
      />
      
      <ServiceBenefits
        title="What It Means For You"
        description="Free up valuable time and resources by entrusting your non-core operations to our expert team. Our comprehensive corporate services ensure efficiency, compliance, and allow you to focus on your strategic priorities and core business activities within the GCC."
        images={[corporateCollage1, corporateCollage2, corporateCollage3, corporateCollage4]}
        ctaText="Streamline Now"
        ctaLink="/contact"
      />
      
      <CTASection />
    </Layout>
  );
};

export default CorporateServices;
