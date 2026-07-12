import { Code2, Brain, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-secondary/10 border-y-4 border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-4 inline-block bg-primary text-primary-foreground px-4 py-2 border-4 border-border shadow-[8px_8px_0_0_var(--color-border)]">
            About_Me
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Main Bio Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 brutal-card p-8 flex flex-col justify-center"
          >
            <h3 className="text-3xl font-black uppercase mb-6 border-b-4 border-border pb-4">
              Hello, World.
            </h3>
            <div className="space-y-4 text-lg font-mono font-medium">
              <p>
                I am Karan Shah, an engineering professional deeply focused on the intersection of scalable full-stack development and machine learning.
              </p>
              <p>
                I thrive in high-complexity environments. Whether I'm managing a tech event for 250+ people as MD of ACES or grinding through my 1000th data structures problem, I am driven by the challenge.
              </p>
              <p>
                When I'm not coding, you'll find me exploring the latest in AI, optimizing algorithms, or building the next big thing.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#contact" className="brutal-button">Let's Connect</a>
              <a
                href="/latest_resume_21_02_25.pdf" 
                download
                className="brutal-button-secondary flex items-center gap-2"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-5 flex flex-col gap-8"
          >
            <div className="brutal-card p-6 brutal-card-hover bg-secondary text-secondary-foreground flex items-start gap-4">
              <div className="p-3 bg-zinc-800 text-zinc-100 border-2 border-border shadow-[4px_4px_0_0_var(--color-border)]">
                <Code2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-black uppercase">Algorithmic Prowess</h4>
                <p className="font-mono text-sm mt-2 font-medium">1000+ problems solved across LeetCode & GeeksForGeeks.</p>
              </div>
            </div>

            <div className="brutal-card p-6 brutal-card-hover bg-primary text-primary-foreground flex items-start gap-4">
              <div className="p-3 bg-zinc-800 text-zinc-100 border-2 border-border shadow-[4px_4px_0_0_var(--color-border)]">
                <Brain className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-black uppercase">Machine Learning</h4>
                <p className="font-mono text-sm mt-2 font-medium">Building robust AI architectures and integrating ML pipelines.</p>
              </div>
            </div>

            <div className="brutal-card p-6 brutal-card-hover bg-card flex items-start gap-4">
              <div className="p-3 bg-zinc-800 text-zinc-100 border-2 border-border shadow-[4px_4px_0_0_var(--color-border)]">
                <Terminal className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-black uppercase">Tech Leadership</h4>
                <p className="font-mono text-sm mt-2 font-medium">Managing Director of ACES, organizing 250+ attendee tech events.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};