import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  tags: string[];
}

const ProjectCard = ({ title, description, url, tags }: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-glow transition-colors"
        >
          View Project
          <ExternalLink className="ml-2 w-4 h-4" />
        </a>
      </CardContent>
      
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-lg transition-colors pointer-events-none" />
    </Card>
  );
};

export default ProjectCard;
