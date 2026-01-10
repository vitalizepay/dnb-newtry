import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import aboutHero1 from '@/assets/about-hero-1.jpg';
import aboutHero2 from '@/assets/about-hero-2.jpg';
import aboutVision1 from '@/assets/about-vision-1.jpg';
import aboutVision2 from '@/assets/about-vision-2.jpg';
import aboutMission from '@/assets/about-mission.jpg';
import aboutPhilosophy from '@/assets/about-philosophy.jpg';
import aboutValues1 from '@/assets/about-values-1.jpg';
import aboutValues2 from '@/assets/about-values-2.jpg';
import aboutValues3 from '@/assets/about-values-3.jpg';
import teamPerson1 from '@/assets/team-person-1.jpg';
import teamPerson2 from '@/assets/team-person-2.jpg';
import teamPerson3 from '@/assets/team-person-3.jpg';
import teamPerson4 from '@/assets/team-person-4.jpg';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const teamMembers = [
  { name: 'Praveen', role: 'Co-Founder & Chairman', image: teamPerson1 },
  { name: 'Name', role: 'Position', image: teamPerson2 },
  { name: 'Name', role: 'Position', image: teamPerson3 },
  { name: 'Name', role: 'Position', image: teamPerson4 },
];

const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const maxSlide = Math.max(0, teamMembers.length - 4);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary-dark text-primary-foreground py-16 md:py-24 relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
                About Us
              </h1>
              <p className="text-primary-foreground/80 text-lg">
                Driving the future of business in the GCC with bold strategy, smart tech, and trusted expertise.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={aboutHero1}
                alt="Business collaboration"
                className="rounded-lg object-cover h-48 w-full"
              />
              <img
                src={aboutHero2}
                alt="Team meeting"
                className="rounded-lg object-cover h-48 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our GCC Legacy Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-dark mb-2">
                Our GCC Legacy.
              </h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8">
                Do More!
              </h3>
              <div className="space-y-6 text-body">
                <p>
                  Dillon & Bird was founded on a clear vision: to be the catalyst for unprecedented growth and sustainable 
                  innovation for businesses across the Gulf Cooperation Council. From ambitious startups to established family 
                  enterprises, we understand the unique opportunities and challenges of this dynamic region.
                </p>
                <p>
                  Our journey began with a deep understanding of the interconnectedness of finance, technology, and strategic 
                  marketing. We recognized that true progress requires a holistic approach, one that integrates these critical 
                  pillars to unlock lasting value.
                </p>
                <p>
                  More than just consultants, we are your dedicated strategic partners. We invest time in understanding your 
                  unique aspirations, challenges, and the specific nuances of the GCC market. Our team comprises seasoned 
                  experts with deep regional knowledge and a proven track record of delivering tangible results.
                </p>
                <p>
                  We are driven by a commitment to operational excellence and guided by strategic foresight. We believe in 
                  building long-term relationships based on trust, transparency, and a shared commitment to your success.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={aboutHero2}
                alt="Team collaboration"
                className="rounded-lg object-cover w-full h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Driving GCC Innovation Section */}
      <section className="bg-primary-dark text-primary-foreground py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-primary font-semibold">Our Vision</span>
                <div className="flex-1 h-1 bg-primary"></div>
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Driving GCC Innovation
              </h3>
              <p className="text-primary-foreground/80 mb-8">
                To be the premier catalyst for transformative growth and innovation across the GCC, 
                empowering businesses to achieve their highest aspirations.
              </p>
              <img
                src={aboutVision1}
                alt="Vision"
                className="rounded-lg object-cover h-64 w-full"
              />
            </div>

            {/* Mission */}
            <div className="flex flex-col">
              <img
                src={aboutVision2}
                alt="Mission"
                className="rounded-lg object-cover h-64 w-full mb-8"
              />
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1 h-1 bg-primary"></div>
                <span className="text-primary font-semibold">Our Mission</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Integrated Expertise. Lasting Impact.
              </h3>
              <p className="text-primary-foreground/80">
                To provide strategic, integrated solutions in finance, technology, and marketing, 
                delivering sustainable value and future-forward results through deep regional 
                expertise and collaborative partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Do More Philosophy Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-1 h-20 bg-primary mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-dark mb-6">
                Do More: Our Driving Philosophy
              </h2>
              <p className="text-body leading-relaxed">
                "Do More!" isn't just our tagline; it's the core of our philosophy. It reflects our unwavering commitment 
                to go beyond the expected, to relentlessly pursue better outcomes for our clients, and to continuously 
                innovate in our approach. We believe in pushing boundaries, seeking new possibilities, and empowering 
                businesses across the GCC to achieve more than they ever thought possible. This spirit of "Do More!" 
                permeates every aspect of our work, from the initial consultation to the long-term strategic partnership.
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
              <img
                src={aboutPhilosophy}
                alt="Chess piece representing strategy"
                className="rounded-lg object-cover w-full h-80 ml-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What It Means For You Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Collage */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={aboutValues1}
                  alt="Business handshake"
                  className="rounded-lg object-cover h-64 w-full"
                />
                <img
                  src={aboutValues2}
                  alt="Team meeting"
                  className="rounded-lg object-cover h-48 w-full mt-8"
                />
              </div>
              <img
                src={aboutValues3}
                alt="Success celebration"
                className="rounded-lg object-cover h-48 w-48 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 border-4 border-background"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-dark mb-6">
                What It Means For You
              </h2>
              <p className="text-body leading-relaxed mb-8">
                Gain a partner deeply invested in your growth within the GCC. Benefit from our integrated expertise and our unwavering 
                commitment to delivering sustainable value and future-forward solutions tailored to your specific needs. With Dillon & Bird, you 
                don't just grow; you <strong>Do More!</strong>
              </p>
              <Link to="/who-we-are" className="btn-primary inline-block">
                Learn More About Our Values
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our People Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-dark">
              Our People
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                disabled={currentSlide === 0}
                className="w-10 h-10 border border-border rounded flex items-center justify-center disabled:opacity-50 hover:bg-secondary transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentSlide(Math.min(maxSlide, currentSlide + 1))}
                disabled={currentSlide >= maxSlide}
                className="w-10 h-10 border border-primary rounded flex items-center justify-center disabled:opacity-50 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark/90 to-transparent p-6">
                  <h3 className="text-lg font-semibold text-primary-foreground">{member.name}</h3>
                  <p className="text-sm text-primary-foreground/70">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
