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
    title: 'Investment Strategy Development',
    description: 'Crafting tailored investment strategies aligned with your financial goals and risk tolerance.'
  },
  {
    title: 'Capital Structure Optimization',
    description: 'Optimizing your capital structure to maximize returns and minimize costs.'
  },
  {
    title: 'Investor Relations',
    description: 'Building and maintaining strong relationships with investors through transparent communication.'
  },
  {
    title: 'Financial Modeling & Forecasting',
    description: 'Comprehensive financial models and forecasts to support strategic decision-making.'
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
        image={sectionImg4}
        imageAlt="Financial planning and investor services"
      />
      
      <ServicesList
        title="Our Financial Planning Services Include:"
        services={services}
      />
      
      <ServiceBenefits
        title="What It Means For You"
        description="Strategic financial advisory services to attract investment, optimize capital structure, and plan for sustainable growth. We help you navigate the complexities of the investment landscape with confidence."
        images={[sectionImg8, sectionImg9, sectionImg2, sectionImg3]}
        ctaText="Get Started"
        ctaLink="/contact"
      />
      
      <CTASection />
    </Layout>
  );
};

export default FinancialPlanning;
