import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Fashion Semantic Search",
    description:
      "Created a web scraping algorithm extracting JSON data from 10,000+ fashion items. Built a semantic search engine using a BERT transformer, achieving 60% accuracy.",
    image: "/projects/fashion-search.png",
    tags: ["Python", "BERT", "NLP", "Web Scraping"],
    demoUrl: "#",
    githubUrl: "https://github.com/yourusername/fashion-semantic-search",
  },
  {
    id: 2,
    title: "Network Path Optimiser",
    description:
      "Optimized data flow using Dinic’s algorithm for max flow and Dijkstra’s for shortest path, ensuring robust and efficient data routing.",
    image: "/projects/network-optimizer.png",
    tags: ["C++", "DSA", "Algorithms"],
    demoUrl: "#",
    githubUrl: "https://github.com/Karannshah1/fashion-similarity-search",
  },
  {
    id: 3,
    title: "Pulsar Star Recognition",
    description:
      "Applied Decision Tree, Naive Bayes, and SVM classifiers to pulsar star data, achieving 97.8% accuracy after extensive processing.",
    image: "/projects/pulsar-star.png",
    tags: ["Python", "Machine Learning", "SVM", "Scikit-learn"],
    demoUrl: "#",
    githubUrl: "https://github.com/Karannshah1/pulsar_star_recognition",
  },
  {
    id: 4,
    title: "WhatsApp Chat Analyser",
    description:
      "Built a Python-based analyzer for WhatsApp data extracting time-based and user-based insights. Leveraged NLTK for conversation sentiment analysis.",
    image: "/projects/whatsapp-analyzer.png",
    tags: ["Python", "NLP", "NLTK"],
    demoUrl: "#",
    githubUrl: "https://github.com/Karannshah1/PSC_innovative",
  },
];

export const ProjectsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing problem-solving across full-stack development, algorithms, and machine learning.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, key) => (
            <motion.div
              variants={cardVariants}
              key={key}
              className="group glass-card rounded-2xl overflow-hidden card-hover flex flex-col h-full"
            >
              <div className="h-56 overflow-hidden relative">
                {/* Fallback gradient if image fails to load or before it loads */}
                <div className="absolute inset-0 bg-secondary/20 -z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback visual if image doesn't exist
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('bg-linear-to-br', 'from-secondary/40', 'to-primary/10', 'flex', 'items-center', 'justify-center');
                    e.target.parentElement.innerHTML = '<span class="text-muted-foreground font-medium">Image Preview Unavailable</span>';
                  }}
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-base mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center pt-4 border-t border-border/50">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={18} /> Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 text-lg"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Karannshah1/"
          >
            Check My Github <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};