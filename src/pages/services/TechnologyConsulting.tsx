import Layout from '@/components/layout/Layout';
import ServicePageBanner from '@/components/services/ServicePageBanner';
import ServiceHero from '@/components/services/ServiceHero';
import ServicesList from '@/components/services/ServicesList';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import CTASection from '@/components/home/CTASection';
import technologyHero from '@/assets/technology-hero.jpg';
import technologyCollage1 from '@/assets/technology-collage-1.jpg';
import technologyCollage2 from '@/assets/technology-collage-2.jpg';
import technologyCollage3 from '@/assets/technology-collage-3.jpg';
import technologyCollage4 from '@/assets/technology-collage-4.jpg';

const services = [
  {
    title: 'Digital Transformation',
    description: 'Guiding your organization through digital transformation to modernize operations and enhance customer experiences.'
  },
  {
    title: 'System Integration',
    description: 'Seamlessly integrating new technologies with your existing systems for optimal performance.'
  },
  {
    title: 'Process Automation',
    description: 'Implementing automation solutions to increase efficiency and reduce operational costs.'
  },
  {
    title: 'Technology Strategy',
    description: 'Developing comprehensive technology roadmaps aligned with your business objectives.'
  }
];

const TechnologyConsulting = () => {
  return (
    <Layout>
      <ServicePageBanner 
        title="Technology Consulting"
        subtitle="Empowering your business with smart, scalable tech solutions that drive efficiency and innovation."
      />
      
      <ServiceHero
        headline="Smart Tech Progress."
        accentHeadline="Do More!"
        description="In today's digital age, leveraging the right technology is crucial for achieving operational excellence and driving innovation. Dillon & Bird provides expert technology consulting services to help GCC businesses implement smart systems that enhance workflows and unlock new levels of efficiency."
        image={technologyHero}
        imageAlt="Technology consulting and digital transformation"
      />
      
      <ServicesList
        title="Our Technology Consulting Services Include:"
        services={services}
      />
      
      <ServiceBenefits
        title="What It Means For You"
        description="Digital transformation expertise to modernize your operations, enhance customer experiences, and build competitive advantage. We help you leverage technology to achieve your strategic objectives."
        images={[technologyCollage1, technologyCollage2, technologyCollage3, technologyCollage4]}
        ctaText="Get Started"
        ctaLink="/contact"
      />
      
      <CTASection />
    </Layout>
  );
};

export default TechnologyConsulting;
