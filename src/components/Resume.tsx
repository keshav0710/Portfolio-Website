import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Resume = () => {
    const handleDownload = () => {
        // Create a link element and trigger download
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Keshav_Toshniwal_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="resume" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient fade-in">
                            Resume
                        </h2>
                        <p className="text-xl text-muted-foreground fade-in">
                            Download my resume to learn more about my experience 📄
                        </p>
                    </div>

                    {/* Resume Card */}
                    <Card className="card-gradient shadow-card hover-lift border-0 bounce-in">
                        <CardContent className="p-8 md:p-12">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="flex items-center gap-6">
                                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                                        <FileText className="h-10 w-10 text-primary" />
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h3 className="text-2xl font-bold mb-2">Keshav Toshniwal</h3>
                                        <p className="text-muted-foreground mb-1">Full Stack Developer</p>
                                        <p className="text-sm text-muted-foreground">
                                            Last updated: December 2025
                                        </p>
                                    </div>
                                </div>

                                <Button
                                    onClick={handleDownload}
                                    size="lg"
                                    className="bg-primary hover:bg-primary-dark text-white shadow-primary hover-lift"
                                >
                                    <Download className="h-5 w-5 mr-2" />
                                    Download Resume
                                </Button>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary mb-1">3+</div>
                                    <div className="text-sm text-muted-foreground">Projects</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-secondary mb-1">2+</div>
                                    <div className="text-sm text-muted-foreground">Years Coding</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-accent mb-1">5+</div>
                                    <div className="text-sm text-muted-foreground">Technologies</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary mb-1">100%</div>
                                    <div className="text-sm text-muted-foreground">Dedication</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Resume;
