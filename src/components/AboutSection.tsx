import { GraduationCap, Code2, BarChart3 } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-accent font-medium text-sm uppercase tracking-wider mb-2">
              Get to know me
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              About Me
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Description */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a passionate <span className="text-foreground font-medium">Software Engineer</span> and{" "}
                <span className="text-foreground font-medium">Data Analyst</span> student with hands-on
                experience in Python, Java, SQL, web development, and data visualization.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I enjoy solving real-world problems, building scalable applications, and analyzing
                data to extract meaningful insights. My goal is to leverage technology to create
                impactful solutions that make a difference.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing my degree in Computer Science, I'm constantly learning new
                technologies and methodologies to stay at the forefront of the ever-evolving tech landscape.
              </p>
            </div>

            {/* Right: Cards */}
            <div className="grid gap-6">
              <div className="p-6 rounded-xl bg-card-gradient border border-border shadow-card hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    <Code2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Software Development
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Building robust applications using modern frameworks and best practices.
                      Experienced in both frontend and backend development.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card-gradient border border-border shadow-card hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Data Analysis
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Extracting insights from complex datasets using Python, SQL, and
                      visualization tools like Power BI.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card-gradient border border-border shadow-card hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Academic Excellence
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Bachelor of Technology (B.Tech) in Computer Science (Data Science Specialization)
Strong foundation in algorithms, data structures, and software engineering principles.
CGPA: 8.82
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
