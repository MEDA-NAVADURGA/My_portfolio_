import { useState } from "react";
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-accent font-medium text-sm uppercase tracking-wider mb-2">
              Get in touch
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Let's Work Together
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out!
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:navadurgameda84@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-card hover-lift group"
                >
                  <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">navadurgameda84@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/navadurga-meda-848793276/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-card hover-lift group"
                >
                  <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Linkedin size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="text-foreground font-medium">linkedin.com/in/navadurga-meda-848793276/</p>
                  </div>
                </a>

                <a
                  href="https://github.com/MEDA-NAVADURGA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-card hover-lift group"
                >
                  <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Github size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="text-foreground font-medium">https://github.com/MEDA-NAVADURGA</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-card">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">Hyderabad, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-card"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="example"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
