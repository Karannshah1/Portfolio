import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogs = [
  {
    title: "We Hit 3.2 Million Writes/sec on a Single JVM",
    excerpt: "10 stages, real SQL, real database locks — how architecture beats hardware every time.",
    date: "August 25, 2026",
    slug: "jvm-32-million-writes-per-second"
  },
  {
    title: "The JVM Tiered Compilation Death Spiral",
    excerpt: "Stop auto-scaling on CPU during warm-up. Understanding JIT compilation mechanics.",
    date: "July 21, 2026",
    slug: "jvm-tiered-compilation-death-spiral"
  },
  {
    title: "The Physics of N+1 and Cartesian Explosions",
    excerpt: "Stop guessing about Hibernate performance and architect for physics.",
    date: "July 12, 2026",
    slug: "hibernate-performance"
  },
  {
    title: "Building a Semantic Search Engine with BERT",
    excerpt: "Explore how we moved beyond keyword search using transformers and vector databases.",
    date: "April 15, 2026",
    slug: "semantic-search-bert"
  },
  {
    title: "Optimizing Network Paths with Dinic's Algorithm",
    excerpt: "A deep dive into maximum flow problems and optimizing routing for simulated logistics.",
    date: "March 02, 2026",
    slug: "dinics-algorithm-routing"
  },
  {
    title: "Microservices with Spring Boot",
    excerpt: "Transitioning from monolithic architectures and managing distributed complexity.",
    date: "January 20, 2026",
    slug: "spring-boot-microservices"
  }
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-24 px-4 bg-background border-t-4 border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight bg-primary text-primary-foreground px-4 py-2 border-4 border-border shadow-[8px_8px_0_0_var(--color-border)] inline-block">
            Tech_Log
          </h2>
          <p className="font-mono text-base sm:text-lg font-bold md:w-1/3 text-left md:text-right">
            Insights, architecture breakdowns, and algorithm explorations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/blog/${blog.slug}`} className="block h-full">
                <article className="brutal-card brutal-card-hover h-full flex flex-col bg-card p-6">
                  <div className="flex justify-between items-start mb-6 border-b-4 border-border pb-4">
                    <div className="p-3 bg-secondary text-secondary-foreground border-2 border-border shadow-[4px_4px_0_0_var(--color-border)]">
                      <BookOpen size={24} />
                    </div>
                    <span className="font-mono font-bold text-sm bg-primary text-primary-foreground px-2 py-1 border-2 border-border">
                      {blog.date}
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-black uppercase mb-4 leading-tight group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  
                  <p className="text-foreground/80 font-mono text-sm leading-relaxed mb-6 flex-grow">
                    {blog.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between font-bold text-primary">
                    <span className="uppercase">Read_File</span>
                    <ArrowRight size={20} className="transform transition-transform group-hover:translate-x-2" />
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
