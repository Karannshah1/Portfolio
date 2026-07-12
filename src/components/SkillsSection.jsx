import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  // Languages
  { name: "C++", level: 90, category: "languages" },
  { name: "Python", level: 85, category: "languages" },
  { name: "Java", level: 85, category: "languages" },

  // Frontend
  { name: "React", level: 85, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },

  // Backend
  { name: "Spring Boot", level: 85, category: "backend" },
  { name: "SQL", level: 85, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "PostgreSQL", level: 70, category: "backend" },

  // Machine Learning
  { name: "Machine Learning (SVM, Decision Trees)", level: 85, category: "ml" },
  { name: "NLP (NLTK)", level: 80, category: "ml" },
  { name: "BERT Transformer", level: 75, category: "ml" },
  { name: "Scikit-learn", level: 80, category: "ml" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "VS Code / IntelliJ", level: 95, category: "tools" },
];

const categories = ["all", "languages", "frontend", "backend", "ml", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-background/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              {category === "ml" ? "Machine Learning" : category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill, key) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 rounded-xl"
              >
                <div className="flex justify-between items-end mb-3">
                  <h3 className="font-semibold text-lg text-foreground">{skill.name}</h3>
                  <span className="text-sm font-medium text-primary">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-secondary/50 h-2.5 rounded-full overflow-hidden border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full bg-linear-to-r from-primary/80 to-primary"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};