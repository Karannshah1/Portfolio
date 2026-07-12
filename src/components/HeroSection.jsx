import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            Hi, I'm
            <span className="text-primary ml-3">Karan</span>
            <span className="text-gradient ml-3">Shah</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            A passionate Full Stack Engineer and Machine Learning enthusiast. 
            I architect robust, scalable systems and build intelligent applications that solve complex real-world problems.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-8 flex justify-center gap-6"
          >
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary font-semibold hover:bg-primary/10 transition-all duration-300">
              Let's Talk
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer"
      >
        <span className="text-sm text-muted-foreground mb-2 font-medium tracking-wider uppercase text-[10px]">Scroll Down</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.div>
    </section>
  );
};