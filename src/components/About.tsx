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
                  Currently in my final year of ECE, but my real interest has always been software—specifically frontend and real-time systems. I've spent the last few years building mobile apps, IoT dashboards, and productivity tools, mostly end-to-end: UI, logic, backend, deployment.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  I work primarily with React, React Native, Firebase, and TypeScript. I care about how users interact with what I build, so I focus on performance, responsiveness, and clean interfaces. I don't just ship features—I ship experiences that feel right.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Most of my learning happens by building. I'll take on a project, hit roadblocks, figure it out, and come out knowing something new. That's how I learned real-time Firebase sync, React Native navigation, and RAG-based AI systems.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed font-semibold">
                  I'm looking for SDE or frontend roles where I can work on user-facing products, contribute to real-world systems, and keep learning from people better than me.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;