import { Download, FileText } from "lucide-react";
import { Button } from "./ui/button";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent mb-6">
            <FileText size={32} />
          </div>

          {/* Section Header */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Want to know more?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Download my resume to get a comprehensive overview of my skills,
            experience, and achievements.
          </p>

          {/* Download Button */}
          <Button variant="accent" size="xl" asChild>
            <a href="/Nava_Durga_resume.pdf" download="Nava_Durga_resume.pdf">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>

          {/* Note */}
          <p className="text-sm text-muted-foreground mt-6">
            PDF format • Last updated January 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
