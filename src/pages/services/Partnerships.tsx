import Layout from '@/components/layout/Layout';
import ServicePageBanner from '@/components/services/ServicePageBanner';
import ServiceHero from '@/components/services/ServiceHero';
import ServicesList from '@/components/services/ServicesList';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import CTASection from '@/components/home/CTASection';
import partnershipsHero from '@/assets/partnerships-hero.jpg';
import partnershipsCollage1 from '@/assets/partnerships-collage-1.jpg';
import partnershipsCollage2 from '@/assets/partnerships-collage-2.jpg';
import partnershipsCollage3 from '@/assets/partnerships-collage-3.jpg';
import partnershipsCollage4 from '@/assets/partnerships-collage-4.jpg';

const services = [
  {
    title: 'Identifying and leveraging core strengths',
    description: 'We help you focus on what you do best and build upon your existing advantages.'
  },
  {
    title: 'Creating synergistic collaborations',
    description: 'We facilitate connections and partnerships that create mutual value and accelerate growth.'
  },
  {
    title: 'Optimizing operational efficiency',
    description: 'We streamline processes and implement best practices to enhance productivity and reduce costs.'
  },
  {
    title: 'Navigating market complexities',
    description: 'We provide insights and guidance to help you navigate the unique challenges and opportunities of the GCC market.'
  }
];

const Partnerships = () => {
  return (
    <Layout>
      <ServicePageBanner 
        title="Partnerships"
        subtitle="Let's build lasting partnerships that drive meaningful growth across the GCC."
      />
      
      <ServiceHero
        headline="Collaborate for Growth."
        accentHeadline="Do More!"
        description="In today's rapidly evolving GCC market, sustainable growth often hinges on the right strategic alliances. Dillon & Bird acts as your dedicated strategic partner, working collaboratively to identify and capitalize on opportunities for synergistic growth and enhanced operational efficiency.

We go beyond traditional consulting. We embed ourselves within your organization, gaining a deep understanding of your core capabilities and strategic objectives. This allows us to co-create and implement tailored strategies that drive tangible improvements and unlock new avenues for expansion."
        image={partnershipsHero}
        imageAlt="Strategic partnerships and collaboration"
        imageOnLeft={false}
      />
      
      <ServicesList
        title="Our Strategic Partnership Approach Focuses On:"
        services={services}
      />
      
      <ServiceBenefits
        title="What It Means For You"
        description="Achieve accelerated and sustainable growth through a collaborative partnership that leverages our diverse expertise to enhance your efficiency, identify new opportunities, and navigate the complexities of the GCC market."
        images={[partnershipsCollage1, partnershipsCollage2, partnershipsCollage3, partnershipsCollage4]}
        ctaText="Partner With Us"
        ctaLink="/contact"
        imageOnLeft={true}
      />
      
      <CTASection />
    </Layout>
  );
};

export default Partnerships;
