import { Card, CardContent } from '@/components/ui/card';
import { Award, Trophy, Star, Target } from 'lucide-react';

interface Achievement {
    id: number;
    title: string;
    description: string;
    icon: any;
    color: string;
}

const Achievements = () => {
    const achievements: Achievement[] = [
        {
            id: 1,
            title: '5+ Projects Completed',
            description: 'Successfully delivered diverse web applications',
            icon: Trophy,
            color: 'text-yellow-500'
        },
        {
            id: 2,
            title: 'Problem Solver',
            description: 'Solved 100+ coding challenges on various platforms',
            icon: Target,
            color: 'text-secondary'
        },
        {
            id: 3,
            title: 'Fast Learner',
            description: 'Mastered multiple frameworks and technologies',
            icon: Award,
            color: 'text-accent'
        }
    ];

    return (
        <section id="achievements" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient fade-in">
                            Achievements & Milestones
                        </h2>
                        <p className="text-xl text-muted-foreground fade-in">
                            Celebrating progress and continuous growth 🏆
                        </p>
                    </div>

                    {/* Achievements Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {achievements.map((achievement, index) => (
                            <Card
                                key={achievement.id}
                                className="card-gradient shadow-card hover-lift border-0 bounce-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <CardContent className="p-6 text-center">
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 ${achievement.color}`}>
                                        <achievement.icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {achievement.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Additional Stats */}
                    <div style={{ alignItems: 'center' }} className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="flex items-center justify-center p-6 rounded-xl bg-primary/5 border border-primary/10">
                            <div className="text-4xl font-bold text-primary mb-2">2+</div>
                            <div className="text-sm text-muted-foreground">Years Experience</div>
                        </div>
                        <div className="flex items-center justify-center p-6 rounded-xl bg-secondary/5 border border-secondary/10">
                            <div className="text-4xl font-bold text-secondary mb-2">7+</div>
                            <div className="text-sm text-muted-foreground">Technologies</div>
                        </div>
                        <div className="flex items-center justify-center p-6 rounded-xl bg-primary/5 border border-primary/10">
                            <div className="text-4xl font-bold text-primary mb-2">∞</div>
                            <div className="text-sm text-muted-foreground">Learning</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
