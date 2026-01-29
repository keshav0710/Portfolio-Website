import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, Github, Rocket, Code2, Gauge, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Stack from '@/components/ui/Stack';
import ImageLightbox from '@/components/ui/ImageLightbox';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { useInView } from '@/hooks/useInView';
import {
    FaReact,
    FaNodeJs,
    FaDatabase
} from 'react-icons/fa';
import {
    SiTypescript,
    SiTailwindcss,
    SiMongodb,
    SiExpress,
    SiVite
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

const Gallery = () => {
    const navigate = useNavigate();

    // Lightbox state
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImages, setLightboxImages] = useState<string[]>([]);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [lightboxTitle, setLightboxTitle] = useState('');

    // Category filter state
    const [activeCategory, setActiveCategory] = useState('All');
    const categories = ['All', 'Full Stack', 'Web Development', 'Mobile Development'];

    const openLightbox = (images: string[], index: number, title: string) => {
        setLightboxImages(images);
        setLightboxIndex(index);
        setLightboxTitle(title);
        setLightboxOpen(true);
    };

    // Scroll animation refs
    const [statsRef, statsInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
    const [gridRef, gridInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

    // Tech icons mapping
    const techIcons: Record<string, { icon: React.ReactNode; color: string }> = {
        'React': { icon: <FaReact />, color: '#61DAFB' },
        'Node.js': { icon: <FaNodeJs />, color: '#339933' },
        'MongoDB': { icon: <SiMongodb />, color: '#47A248' },
        'Express': { icon: <SiExpress />, color: '#000000' },
        'TypeScript': { icon: <SiTypescript />, color: '#3178C6' },
        'Tailwind CSS': { icon: <SiTailwindcss />, color: '#06B6D4' },
        'Vite': { icon: <SiVite />, color: '#646CFF' },
        'ReactNative': { icon: <TbBrandReactNative />, color: '#61DAFB' },
        'Firebase': { icon: <FaDatabase />, color: '#FFCA28' },
    };

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

            {/* Hero Section with Floating Shapes */}
            <section className="py-16 hero-gradient relative overflow-hidden">
                {/* Floating Background Shapes */}
                <div className="floating-shapes">
                    <div className="floating-shape"></div>
                    <div className="floating-shape"></div>
                    <div className="floating-shape"></div>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 fade-in">
                        My <span className="text-gradient">Work</span> Showcase
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto fade-in mb-12">
                        Explore detailed screenshots and demos of my projects. Each one represents hours of dedication,
                        problem-solving, and passion for creating amazing digital experiences. 🚀
                    </p>

                    {/* Animated Stats */}
                    <div
                        ref={statsRef}
                        className={`stats-grid max-w-4xl mx-auto ${statsInView ? 'in-view' : ''}`}
                    >
                        <AnimatedCounter
                            end={3}
                            suffix="+"
                            title="Projects Completed"
                            icon={<Rocket />}
                        />
                        <AnimatedCounter
                            end={8}
                            suffix="+"
                            title="Technologies Used"
                            icon={<Code2 />}
                        />
                        <AnimatedCounter
                            end={95}
                            suffix="+"
                            title="Lighthouse Score"
                            icon={<Gauge />}
                        />
                        <AnimatedCounter
                            end={2}
                            suffix="+"
                            title="Years Experience"
                            icon={<Calendar />}
                        />
                    </div>
                </div>
            </section>

            {/* Category Filter Tabs */}
            <section className="py-8 bg-background border-b">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`relative px-4 py-2 text-sm md:text-base font-medium rounded-full transition-all duration-300 ${activeCategory === category
                                    ? 'text-primary bg-primary/10'
                                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/10'
                                    }`}
                            >
                                {category}
                                {activeCategory === category && (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full animate-scale-in" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-20 bg-background relative">
                <div className="container mx-auto px-4">
                    <div
                        ref={gridRef}
                        className={`grid md:grid-cols-2 gap-8 max-w-6xl mx-auto stagger-reveal ${gridInView ? 'in-view' : ''}`}
                    >
                        {projects
                            .filter(p => activeCategory === 'All' || p.category === activeCategory)
                            .map((project, index) => (
                                <Card
                                    key={project.title}
                                    className="card-gradient shadow-card border-0 overflow-hidden card-3d glow-effect gradient-border"
                                    style={{ animationDelay: `${index * 0.15}s` }}
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
                                        <button
                                            onClick={() => openLightbox(project.screenshots, 0, project.title)}
                                            className="absolute bottom-4 right-4 bg-black/70 hover:bg-black/90 text-white text-xs px-3 py-1 rounded-full transition-all duration-200 hover:scale-105 flex items-center gap-1 cursor-pointer"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" /><path d="M3 16.2V21m0 0h4.8M3 21l6-6" /><path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" /><path d="M3 7.8V3m0 0h4.8M3 3l6 6" /></svg>
                                            Expand Gallery
                                        </button>
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

                                        {/* Tech Stack with Icons */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((tech, techIndex) => {
                                                const techInfo = techIcons[tech];
                                                return (
                                                    <span
                                                        key={techIndex}
                                                        className="tech-badge"
                                                        style={techInfo ? { borderColor: `${techInfo.color}30` } : {}}
                                                        title={tech}
                                                    >
                                                        {techInfo && (
                                                            <span style={{ color: techInfo.color }}>
                                                                {techInfo.icon}
                                                            </span>
                                                        )}
                                                        {tech}
                                                    </span>
                                                );
                                            })}
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
            <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                {/* Floating Background Shapes */}
                <div className="floating-shapes">
                    <div className="floating-shape"></div>
                    <div className="floating-shape"></div>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        Interested in <span className="text-gradient">Working Together</span>?
                    </h3>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                        Looking for a developer who ships? Let's connect and build something amazing.
                    </p>
                    <Button
                        size="lg"
                        onClick={() => navigate('/#contact')}
                        className="bg-primary hover:bg-primary-dark text-white shadow-primary hover-lift pulse-glow"
                    >
                        Get In Touch
                    </Button>
                </div>
            </section>

            {/* Lightbox Modal */}
            <ImageLightbox
                images={lightboxImages}
                initialIndex={lightboxIndex}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                projectTitle={lightboxTitle}
            />
        </div>
    );
};

export default Gallery;
