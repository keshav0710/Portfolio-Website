import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Stack from '@/components/ui/Stack';

const Gallery = () => {
    const navigate = useNavigate();

    const projects = [
        {
            title: "HOMEX",
            description: "Real-time IoT smart home platform with live device control and sensor monitoring. Built end-to-end with React, Node.js, and Firebase to deliver sub-100ms latency for device state updates. Features AI chatbot integration, automated routines, and multi-user support. Deployed and actively used for home automation.",
            screenshots: [
                "/projects/login.png",
                "/projects/chatbot and home security.png",
                "/projects/iot main dashboard.png",
                "/projects/sensors.png",
                "/projects/sign out.png"
            ],
            tech: ["React", "Node.js", "MongoDB", "Express"],
            github: "https://github.com/keshav0710",
            demo: "https://homex-ai.vercel.app/",
            category: "Full Stack"
        },
        {
            title: "Portfolio Website",
            description: "Custom-built portfolio showcasing interactive UI components and modern web development practices. Features variable proximity effects, electric borders, smooth animations, and dark mode. Optimized for performance with Lighthouse scores 95+ across all metrics. Demonstrates frontend skills through custom component development.",
            screenshots: [
                "/projects/1.png",
                "/projects/2.png",
                "/projects/3.png",
                "/projects/4.png",
                "/projects/5.png",
                "/projects/6.png"
            ],
            tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
            github: "https://github.com/keshav0710/Portfolio-Website",
            demo: "https://portfolio-delta-rosy-trvjtepvmg.vercel.app/",
            category: "Web Development"
        },
        {
            title: "HabitOS",
            description: "Cross-platform habit tracker with integrated focus timer and real-time sync. Built custom Firebase authentication and offline-first architecture. Focus timer persists in background, ensuring uninterrupted productivity sessions across devices.",
            screenshots: [
                "/projects/12.jpeg",
                "/projects/13.jpeg",
                "/projects/14.jpeg",
                "/projects/15.jpeg",
                "/projects/16.jpeg",
                "/projects/17.jpeg",
                "/projects/18.jpeg",
                "/projects/19.jpeg",
                "/projects/20.jpeg",
                "/projects/21.jpeg",
                "/projects/22.jpeg",
                "/projects/23.jpeg"
            ],
            tech: ["ReactNative", "TypeScript", "Tailwind CSS", "Vite"],
            github: "https://github.com/keshav0710/HabitOS",
            demo: "https://habitos.vercel.app/",
            category: "Mobile Development"
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
                                {/* Project Screenshots Stack */}
                                <div className="relative h-64 bg-transparent overflow-visible flex items-center justify-center">
                                    <div style={{ width: '100%', height: '100%', padding: '1rem' }}>
                                        <Stack
                                            randomRotation={true}
                                            sensitivity={180}
                                            sendToBackOnClick={true}
                                            cards={project.screenshots.map((src, i) => (
                                                <img
                                                    key={i}
                                                    src={src}
                                                    alt={`${project.title} screenshot ${i + 1}`}
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'contain',
                                                        borderRadius: '0.5rem'
                                                    }}
                                                />
                                            ))}
                                        />
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                                        Click or drag to view more
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
                        Looking for a developer who ships? Let's connect.
                    </p>
                    <Button
                        size="lg"
                        onClick={() => navigate('/#contact')}
                        className="bg-primary hover:bg-primary-dark text-white shadow-primary hover-lift"
                    >
                        Get In Touch
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
