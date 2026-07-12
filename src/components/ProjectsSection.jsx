import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "InsightFinder",
    description:
      "A comprehensive semantic search engine powered by BERT embeddings. It processes large document corpora and retrieves highly contextual results, significantly outperforming traditional keyword search.",
    image: "https://images.unsplash.com/photo-1518183214770-9c67425b7061?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "PyTorch", "BERT", "React", "FastAPI"],
    github: "#",
    demo: "#",
  },
  {
    title: "NetOptimize Engine",
    description:
      "A high-performance C++ routing engine that calculates optimal network paths for simulated logistics networks using Dinic's Algorithm and advanced graph structures.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    tags: ["C++", "Algorithms", "Graph Theory"],
    github: "#",
    demo: "#",
  },
  {
    title: "Enterprise E-Commerce",
    description:
      "A scalable Spring Boot microservices-based e-commerce backend with a React frontend, featuring secure authentication, payment processing, and inventory management.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    tags: ["Java", "Spring Boot", "React", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "EventFlow Platform",
    description:
      "An event management platform built to handle ACES workshops and hackathons. Features attendee registration, QR code ticketing, and real-time dashboard analytics.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Node.js", "MongoDB", "Tailwind"],
    github: "#",
    demo: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-secondary/10 border-y-4 border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight bg-card text-foreground px-4 py-2 border-4 border-border shadow-[8px_8px_0_0_#000] inline-block">
            Featured_Work
          </h2>
          <a href="https://github.com/Karannshah1" target="_blank" rel="noreferrer" className="brutal-button-secondary flex items-center gap-2">
            View All GitHub <Github size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="brutal-card brutal-card-hover group flex flex-col"
            >
              <div className="relative h-56 w-full overflow-hidden border-b-4 border-border bg-card">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 mix-blend-multiply"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                
                {/* Overlay Links on Hover */}
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      className="p-2 bg-card border-2 border-border shadow-[4px_4px_0_0_#000] text-foreground hover:bg-primary hover:text-primary-foreground hover:translate-y-[-2px] transition-all"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="p-2 bg-card border-2 border-border shadow-[4px_4px_0_0_#000] text-foreground hover:bg-primary hover:text-primary-foreground hover:translate-y-[-2px] transition-all"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <FolderGit2 className="text-primary w-6 h-6" />
                  <h3 className="text-2xl font-black uppercase tracking-tight">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground font-mono text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="brutal-badge"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};