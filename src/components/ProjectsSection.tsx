import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Artilink",
    description:
      "ArtiLink is a B2B platform developed for my father’s saree business that connects saree manufacturers with retail shops, streamlining product discovery, order management, and business communication.",
    technologies: ["React","CSS", "MySQL", "JWT","Type-Script"],
    github: "https://github.com/MEDA-NAVADURGA/ArtiLink",
    demo: "https://arti-link.vercel.app/",
  },
  {
    title: "FarmVoice",
    description:
      "Full-stack web application For intelligent farming assistant that helps farmers make data-driven decisions using AI-powered recommendations, real-time weather data, disease diagnosis, and market price tracking. Built with modern web technologies and designed for ease of use.",
    technologies: ["Type-Script", "Python", "MySQL"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "PreSmart",
    description:
      "Python-based application that Developed a Python-based academic performance dashboard for the HOD to analyze student data, identify trends, and support academic planning.",
    technologies: ["Python", "Looker Studio", "ETL Process", "Excel"],
    github: "https://github.com",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio website built with React and Tailwind CSS featuring smooth animations and dark mode support.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/MEDA-NAVADURGA/My_portfolio_",
    demo: "https://portfolio-phi-six-60.vercel.app/",
  },{
    title: "AI Assistant– Multi Language Support",
    description:
      "Built an AI-powered chatbot capable of understanding and responding in both English and Telugu.– If the user types in Telugu, the system automatically detects the language and generates contextual responses in Telugu, and if the user types in English, it responds in English. This bilingual chatbot enhances user experience by providing seamless communication in multiple languages.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/MEDA-NAVADURGA/_farmvoiceaiassistant",
    demo: "https://farmvoice-ai-assistant.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-accent font-medium text-sm uppercase tracking-wider mb-2">
              My work
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Featured Projects
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group p-6 rounded-xl bg-card-gradient border border-border shadow-card hover-lift flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs bg-accent/10 text-accent rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2 border-t border-border">
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="mr-1.5" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} className="mr-1.5" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
