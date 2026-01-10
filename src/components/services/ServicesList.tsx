interface Service {
  title: string;
  description: string;
}

interface ServicesListProps {
  title: string;
  services: Service[];
}

const ServicesList = ({ title, services }: ServicesListProps) => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-12">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {services.map((service, index) => (
            <div key={index} className="flex gap-6">
              <span className="text-5xl md:text-6xl font-bold text-primary/20 leading-none">
                {index + 1}
              </span>
              <div className="pt-2">
                <h3 className="font-semibold text-lg text-primary-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
