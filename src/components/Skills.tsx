import { Card, CardContent } from '@/components/ui/card';

interface Skill {
  name: string;
  icon: string;
  level: number;
  category: string;
}

const Skills = () => {
  const skills: Skill[] = [
    // Programming Languages
    { name: 'Python', icon: '🐍', level: 80, category: 'Languages' },
    { name: 'C++', icon: '⚡', level: 80, category: 'Languages' },
    { name: 'JavaScript', icon: '🚀', level: 70, category: 'Languages' },
    { name: 'TypeScript', icon: '💙', level: 70, category: 'Languages' },
    { name: 'ReactNative', icon: '📱', level: 70, category: 'Languages' },

    // Frontend
    { name: 'React', icon: '⚛️', level: 70, category: 'Frontend' },
    { name: 'Tailwind CSS', icon: '🎨', level: 80, category: 'Frontend' },
    { name: 'HTML/CSS', icon: '🌐', level: 95, category: 'Frontend' },

    // Backend
    { name: 'Node.js', icon: '🟢', level: 75, category: 'Backend' },
    { name: 'Express', icon: '🚄', level: 75, category: 'Backend' },
    { name: 'REST APIs', icon: '🔌', level: 75, category: 'Backend' },

    // Database & Tools
    { name: 'Firebase', icon: '🔥', level: 90, category: 'Database' },
    { name: 'MySQL', icon: '🐘', level: 80, category: 'Database' },
    { name: 'Git', icon: '📚', level: 92, category: 'Tools' },
    { name: 'VS Code', icon: '💻', level: 95, category: 'Tools' },
  ];

  const learningSkills = [
    { name: 'Kubernetes', icon: '☸️', description: 'Container orchestration' },
    { name: 'AWS', icon: '☁️', description: 'Cloud infrastructure' },
  ];

  const categories = ['Languages', 'Frontend', 'Backend', 'Database', 'Tools'];

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Languages: 'bg-primary/10 border-primary/20 text-primary',
      Frontend: 'bg-secondary/10 border-secondary/20 text-secondary',
      Backend: 'bg-accent/10 border-accent/20 text-accent',
      Database: 'bg-primary-light/20 border-primary-light/30 text-primary-dark',
      Tools: 'bg-muted border-muted-foreground/20 text-muted-foreground'
    };
    return colors[category as keyof typeof colors] || colors.Tools;
  };

  return (
    <section id="skills" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient fade-in">
              Skills & Technologies
            </h2>
            <p className="text-xl text-muted-foreground fade-in">
              Tools and technologies I love working with 🛠️
            </p>
          </div>

          {/* Skills by Category */}
          <div className="space-y-12">
            {categories.map((category, categoryIndex) => (
              <div key={category} className="slide-in-left" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${getCategoryColor(category)}`}>
                    {category}
                  </span>
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {getSkillsByCategory(category).map((skill, index) => (
                    <Card
                      key={skill.name}
                      className="card-gradient shadow-card hover-lift border-0 bounce-in"
                      style={{ animationDelay: `${(categoryIndex * 0.2) + (index * 0.1)}s` }}
                    >
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-3 hover-bounce">
                          {skill.icon}
                        </div>
                        <h4 className="font-semibold mb-2">{skill.name}</h4>

                        {/* Skill Level Bar */}
                        <div className="w-full bg-muted rounded-full h-2 mb-2">
                          <div
                            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        <p className="text-sm text-muted-foreground">{skill.level}%</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Currently Learning Section */}
          <div className="mt-16 fade-in">
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span className="text-gradient">Currently Learning 🌱</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {learningSkills.map((skill, index) => (
                <Card
                  key={skill.name}
                  className="card-gradient shadow-card hover-lift border-0 bounce-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3 hover-bounce">
                      {skill.icon}
                    </div>
                    <h4 className="font-semibold mb-2">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;