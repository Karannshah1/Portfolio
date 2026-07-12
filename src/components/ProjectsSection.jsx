import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "GeoFleet – Location Platform",
    description:
      "Architected an event-driven microservices ecosystem utilizing Apache Kafka to decouple high-velocity ingress traffic. Engineered a high-throughput Driver Ingestion Service using gRPC.",
    image: "https://images.unsplash.com/photo-1518183214770-9c67425b7061?auto=format&fit=crop&q=80&w=800",
    tags: ["Java 21", "Spring Boot", "Kafka", "gRPC"],
    github: "#",
    demo: "#",
  },
  {
    title: "Fashion Semantic Search",
    description:
      "Built a scalable web scraping pipeline to extract structured JSON data from 10,000+ items and integrated a BERT Large Language Model (LLM) to power context-based semantic search.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "Flask", "BERT", "Web Scraping"],
    github: "#",
    demo: "#",
  },
  {
    title: "MirrorLink – Screen Sharing",
    description:
      "Built a real-time screen sharing web application using WebRTC to enable direct, high-speed video streaming between devices, backed by a Node.js and Socket.IO server.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    tags: ["WebRTC", "React", "Node.js", "Socket.IO"],
    github: "#",
    demo: "#",
  },
  {
    title: "Algo Trading Sandbox",
    description:
      "Developed a ready-to-deploy broker integration module for the Zerodha Kite API and implemented a breakout momentum algorithm (ORB, VWAP, ATR) with robust risk management.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "Pandas", "NumPy", "WebSockets"],
    github: "#",
    demo: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-secondary/10 border-y-4 border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight bg-card text-foreground px-4 py-2 border-4 border-border shadow-[8px_8px_0_0_var(--color-border)] inline-block">
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
                      className="p-2 bg-zinc-800 border-2 border-border shadow-[4px_4px_0_0_var(--color-border)] text-zinc-100 hover:bg-primary hover:text-primary-foreground hover:translate-y-[-2px] transition-all"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="p-2 bg-zinc-800 border-2 border-border shadow-[4px_4px_0_0_var(--color-border)] text-zinc-100 hover:bg-primary hover:text-primary-foreground hover:translate-y-[-2px] transition-all"
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