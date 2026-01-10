interface ServiceHeroProps {
  headline: string;
  accentHeadline: string;
  description: string;
  image: string;
  imageAlt: string;
  imageOnLeft?: boolean;
}

const ServiceHero = ({ 
  headline, 
  accentHeadline, 
  description, 
  image, 
  imageAlt,
  imageOnLeft = false 
}: ServiceHeroProps) => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <div className={`space-y-6 ${imageOnLeft ? 'lg:order-2' : ''}`}>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-2">
                {headline}
              </h2>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                {accentHeadline}
              </h3>
            </div>
            <p className="text-body max-w-lg">
              {description}
            </p>
          </div>

          {/* Image */}
          <div className={`${imageOnLeft ? 'lg:order-1' : ''}`}>
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-80 lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
