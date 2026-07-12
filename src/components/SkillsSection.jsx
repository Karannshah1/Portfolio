import { useState } from "react";
import { Code2, Database, Layout, PenTool, Server, Brain } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    items: [
      { name: "Java", level: 95 },
      { name: "C++", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 90 },
    ],
  },
  {
    category: "Frameworks & Systems",
    icon: <Server className="w-5 h-5" />,
    items: [
      { name: "Spring Boot", level: 90 },
      { name: "Hibernate/JPA", level: 85 },
      { name: "React.js", level: 85 },
      { name: "Apache Kafka", level: 80 },
      { name: "Microservices", level: 85 },
    ],
  },
  {
    category: "Databases & Tools",
    icon: <Database className="w-5 h-5" />,
    items: [
      { name: "MySQL / PostgreSQL", level: 90 },
      { name: "MS SQL Server", level: 80 },
      { name: "Docker", level: 75 },
      { name: "Git & GitHub", level: 95 },
      { name: "Postman", level: 90 },
      { name: "Maven", level: 85 },
    ],
  },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Languages");

  return (
    <section id="skills" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight bg-primary text-primary-foreground px-4 py-2 border-4 border-border shadow-[8px_8px_0_0_var(--color-border)] inline-block">
            Tech_Stack
          </h2>
          <p className="md:w-1/2 text-lg font-mono font-medium md:mt-4">
            A comprehensive overview of the tools, languages, and frameworks I use to build scalable systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Categories Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {skills.map((skillGroup) => (
              <button
                key={skillGroup.category}
                onClick={() => setActiveCategory(skillGroup.category)}
                className={`flex items-center gap-4 w-full p-4 border-2 border-border font-bold uppercase transition-all duration-200 text-left
                  ${
                    activeCategory === skillGroup.category
                      ? "bg-primary text-primary-foreground shadow-[4px_4px_0_0_var(--color-border)] translate-x-1"
                      : "bg-card text-foreground hover:bg-secondary hover:text-secondary-foreground"
                  }`}
              >
                {skillGroup.icon}
                {skillGroup.category}
              </button>
            ))}
          </div>

          {/* Skills Display Area */}
          <div className="lg:col-span-8 brutal-card p-8 bg-secondary/10">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className={`${
                  activeCategory === skillGroup.category ? "block" : "hidden"
                }`}
              >
                <div className="flex items-center gap-4 mb-8 border-b-4 border-border pb-4">
                  <div className="p-2 bg-primary text-primary-foreground border-2 border-border shadow-[2px_2px_0_0_var(--color-border)]">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-3xl font-black uppercase">
                    {skillGroup.category}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {skillGroup.items.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-end">
                        <span className="font-bold uppercase tracking-wide">
                          {item.name}
                        </span>
                        <span className="font-mono font-bold text-sm bg-primary text-primary-foreground px-2 py-0.5 border-2 border-border shadow-[2px_2px_0_0_var(--color-border)]">
                          {item.level}%
                        </span>
                      </div>
                      <div className="h-4 w-full bg-card border-2 border-border">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-primary border-r-2 border-border"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};