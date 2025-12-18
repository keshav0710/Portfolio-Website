const About = () => {
  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient fade-in">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground mb-12 fade-in">
            Get to know the person behind the code 👨‍💻
          </p>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="slide-in-left">
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary-light to-accent-light shadow-card p-8 flex items-center justify-center">
                  <div className="text-8xl">👨‍💻</div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-2xl animate-bounce">
                  💡
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-xl animate-pulse">
                  🚀
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="slide-in-right text-left">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hi, I’m Keshav Toshniwal — a developer who enjoys turning ideas into real, working products.
                  I’m currently a final-year ECE student, but honestly, my heart lies more in software development than core electronics.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  I work with React, React Native, Firebase, and Node.js, and I love building things like mobile apps, web dashboards, and real-time systems.
                  Mera focus sirf code likhne pe nahi hota — I care about how users actually use the product.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  I’ve built projects ranging from smart home automation systems (IoT + Firebase) to productivity and habit-tracking apps. In most projects, I handle everything end-to-end — UI, logic, backend integration, and deployment.
                </p>

                {/* Fun Facts */}
                <div className="bg-card rounded-xl p-6 shadow-card mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Fun Facts About Me:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <span className="text-primary mr-2">🎯</span>
                      I’m an ECE student who enjoys debugging JavaScript more than circuits ⚡💻
                    </li>
                    <li className="flex items-center">
                      <span className="text-secondary mr-2">☕</span>
                      I learn faster by building projects than watching tutorials — code first, Google later.
                    </li>
                    <li className="flex items-center">
                      <span className="text-accent mr-2">🌱</span>
                      Always learning something new in tech
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary mr-2">💪</span>
                      Turning "it's impossible" into "it's deployed"
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;