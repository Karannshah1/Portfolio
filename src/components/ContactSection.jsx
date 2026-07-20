import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // IMPORTANT: User needs to replace these strings with their actual EmailJS credentials
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          toast({
            title: "MESSAGE_SENT_SUCCESS",
            description: "Your message has been received. I will get back to you shortly.",
          });
          setIsSubmitting(false);
          e.target.reset();
      }, (error) => {
          // If placeholders are used, we show a fallback success for UX, but log error
          console.warn("EmailJS Error: You need to add your Service ID, Template ID, and Public Key.", error);
          toast({
            title: "Simulated Success (Config Required)",
            description: "Replace EmailJS keys in ContactSection.jsx to send real emails.",
          });
          setIsSubmitting(false);
          e.target.reset();
      });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight bg-secondary text-secondary-foreground px-4 py-2 border-4 border-border shadow-[8px_8px_0_0_var(--color-border)] inline-block">
            Initialize_Contact
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl sm:text-3xl font-black uppercase border-b-4 border-border pb-4 inline-block">
              Connection Details
            </h3>

            <div className="flex flex-col gap-6">
              <div className="brutal-card p-4 flex items-center gap-4 hover:-translate-y-1 transition-transform">
                <div className="p-3 bg-primary text-primary-foreground border-2 border-border shadow-[2px_2px_0_0_var(--color-border)]">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm">Email_Address</h4>
                  <a href="mailto:karannshah13@gmail.com" className="font-mono text-lg font-medium hover:text-primary transition-colors">
                    karannshah13@gmail.com
                  </a>
                </div>
              </div>

              <div className="brutal-card p-4 flex items-center gap-4 hover:-translate-y-1 transition-transform">
                <div className="p-3 bg-secondary text-secondary-foreground border-2 border-border shadow-[2px_2px_0_0_var(--color-border)]">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm">Terminal_Comm</h4>
                  <a href="tel:+919106926865" className="font-mono text-lg font-medium hover:text-primary transition-colors">
                    +91 910 692-6865
                  </a>
                </div>
              </div>

              <div className="brutal-card p-4 flex items-center gap-4 hover:-translate-y-1 transition-transform">
                <div className="p-3 bg-card text-foreground border-2 border-border shadow-[2px_2px_0_0_var(--color-border)]">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm">Base_Location</h4>
                  <p className="font-mono text-lg font-medium">Ahmedabad, Gujarat, India</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t-4 border-border">
              <h4 className="font-bold uppercase mb-4">External_Nodes</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/karanshaah/" target="_blank" rel="noreferrer" className="p-4 bg-primary text-primary-foreground border-2 border-border shadow-[4px_4px_0_0_var(--color-border)] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--color-border)] transition-all">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/Karannshah1/" target="_blank" rel="noreferrer" className="p-4 bg-card text-foreground border-2 border-border shadow-[4px_4px_0_0_var(--color-border)] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--color-border)] transition-all">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="brutal-card p-4 sm:p-8 bg-secondary/10 mt-8 lg:mt-0"
          >
            <h3 className="text-2xl sm:text-3xl font-black uppercase mb-8 border-b-4 border-border pb-4 inline-block">
              Transmit_Payload
            </h3>

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="user_name" className="block font-bold uppercase text-sm">
                  Identity_String (Name)
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  className="brutal-input font-mono"
                  placeholder="John_Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="user_email" className="block font-bold uppercase text-sm">
                  Return_Address (Email)
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  className="brutal-input font-mono"
                  placeholder="john@server.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block font-bold uppercase text-sm">
                  Data_Payload (Message)
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="brutal-input font-mono resize-y"
                  placeholder="Enter transmission data here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="brutal-button w-full flex items-center justify-center gap-3 mt-4 text-xl py-4"
              >
                {isSubmitting ? "TRANSMITTING..." : "EXECUTE_SEND"}
                <Send size={24} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
