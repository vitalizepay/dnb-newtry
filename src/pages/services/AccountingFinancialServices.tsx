import Layout from '@/components/layout/Layout';
import ServicePageBanner from '@/components/services/ServicePageBanner';
import ServiceHero from '@/components/services/ServiceHero';
import ServicesList from '@/components/services/ServicesList';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import CTASection from '@/components/home/CTASection';
import accountingHero from '@/assets/accounting-hero.jpg';
import accountingCollage1 from '@/assets/accounting-collage-1.jpg';
import accountingCollage2 from '@/assets/accounting-collage-2.jpg';
import accountingCollage3 from '@/assets/accounting-collage-3.jpg';
import accountingCollage4 from '@/assets/accounting-collage-4.jpg';

const services = [
  {
    title: 'Bookkeeping and Accounting',
    description: 'Accurate and timely record-keeping to provide a clear picture of your financial health.'
  },
  {
    title: 'Financial Reporting',
    description: 'Preparation of comprehensive financial statements that meet regulatory requirements and provide valuable insights.'
  },
  {
    title: 'Audit Preparation',
    description: 'Ensuring your financial records are meticulously prepared for audits, minimizing risk and maximizing credibility.'
  },
  {
    title: 'Tax Compliance',
    description: 'Navigating the complexities of GCC tax regulations to ensure full compliance.'
  }
];

const AccountingFinancialServices = () => {
  return (
    <Layout>
      <ServicePageBanner 
        title="Accounting & Financial Services"
        subtitle="Audit-ready, reliable financials that build trust and drive growth."
      />
      
      <ServiceHero
        headline="Financials with Confidence."
        accentHeadline="Do More!"
        description="Sound financial management is the bedrock of sustainable growth. Dillon & Bird provides comprehensive accounting and financial services designed to ensure your business is investor-ready, audit-proof, and positioned for long-term financial success in the GCC."
        image={accountingHero}
        imageAlt="Financial services and city skyline"
      />
      
      <ServicesList
        title="Our Expert Team Offers A Range Of Services, Including:"
        services={services}
      />
      
      <ServiceBenefits
        title="What It Means For You"
        description="Gain financial clarity and build trust with investors. Our accounting and financial services provide you with accurate, reliable, and audit-proof financials, empowering you to make informed decisions and secure your financial future in the GCC."
        images={[accountingCollage1, accountingCollage2, accountingCollage3, accountingCollage4]}
        ctaText="Get Started"
        ctaLink="/contact"
      />
      
      <CTASection />
    </Layout>
  );
};

export default AccountingFinancialServices;
