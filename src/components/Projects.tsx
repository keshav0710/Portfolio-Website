import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, ExternalLink, Star } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
  featured: boolean;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "IOT APP",
      description: "A beautiful IOT application with real-time data monitoring, device control, and user management. Built with React and Firebase.",
      image: "",
      tech: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/keshav0710/REACT-IOT",
      demo: "https://react-iott.vercel.app/",
      featured: true
    },
    {
      id: 2,
      title: "🛒 E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "🛒",
      tech: ["Next.js", "Stripe", "MongoDB", "TypeScript"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      id: 3,
      title: "PORTFOLIO",
      description: "My personal portfolio showcasing my projects, skills, and experience.",
      image: "📱",
      tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient fade-in">
              My Projects
            </h2>
            <p className="text-xl text-muted-foreground fade-in">
              Things I've built with love and lots of coffee ☕
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Star className="h-6 w-6 text-primary mr-2" />
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.filter(p => p.featured).map((project, index) => (
                <Card 
                  key={project.id} 
                  className={`card-gradient shadow-card hover-lift border-0 ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-6xl">{project.image}</div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover-bounce"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover-bounce"
                          onClick={() => window.open(project.demo, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-8">More Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => !p.featured).map((project, index) => (
                <Card 
                  key={project.id} 
                  className={`card-gradient shadow-card hover-lift border-0 bounce-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-4xl">{project.image}</div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover-bounce"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover-bounce"
                          onClick={() => window.open(project.demo, '_blank')}
                        >
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 text-xs text-muted-foreground">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="hover-bounce border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              View All Projects on GitHub →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
