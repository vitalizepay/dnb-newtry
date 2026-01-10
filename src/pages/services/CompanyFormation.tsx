import Layout from '@/components/layout/Layout';
import ServicePageBanner from '@/components/services/ServicePageBanner';
import ServiceHero from '@/components/services/ServiceHero';
import ServicesList from '@/components/services/ServicesList';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import CTASection from '@/components/home/CTASection';
import companyFormationImg from '@/assets/company-formation-img-1.jpg';
import sectionImg8 from '@/assets/section-img-8.jpg';
import sectionImg9 from '@/assets/section-img-9.jpg';
import sectionImg2 from '@/assets/section-img-2.jpg';
import sectionImg3 from '@/assets/section-img-3.jpg';

const services = [
  {
    title: 'Jurisdictional Advisory',
    description: 'We help you identify the optimal jurisdiction for your business based on regulatory, tax, and operational considerations.'
  },
  {
    title: 'Documentation and Application Processing',
    description: 'We manage all necessary paperwork and regulatory applications to ensure a smooth and compliant setup process.'
  },
  {
    title: 'Liaison with Government Authorities',
    description: 'We act as your point of contact with relevant government agencies, ensuring efficient communication and approvals.'
  },
  {
    title: 'Post-Formation Support',
    description: 'Ongoing advisory support to help you establish your operations smoothly and remain compliant.'
  }
];

const CompanyFormation = () => {
  return (
    <Layout>
      <ServicePageBanner 
        title="Company Formation"
        subtitle="Fast, compliant company formation to launch your business seamlessly in the GCC."
      />
      
      <ServiceHero
        headline="Launch in GCC."
        accentHeadline="Do More!"
        description="Ready to establish your presence in the dynamic GCC market? Dillon & Bird provides a seamless and efficient company formation service. We understand the intricacies of company registration across the various jurisdictions within the GCC. Our expert team handles the complexities, allowing you to focus on building your business."
        image={companyFormationImg}
        imageAlt="Company formation and business setup"
        imageOnLeft={true}
      />
      
      <ServicesList
        title="Our Services Include:"
        services={services}
      />
      
      <ServiceBenefits
        title="What It Means For You"
        description="Understanding the GCC market and navigating its regulatory landscape can be complex. Our expertise allows you to focus on growth while we manage the intricacies of your expansion journey, ensuring compliance, efficiency, and long-term success."
        images={[sectionImg8, sectionImg9, sectionImg2, sectionImg3]}
        ctaText="Get Started"
        ctaLink="/contact"
      />
      
      <CTASection />
    </Layout>
  );
};

export default CompanyFormation;
