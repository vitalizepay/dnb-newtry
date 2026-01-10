import Layout from '@/components/layout/Layout';
import ServicePageBanner from '@/components/services/ServicePageBanner';
import ServiceHero from '@/components/services/ServiceHero';
import ServicesList from '@/components/services/ServicesList';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import CTASection from '@/components/home/CTASection';
import financialHero from '@/assets/financial-hero.jpg';
import corporateCollage1 from '@/assets/corporate-collage-1.jpg';
import corporateCollage2 from '@/assets/corporate-collage-2.jpg';
import corporateCollage3 from '@/assets/corporate-collage-3.jpg';
import corporateCollage4 from '@/assets/corporate-collage-4.jpg';

const services = [
  {
    title: 'Financial Planning',
    description: 'Developing comprehensive financial plans aligned with your objectives, whether for business expansion or personal wealth management.'
  },
  {
    title: 'Investment Strategy Development',
    description: 'Creating tailored investment strategies to maximize returns and mitigate risks within the GCC market.'
  },
  {
    title: 'Investor Relations',
    description: 'Preparing investor-ready materials and strategies to effectively attract and engage potential investors.'
  },
  {
    title: 'Due Diligence Support',
    description: 'Assisting investors in evaluating opportunities and providing comprehensive due diligence services.'
  }
];

const FinancialPlanning = () => {
  return (
    <Layout>
      <ServicePageBanner 
        title="Financial Planning & Investor Services"
        subtitle="Secure your future and attract investors with smart, strategic financial planning and advisory."
      />
      
      <ServiceHero
        headline="Secure and Grow."
        accentHeadline="Do More!"
        description="Achieving your long-term financial goals and attracting the right investors requires strategic planning and a deep understanding of the GCC investment landscape. Dillon & Bird offers tailored financial planning and investor services to help you secure your future and fuel your growth."
        image={financialHero}
        imageAlt="Financial planning and investor services"
      />
      
      <ServicesList
        title="Our Services Include:"
        services={services}
      />
      
      <ServiceBenefits
        title="What It Means For You"
        description="Secure your financial future and attract the capital you need to grow. Our expert financial planning and investor services provide you with the strategic guidance and support necessary to achieve your long-term financial aspirations in the GCC."
        images={[corporateCollage1, corporateCollage2, corporateCollage3, corporateCollage4]}
        ctaText="Invest Smarter"
        ctaLink="/contact"
      />
      
      <CTASection />
    </Layout>
  );
};

export default FinancialPlanning;
