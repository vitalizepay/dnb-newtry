import sectionImg11 from '@/assets/section-img-11.jpg';

interface ServicePageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const ServicePageBanner = ({ title, subtitle, backgroundImage }: ServicePageBannerProps) => {
  return (
    <section className="relative py-12 md:py-16">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={backgroundImage || sectionImg11}
          alt=""
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-primary-dark/80"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-2">
          {title}
        </h1>
        {subtitle && (
          <p className="text-primary-foreground/80 text-sm md:text-base max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default ServicePageBanner;
