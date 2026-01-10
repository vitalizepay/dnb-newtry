import Layout from '@/components/layout/Layout';
import ServicePageBanner from '@/components/services/ServicePageBanner';
import ServiceHero from '@/components/services/ServiceHero';
import ServicesList from '@/components/services/ServicesList';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import CTASection from '@/components/home/CTASection';
import sectionImg5 from '@/assets/section-img-5.jpg';
import sectionImg8 from '@/assets/section-img-8.jpg';
import sectionImg9 from '@/assets/section-img-9.jpg';
import sectionImg2 from '@/assets/section-img-2.jpg';
import sectionImg3 from '@/assets/section-img-3.jpg';

const services = [
  {
    title: 'Strategic Planning',
    description: 'Developing comprehensive strategies aligned with your business objectives and market dynamics.'
  },
  {
    title: 'Operational Excellence',
    description: 'Streamlining processes and optimizing operations for maximum efficiency and profitability.'
  },
  {
    title: 'Organizational Transformation',
    description: 'Guiding your organization through change with minimal disruption and maximum impact.'
  },
  {
    title: 'Performance Management',
    description: 'Implementing robust systems to track, measure, and improve business performance.'
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
        image={sectionImg5}
        imageAlt="Management consulting and strategic planning"
      />
      
      <ServicesList
        title="Our Management Consulting Services Include:"
        services={services}
      />
      
      <ServiceBenefits
        title="What It Means For You"
        description="Our consultants bring deep industry expertise to solve your most complex challenges. We work alongside your leadership team to develop and implement strategies that drive real, measurable results."
        images={[sectionImg8, sectionImg9, sectionImg2, sectionImg3]}
        ctaText="Get Started"
        ctaLink="/contact"
      />
      
      <CTASection />
    </Layout>
  );
};

export default ManagementConsulting;
