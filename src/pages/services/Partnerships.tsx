import Layout from '@/components/layout/Layout';
import ServicePageBanner from '@/components/services/ServicePageBanner';
import ServiceHero from '@/components/services/ServiceHero';
import ServicesList from '@/components/services/ServicesList';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import CTASection from '@/components/home/CTASection';
import sectionImg4 from '@/assets/section-img-4.jpg';
import sectionImg8 from '@/assets/section-img-8.jpg';
import sectionImg9 from '@/assets/section-img-9.jpg';
import sectionImg2 from '@/assets/section-img-2.jpg';
import sectionImg3 from '@/assets/section-img-3.jpg';

const services = [
  {
    title: 'Strategic Alliance Development',
    description: 'We identify and connect you with partners who align with your vision and can accelerate your market expansion.'
  },
  {
    title: 'Partnership Structuring',
    description: 'Expert guidance on structuring partnerships that protect your interests while maximizing mutual benefit.'
  },
  {
    title: 'Joint Venture Advisory',
    description: 'Comprehensive support for establishing joint ventures, from negotiation to operational setup.'
  },
  {
    title: 'Performance Optimization',
    description: 'Ongoing partnership management and optimization to ensure continued value creation.'
  }
];

const Partnerships = () => {
  return (
    <Layout>
      <ServicePageBanner 
        title="Partnerships"
        subtitle="Build strategic alliances that drive meaningful growth across the GCC."
      />
      
      <ServiceHero
        headline="Collaborate for Growth."
        accentHeadline="Do More!"
        description="In today's rapidly evolving GCC market, sustainable growth often hinges on the right strategic alliances. Dillon & Bird acts as your dedicated strategic partner, working collaboratively to identify and capitalize on opportunities for synergistic growth and enhanced operational efficiency."
        image={sectionImg4}
        imageAlt="Strategic partnerships and collaboration"
      />
      
      <ServicesList
        title="Our Partnership Services Include:"
        services={services}
      />
      
      <ServiceBenefits
        title="What It Means For You"
        description="We go beyond traditional consulting. We embed ourselves within your organization, gaining a deep understanding of your core capabilities and strategic objectives. This allows us to co-create and implement tailored strategies that drive tangible improvements and unlock new avenues for expansion."
        images={[sectionImg8, sectionImg9, sectionImg2, sectionImg3]}
        ctaText="Partner With Us"
        ctaLink="/contact"
      />
      
      <CTASection />
    </Layout>
  );
};

export default Partnerships;
