import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    avatar: string;
}

const Testimonials = () => {
    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Product Manager',
            company: 'Tech Corp',
            content: 'Keshav is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.',
            avatar: '👩‍💼'
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Senior Developer',
            company: 'Innovation Labs',
            content: 'Working with Keshav was a pleasure. He brings creative solutions to complex problems and is always eager to learn new technologies.',
            avatar: '👨‍💻'
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            role: 'UI/UX Designer',
            company: 'Design Studio',
            content: 'Keshav has a great eye for design and translates mockups into pixel-perfect implementations. His code is clean and maintainable.',
            avatar: '👩‍🎨'
        }
    ];

    return (
        <section id="testimonials" className="py-20 section-gradient">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient fade-in">
                            What People Say
                        </h2>
                        <p className="text-xl text-muted-foreground fade-in">
                            Testimonials from colleagues and clients 💬
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card
                                key={testimonial.id}
                                className="card-gradient shadow-card hover-lift border-0 bounce-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <CardContent className="p-6">
                                    <Quote className="h-8 w-8 text-primary/20 mb-4" />
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        "{testimonial.content}"
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-2xl">
                                            {testimonial.avatar}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">{testimonial.name}</h4>
                                            <p className="text-sm text-muted-foreground">
                                                {testimonial.role} at {testimonial.company}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
