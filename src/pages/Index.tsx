import ProjectCard from "@/components/ProjectCard";
import { Github } from "lucide-react";

const Index = () => {
  const projects = [
    {
      title: "Simplex Noise",
      description: "An implementation of Simplex noise algorithm for procedural generation. Perfect for creating natural-looking terrain, textures, and patterns with smooth, continuous random values.",
      url: "https://ar2116.github.io/Simplex-Noise/",
      tags: ["Algorithm", "Procedural", "Visualization"],
    },
    {
      title: "Idea Generator",
      description: "A creative tool for generating unique ideas and concepts. Helps spark creativity and overcome creative blocks with intelligent randomization and suggestion algorithms.",
      url: "https://ar2116.github.io/Idea-Generator/",
      tags: ["Creative", "Tool", "Generator"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent" />
        
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            My Projects
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            A collection of cross-platform web applications built with modern technologies
          </p>
          
          <a
            href="https://github.com/ar2116"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <Github className="w-5 h-5" />
            View on GitHub
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>Built with React • Deployed on GitHub Pages</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
