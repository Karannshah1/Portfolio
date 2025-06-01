import { ArrowRight, ExternalLink, Github } from "lucide-react";



const projects = [
  {
    id: 1,
    title: "Fashion Semantic Search",
    description:
      "Created a web scraping algorithm that extracts JSON data from 10,000+ fashion items from top sites. Built a site using BERT transformer for semantic search, achieving 60% accuracy.",
    image: "/projects/fashion-search.png",
    tags: ["Python", "BERT", "NLP", "Web Scraping"],
    demoUrl: "#",
    githubUrl: "https://github.com/yourusername/fashion-semantic-search",
  },
  {
    id: 2,
    title: "Network Path Optimiser",
    description:
      "Optimized data flow using Dinic’s algorithm for max flow and Dijkstra’s for shortest path, ensuring efficient data routing.",
    image: "/projects/network-optimizer.png",
    tags: ["C++", "DSA", "Algorithms"],
    demoUrl: "#",
    githubUrl: "https://github.com/Karannshah1/fashion-similarity-search",
  },
  {
    id: 3,
    title: "Pulsar Star Recognition",
    description:
      "Applied Decision Tree, Naive Bayes, and SVM classifiers for pulsar star data, achieving 97.8% accuracy after processing and comparing various ML algorithms.",
    image: "/projects/pulsar-star.png",
    tags: ["Python", "Machine Learning", "SVM", "Scikit-learn"],
    demoUrl: "#",
    githubUrl: "https://github.com/Karannshah1/pulsar_star_recognition",
  },
  {
    id: 4,
    title: "WhatsApp Chat Analyser",
    description:
      "Built a Python-based chat analyzer for WhatsApp data with time-based and user-based insights. Used NLTK for sentiment analysis of conversations.",
    image: "/projects/whatsapp-analyzer.png",
    tags: ["Python", "NLP", "NLTK"],
    demoUrl: "#",
    githubUrl: "https://github.com/Karannshah1/PSC_innovative",
  },
];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Karannshah1/"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};