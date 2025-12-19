import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import VariableProximity from '@/components/ui/VariableProximity';
import Shuffle from '@/components/ui/Shuffle';

const Hero = () => {
  const navigate = useNavigate();

  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="mb-8 fade-in">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary via-secondary to-accent shadow-primary mb-6 flex items-center justify-center text-5xl font-bold text-white">
              K
            </div>
          </div>

          {/* Main Heading */}
          <Shuffle
            text="Hello I'm Keshav"
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={2}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
            className="text-5xl md:text-7xl font-bold mb-6 slide-in-left text-gradient"

          />

          {/* Tagline with VariableProximity Effect */}
          <div
            ref={containerRef}
            style={{ position: 'relative' }}
            className="mb-8 slide-in-right"
          >
            <VariableProximity
              label="I build real-time web apps and IoT dashboards that people actually use"
              className="variable-proximity-demo text-xl md:text-2xl text-muted-foreground"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 900, 'opsz' 40"
              containerRef={containerRef}
              radius={150}
              falloff="linear"
            />
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 bounce-in">
            Full-stack developer specializing in React, TypeScript, and Firebase. I turn complex requirements into clean interfaces and scalable systems—from smart home automation to productivity tools.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 bounce-in">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 text-lg shadow-primary hover-lift"
            >
              Open to SDE and Frontend roles—let's talk
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/gallery')}
              className="px-8 py-3 text-lg hover-bounce border-primary text-primary hover:bg-primary hover:text-white"
            >
              View My Work
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 bounce-in">
            <Button
              variant="outline"
              size="sm"
              className="hover-bounce shadow-card"
              onClick={() => window.open('https://github.com/keshav0710/', '_blank')}
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="hover-bounce shadow-card"
              onClick={() => window.open('https://linkedin.com/in/keshav-toshniwal-7b5b44253', '_blank')}
            >
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="hover-bounce shadow-card"
              onClick={scrollToContact}
            >
              <Mail className="h-4 w-4 mr-2" />
              Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;