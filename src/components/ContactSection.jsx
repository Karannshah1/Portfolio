import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
      e.target.reset();
    }, 1500);
  };

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
    <section id="contact" className="py-32 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h3 variants={itemVariants} className="text-3xl font-semibold mb-6">
              Let's Connect
            </motion.h3>

            <div className="space-y-6">
              <motion.div variants={itemVariants} className="flex items-center space-x-5 group">
                <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-foreground mb-1">Email</h4>
                  <a
                    href="mailto:karannshah13@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-base"
                  >
                    karannshah13@gmail.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-center space-x-5 group">
                <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-foreground mb-1">Phone</h4>
                  <a
                    href="tel:+919106926865"
                    className="text-muted-foreground hover:text-primary transition-colors text-base"
                  >
                    +91 910 692-6865
                  </a>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-center space-x-5 group">
                <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground text-base">
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="pt-8 border-t border-border/50">
              <h4 className="font-medium mb-6 text-lg">Social Profiles</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/karanshaah/" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/Karannshah1/" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Github size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-10 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/80">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-background/50 focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/80">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-background/50 focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-background/50 focus:outline-hidden focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 mt-4"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
