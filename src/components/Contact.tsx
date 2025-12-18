import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kavyatosh@gmail.com',
      href: 'mailto:kavyatosh@gmail.com',
      description: 'Click to send me an email'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-6377603478',
      href: 'tel:+91-6377603478',
      description: 'Give me a call'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jaipur, Rajasthan',
      href: '#',
      description: 'Based in'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'http://linkedin.com/in/keshav-toshniwal-7b5b44253',
      color: 'hover:text-blue-600'
    },
    {
      icon: FaDiscord,
      label: 'Discord',
      href: 'https://discord.gg/rWNqFafhyH',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient fade-in">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground fade-in">
              Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities. 💡✨
            </p>
          </div>

          <div className="space-y-8">
            {/* Primary Contact - Gmail */}
            <Card className="card-gradient shadow-card border-0 slide-in-left">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Send me an Email</h3>
                      <p className="text-muted-foreground">Click below to compose an email to me</p>
                    </div>
                  </div>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary-dark text-white shadow-primary hover-lift"
                    onClick={() =>
                      window.open(
                        'https://mail.google.com/mail/?view=cm&fs=1&to=kavyatosh@gmail.com',
                        '_blank'
                      )
                    }
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Email Me
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Other Contact Methods */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Phone */}
              <Card className="card-gradient shadow-card border-0 slide-in-left">
                <CardContent className="p-6">
                  <a
                    href="tel:+91-6377603478"
                    className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium text-lg">+91-6377603478</p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="card-gradient shadow-card border-0 slide-in-right">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium text-lg">Jaipur, Rajasthan</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Links */}
            <Card className="card-gradient shadow-card border-0 slide-in-right">
              <CardHeader>
                <CardTitle className="text-2xl">Connect on Social Media</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="lg"
                      className="flex-1 hover-bounce"
                      onClick={() => window.open(social.href, '_blank')}
                    >
                      <social.icon className="h-5 w-5 mr-2" />
                      {social.label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fun Message */}
            <Card className="card-gradient shadow-card border-0">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">☕</div>
                <p className="text-muted-foreground">
                  Always up for a coffee chat about tech, projects, or just to say hi! ☕
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
