import { ArrowRight, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    title: "Understanding BERT for Semantic Search",
    excerpt: "How I leveraged BERT transformers to build a semantic search engine for fashion items that understands context better than keyword matching.",
    date: "May 12, 2024",
    readTime: "5 min read",
    category: "Machine Learning",
    url: "#"
  },
  {
    id: 2,
    title: "Optimizing Network Paths with Dinic's Algorithm",
    excerpt: "A deep dive into how I used Dinic's algorithm alongside Dijkstra's to create a highly efficient network routing solution in C++.",
    date: "April 28, 2024",
    readTime: "7 min read",
    category: "Algorithms",
    url: "#"
  },
  {
    id: 3,
    title: "Building Scalable Backends with Spring Boot",
    excerpt: "Best practices and architectural patterns for creating robust and maintainable enterprise backends using Java and Spring Boot.",
    date: "March 15, 2024",
    readTime: "6 min read",
    category: "Backend Dev",
    url: "#"
  }
];

export const BlogSection = () => {
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
    <section id="blog" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="text-primary">Articles</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Insights, tutorials, and deep dives into software engineering, machine learning, and system design.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogs.map((blog) => (
            <motion.div
              variants={cardVariants}
              key={blog.id}
              className="group glass-card p-8 rounded-2xl flex flex-col h-full hover:border-primary/50 transition-colors"
            >
              <div className="mb-6">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                  {blog.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors leading-tight">
                {blog.title}
              </h3>
              
              <p className="text-muted-foreground text-base mb-6 flex-grow leading-relaxed">
                {blog.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border/50">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {blog.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} /> {blog.readTime}</span>
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
            href="#"
          >
            Read More on Medium <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
