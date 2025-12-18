import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
    const navigate = useNavigate();

    const projects = [
        {
            title: "Portfolio Website",
            description: "Modern, responsive portfolio website showcasing projects, skills, and achievements. Features smooth animations, dark mode toggle, scroll progress indicator, and downloadable resume.",
            image: "/projects/portfolio.png",
            tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
            github: "https://github.com/keshav0710/Portfolio-Website",
            demo: "https://portfolio-delta-rosy-trvjtepvmg.vercel.app/",
            category: "Web Development"
        },
        {
            title: "HOMEX",
            description: "An innovative IoT smart home automation platform featuring real-time device control, sensor data visualization, and automated routine management for a connected living experience.",
            image: "/projects/task-manager.png",
            tech: ["React", "Node.js", "MongoDB", "Express"],
            github: "https://github.com/keshav0710",
            demo: "#",
            category: "Full Stack"
        },
        {
            title: "E-Commerce Platform",
            description: "Modern e-commerce platform with shopping cart, payment integration, and admin dashboard.",
            image: "/projects/ecommerce.png",
            tech: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
            github: "https://github.com/keshav0710",
            demo: "#",
            category: "Full Stack"
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Button
                            variant="ghost"
                            onClick={() => navigate('/')}
                            className="hover-lift"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Portfolio
                        </Button>
                        <h1 className="text-2xl font-bold text-gradient">Project Gallery</h1>
                        <div className="w-32"></div> {/* Spacer for centering */}
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-16 hero-gradient">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 fade-in">
                        My <span className="text-gradient">Work</span> Showcase
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in">
                        Explore detailed screenshots and demos of my projects. Each one represents hours of dedication,
                        problem-solving, and passion for creating amazing digital experiences. 🚀
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {projects.map((project, index) => (
                            <Card
                                key={index}
                                className="card-gradient shadow-card border-0 overflow-hidden hover-lift slide-in-left"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Project Screenshot */}
                                <div className="relative h-64 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden group">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <Button
                                            size="sm"
                                            variant="secondary"
                                            onClick={() => window.open(project.github, '_blank')}
                                            className="hover-bounce"
                                        >
                                            <Github className="h-4 w-4 mr-2" />
                                            Code
                                        </Button>
                                        {project.demo !== '#' && (
                                            <Button
                                                size="sm"
                                                onClick={() => window.open(project.demo, '_blank')}
                                                className="hover-bounce"
                                            >
                                                <ExternalLink className="h-4 w-4 mr-2" />
                                                Live Demo
                                            </Button>
                                        )}
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    {/* Category Badge */}
                                    <div className="mb-3">
                                        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

                                    {/* Description */}
                                    <p className="text-muted-foreground mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 text-sm rounded-full bg-secondary/20 text-secondary-foreground"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-3">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => window.open(project.github, '_blank')}
                                            className="flex-1 hover-bounce"
                                        >
                                            <Github className="h-4 w-4 mr-2" />
                                            GitHub
                                        </Button>
                                        {project.demo !== '#' && (
                                            <Button
                                                size="sm"
                                                onClick={() => window.open(project.demo, '_blank')}
                                                className="flex-1 hover-bounce bg-primary"
                                            >
                                                <ExternalLink className="h-4 w-4 mr-2" />
                                                Live Demo
                                            </Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-3xl font-bold mb-4">Interested in Working Together?</h3>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                    <Button
                        size="lg"
                        onClick={() => navigate('/#contact')}
                        className="bg-primary hover:bg-primary-dark text-white shadow-primary hover-lift"
                    >
                        Get In Touch ✨
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
