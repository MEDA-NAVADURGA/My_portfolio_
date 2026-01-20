import { ArrowDown, Code, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          
          {/* LEFT: Content */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-accent font-medium text-sm sm:text-base mb-4 opacity-0 animate-fade-in-up">
              Hello, I'm
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 opacity-0 animate-fade-in-up stagger-1">
              Nava Durga Meda
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 opacity-0 animate-fade-in-up stagger-2">
              Software Engineer & Data Analyst
            </p>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-8 opacity-0 animate-fade-in-up stagger-3">
              Building scalable applications and extracting insights from data.
              Passionate about solving real-world problems with technology.
            </p>

            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-12 opacity-0 animate-fade-in-up stagger-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button variant="heroOutline" size="lg" asChild>
                <a href="#resume">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4 opacity-0 animate-fade-in-up stagger-5">
              <a
                href="https://github.com/MEDA-NAVADURGA"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/navadurga-meda-848793276/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>


              <a
                href="mailto:navadurgameda84.com"
                className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>

              <a
                href="https://leetcode.com/u/Nava_Durga_9/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:-translate-y-1"
                aria-label="LeetCode"
              >
                <Code size={20} />
              </a>
            </div>
          </div>

          {/* RIGHT: Profile Picture */}
          <div className="flex-shrink-0 opacity-0 animate-fade-in-up">
            <img
              src="/profile.png"
              alt="Profile Picture"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full shadow-lg border-4 border-background"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in stagger-6">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
