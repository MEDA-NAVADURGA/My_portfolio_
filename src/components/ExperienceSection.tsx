import { Award, Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Junior Backend Developer Intern",
    organization: "BizPlus4U",
    period: "May - June 2025",
    description:
      "Built and maintained 10+ RESTful APIs with Node.js and Express.js and optimized MySQL schemas to improve LMS performance.",
  },
  {
    type: "work",
    title: "Software Development Intern",
    organization: "Walys Life Skills",
    period: "March - May 2025",
    Type:"Online",
    description:
      "Gained hands-on experience in Python scripting and backend fundamentals, automating data workflows to reduce manual effort by 20%.",
  },
];

const achievements = [
  {
    title: "NPTEL Elite Certification",
    description: "Programming in Python - Elite Certificate with Gold Medal",
    icon: Award,
  },
  {
    title: "IDE Bootcamp",
    description: "Attended an IDE Bootcamp conducted at GLA University, Mathura (Uttar Pradesh), gaining hands-on exposure to industry-oriented development practices.",
    icon: GraduationCap,
  },
  {
    title: "Hackathon Winner",
    description: "1st place in College Wise Data Analysis Hackathon 2024",
    icon: Award,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-accent font-medium text-sm uppercase tracking-wider mb-2">
              My journey
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Experience & Achievements
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience Timeline */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                  <Briefcase size={22} />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Experience</h3>
              </div>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-accent before:ring-4 before:ring-accent/20"
                  >
                    <div className="absolute left-1.5 top-5 bottom-0 w-px bg-border" />
                    <div className="p-5 rounded-xl bg-card border border-border shadow-card">
                      <span className="text-xs text-accent font-medium uppercase tracking-wider">
                        {exp.period}
                      </span>
                      <h4 className="text-lg font-semibold text-foreground mt-1">
                        {exp.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {exp.organization}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                  <Award size={22} />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Achievements</h3>
              </div>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-card border border-border shadow-card hover-lift flex items-start gap-4"
                  >
                    <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0">
                      <achievement.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
