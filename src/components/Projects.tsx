import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Github, ExternalLink, Star } from 'lucide-react';
import ElectricBorder from '@/components/ui/ElectricBorder';

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
      title: 'IOT Dashboard',
      description:
        'Real-time IoT platform with live device control and sensor monitoring. Built end-to-end with React and Firebase to deliver <100ms latency for device state updates. Supports multiple concurrent users with automated routines that reduce manual interactions by 70%.',
      image: '🏠',
      tech: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
      github: 'https://github.com/keshav0710/AI-IOT-SMART-HOME',
      demo: 'https://homex-ai.vercel.app/',
      featured: true
    },
    {
      id: 2,
      title: 'Habitos',
      description:
        'Cross-platform habit tracker with integrated focus timer and real-time sync. Built custom Firebase authentication and offline-first architecture. Focus timer persists in background, ensuring uninterrupted productivity sessions across devices.',
      image: '⏱️',
      tech: ['React-Native', 'Firebase', 'TypeScript'],
      github: 'https://github.com/keshav0710',
      demo: 'https://github.com/keshav0710',
      featured: true
    },
    {
      id: 3,
      title: 'Developer Portfolio',
      description:
        'Custom-built portfolio with interactive UI components (variable proximity effects, electric borders) and optimized performance. Lighthouse score 95+ across all metrics with fast load times and full responsiveness.',
      image: '💼',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/keshav0710/Portfolio-Website',
      demo: 'https://portfolio-delta-rosy-trvjtepvmg.vercel.app/',
      featured: false
    },
    {
      id: 4,
      title: 'PDF Reader',
      description:
        'AI-powered PDF reader using RAG with local LLM inference via Ollama. Implements document chunking, vector embeddings, and semantic search for conversational queries. Runs entirely locally—no API costs or privacy concerns.',
      image: '🤖',
      tech: ['RAG', 'Python', 'Ollama', 'Streamlit'],
      github: 'https://github.com/keshav0710',
      demo: 'https://github.com/keshav0710',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              My Projects
            </h2>
            <p className="text-xl text-muted-foreground">
              Things I’ve built with love and lots of coffee ☕
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Star className="h-6 w-6 text-primary mr-2" />
              Featured Projects
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {projects
                .filter(p => p.featured)
                .map((project, index) => (
                  <ElectricBorder
                    key={project.id}
                    color="#7df9ff"
                    speed={1}
                    chaos={0.5}
                    thickness={2}
                    style={{ borderRadius: 16 }}
                    className={index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
                  >
                    <Card className="card-gradient shadow-card hover-lift border-0">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-6xl">{project.image}</div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                window.open(project.github, '_blank')
                              }
                            >
                              <Github className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                window.open(project.demo, '_blank')
                              }
                            >
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <CardTitle className="text-xl">
                          {project.title}
                        </CardTitle>
                        <CardDescription>
                          {project.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map(tech => (
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
                  </ElectricBorder>
                ))}
            </div>
          </div>

          {/* View All */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                window.open('https://github.com/keshav0710', '_blank')
              }
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
