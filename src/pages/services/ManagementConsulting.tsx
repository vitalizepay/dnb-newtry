import Layout from '@/components/layout/Layout';
import ServicePageBanner from '@/components/services/ServicePageBanner';
import ServiceHero from '@/components/services/ServiceHero';
import ServicesList from '@/components/services/ServicesList';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import CTASection from '@/components/home/CTASection';
import managementHero from '@/assets/management-hero.jpg';
import managementCollage1 from '@/assets/management-collage-1.jpg';
import managementCollage2 from '@/assets/management-collage-2.jpg';
import managementCollage3 from '@/assets/management-collage-3.jpg';
import managementCollage4 from '@/assets/management-collage-4.jpg';

const services = [
  {
    title: 'Comprehensive Growth Strategy Development',
    description: 'We work with you to define clear objectives, identify key growth drivers, and develop actionable strategies.'
  },
  {
    title: 'Organizational Transformation',
    description: 'We guide you through periods of change, ensuring smooth transitions and fostering a culture of adaptability and innovation.'
  },
  {
    title: 'Operational Excellence',
    description: 'We analyze your existing operations, identify areas for improvement, and implement solutions to enhance efficiency and productivity.'
  },
  {
    title: 'Market Entry and Expansion Strategies',
    description: 'We provide insights and guidance for successfully entering new GCC markets.'
  }
];

const ManagementConsulting = () => {
  return (
    <Layout>
      <ServicePageBanner 
        title="Management Consulting"
        subtitle="Unlock smarter strategies and seamless transformations to drive measurable business success."
      />
      
      <ServiceHero
        headline="Strategic Growth Defined."
        accentHeadline="Do More!"
        description="Navigating the complexities of the GCC business landscape requires a clear and adaptable growth strategy. Dillon & Bird provides expert management consulting services designed to equip your organization with the strategic foresight and operational frameworks needed to achieve sustainable success."
        image={managementHero}
        imageAlt="Management consulting and strategic planning"
      />
      
      <ServicesList
        title="Our Tailored Consulting Approach Provides:"
        services={services}
      />
      
      <ServiceBenefits
        title="What It Means For You"
        description="Gain clarity and direction for sustainable growth. Our management consulting services provide you with the strategic roadmap and operational support needed to achieve your business objectives in the GCC."
        images={[managementCollage1, managementCollage2, managementCollage3, managementCollage4]}
        ctaText="Plan Your Growth"
        ctaLink="/contact"
      />
      
      <CTASection />
    </Layout>
  );
};

export default ManagementConsulting;
