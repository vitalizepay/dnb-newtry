import { Link } from 'react-router-dom';

interface ServiceBenefitsProps {
  title: string;
  description: string;
  images: string[];
  ctaText?: string;
  ctaLink?: string;
  imageOnLeft?: boolean;
}

const ServiceBenefits = ({ 
  title, 
  description, 
  images,
  ctaText = "Get Started",
  ctaLink = "/contact",
  imageOnLeft = false
}: ServiceBenefitsProps) => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Collage */}
          <div className={`relative ${imageOnLeft ? 'lg:order-2' : 'lg:order-1'}`}>
            {images.length >= 4 ? (
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <img
                    src={images[0]}
                    alt="Business professionals"
                    className="w-full h-36 object-cover rounded-lg"
                  />
                  <img
                    src={images[1]}
                    alt="Office environment"
                    className="w-full h-36 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-3 pt-6">
                  <img
                    src={images[2]}
                    alt="Team collaboration"
                    className="w-full h-36 object-cover rounded-lg"
                  />
                  <img
                    src={images[3]}
                    alt="Professional workspace"
                    className="w-full h-36 object-cover rounded-lg"
                  />
                </div>
              </div>
            ) : images.length >= 1 ? (
              <img
                src={images[0]}
                alt="Service benefits"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            ) : null}
          </div>

          {/* Text Content */}
          <div className={`space-y-6 ${imageOnLeft ? 'lg:order-1' : 'lg:order-2'}`}>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark">
              {title}
            </h2>
            <p className="text-body">
              {description}
            </p>
            <Link to={ctaLink} className="btn-primary inline-block">
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;
