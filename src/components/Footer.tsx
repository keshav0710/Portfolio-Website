import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Footer Content */}
          <div className="mb-8">
            <button
              onClick={scrollToTop}
              className="text-3xl font-bold text-gradient hover-bounce mb-4 block mx-auto"
            >
              Keshav
            </button>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate developer crafting digital experiences that make a difference. 
              Always excited to work on innovative projects and collaborate with amazing people!
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {[
              { name: 'Home', href: '#home' },
              { name: 'About', href: '#about' },
              { name: 'Projects', href: '#projects' },
              { name: 'Skills', href: '#skills' },
              { name: 'Contact', href: '#contact' },
            ].map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  const element = document.querySelector(link.href);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Made with Love Section */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center text-muted-foreground text-sm">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" />
                <span>and lots of</span>
                <Coffee className="h-4 w-4 text-amber-600 mx-1" />
                <span>by Keshav</span>
              </div>
              
              <div className="flex items-center text-muted-foreground text-sm">
                <Code className="h-4 w-4 mr-1" />
                <span>© {currentYear} All rights reserved</span>
              </div>
            </div>

            {/* Fun Developer Quote */}
            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-sm text-muted-foreground italic">
                "Any fool can write code that a computer can understand. 
                Good programmers write code that humans can understand." - Martin Fowler
              </p>
            </div>

            {/* Easter Egg */}
            <div className="mt-4 text-xs text-muted-foreground/70">
              <p>🎉 You made it to the bottom! Here's a cookie: 🍪</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;