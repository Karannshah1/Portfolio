import { Brain, Code, User, Database, Layout, Server, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-32 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Bio Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-8 rounded-2xl flex flex-col justify-center"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
              Engineering with Purpose
            </h3>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              With a strong foundation in Java, Spring Boot, React, and SQL, I build scalable, efficient web applications backed by clean architecture. My passion lies in solving complex problems through code, whether that involves optimizing network paths or developing sophisticated NLP models.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I am constantly exploring new technologies, bridging the gap between machine learning and full-stack development to create impactful, real-world solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-auto">
              <a href="#contact" className="cosmic-button">Let's Connect</a>
              <a
                href="/latest_resume_21_02_25.pdf" 
                download
                className="px-6 py-2 rounded-full border border-border text-foreground hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
              >
                <Database size={18} /> Download CV
              </a>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-1 gap-6"
          >
            <motion.div variants={itemVariants} className="glass-card p-6 rounded-2xl flex items-start gap-5 hover:border-primary/50 transition-colors">
              <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                <Code className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-foreground mb-1">Algorithmic Prowess</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Conquered over 1000+ DSA challenges. I excel at building highly optimized solutions like complex network path optimizers.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card p-6 rounded-2xl flex items-start gap-5 hover:border-primary/50 transition-colors">
              <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                <Brain className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-foreground mb-1">AI & Machine Learning</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Leveraging models like BERT and SVM to build intelligent features, from semantic search engines to predictive classifiers.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card p-6 rounded-2xl flex items-start gap-5 hover:border-primary/50 transition-colors">
              <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                <User className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-foreground mb-1">Tech Leadership</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Former Managing Director of ACES, orchestrating tech initiatives and driving collaborative engineering projects.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};