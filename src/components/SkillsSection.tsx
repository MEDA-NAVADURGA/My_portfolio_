import { Code, Database, Globe, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "Java"],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript","TypeScript", "Node.js", "React", "Express.js" ],
  },
  {
    title: "Data & Analytics",
    icon: Database,
    skills: ["Power BI","Looker Studio", "Pandas", "NumPy", "Matplotlib", "Excel"],
  },{
    title: "DBMS",
    icon: Globe,
    skills: ["SQL", "MongoDB"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "PostMan", "VS Code", "Jupyter"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-accent font-medium text-sm uppercase tracking-wider mb-2">
              What I know
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Skills & Technologies
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="p-6 rounded-xl bg-card border border-border shadow-card hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                    <category.icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
