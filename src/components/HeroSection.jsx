import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="pt-32 pb-24 px-4 min-h-[90vh] flex items-center relative overflow-hidden bg-background"
    >
      {/* Decorative Grid Background - Brutalist touch */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="space-y-8"
          >
            <div className="inline-block brutal-badge">
              Software Engineer
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-[1.1] tracking-tight">
              Building <br/>
              <span className="bg-primary text-primary-foreground px-2">Systems</span> &<br/>
              Algorithms
            </h1>

            <p className="text-xl md:text-2xl text-foreground font-mono font-medium max-w-lg">
              I'm Karan Shah, a Full Stack & ML Engineer.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="brutal-button flex items-center gap-2">
                View Work <FileText size={18} />
              </a>
              <a href="#contact" className="brutal-button-secondary">
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-6 pt-8 border-t-4 border-border w-max">
              <a href="https://github.com/Karannshah1" target="_blank" rel="noreferrer" className="text-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">
                <Github size={32} strokeWidth={2.5} />
              </a>
              <a href="https://linkedin.com/in/karanshaah" target="_blank" rel="noreferrer" className="text-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">
                <Linkedin size={32} strokeWidth={2.5} />
              </a>
              <a href="mailto:karannshah13@gmail.com" className="text-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">
                <Mail size={32} strokeWidth={2.5} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square bg-secondary border-4 border-border shadow-[16px_16px_0_0_#000] relative z-10 overflow-hidden group p-8 flex flex-col justify-between">
                <div className="font-mono text-2xl font-bold">
                  {">"} whoami<br/>
                  Karan_Shah<br/>
                  <br/>
                  {">"} skills<br/>
                  [React, Node, PyTorch, C++]
                </div>
                <div className="text-right">
                  <span className="bg-primary text-white font-black text-6xl px-4 py-2 border-4 border-border">1000+</span>
                  <p className="font-mono font-bold mt-2 uppercase">DSA Problems Solved</p>
                </div>
            </div>
            {/* Decorative Brutalist Elements */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary border-4 border-border shadow-[8px_8px_0_0_#000] rounded-full z-0"></div>
            <div className="absolute -top-8 -left-8 w-32 h-8 bg-card border-4 border-border shadow-[4px_4px_0_0_#000] z-20 transform -rotate-12 flex items-center justify-center font-black">HELLO_WORLD</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};