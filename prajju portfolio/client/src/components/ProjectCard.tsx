import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
  index: number;
}

export function ProjectCard({ title, description, tags, imageUrl, demoUrl, repoUrl, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full"
    >
      {/* Image Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-sm">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-white hover:text-primary transition-colors transform hover:scale-110"
              title="View Live Demo"
            >
              <div className="p-3 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition-all">
                <ExternalLink size={24} />
              </div>
              <span className="text-xs font-medium tracking-wider">VISIT</span>
            </a>
          )}
          {repoUrl ? (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-white hover:text-primary transition-colors transform hover:scale-110"
              title="View Source Code"
            >
              <div className="p-3 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition-all">
                <Github size={24} />
              </div>
              <span className="text-xs font-medium tracking-wider">CODE</span>
            </a>
          ) : (
            <div className="flex flex-col items-center gap-2 text-gray-400 opacity-50 cursor-not-allowed">
              <div className="p-3 bg-white/5 rounded-full border border-white/10">
                <Github size={24} />
              </div>
              <span className="text-xs font-medium tracking-wider">PRIVATE</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors flex items-center gap-2">
            <Folder size={18} className="text-primary" />
            {title}
          </h3>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        <div className="mt-auto pt-4 border-t border-border flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
