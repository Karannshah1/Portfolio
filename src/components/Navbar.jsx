import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Blog", href: "/#blog" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-200 border-b-4 border-border",
        isScrolled
          ? "bg-background py-3"
          : "bg-background py-5"
      )}
    >
      <div className="container mx-auto max-w-6xl flex justify-between items-center px-4">
        <a
          href="/"
          className="text-2xl font-black tracking-tighter"
        >
          KARAN<span className="text-primary">.DEV</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
          
          <a
            href="/#contact"
            className="brutal-button !py-2 !px-4 text-sm"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden border-2 border-border p-1 bg-secondary text-secondary-foreground shadow-[2px_2px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b-4 border-border p-4 shadow-[0_4px_0_0_#000]">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-bold uppercase py-2 border-b-2 border-border/20 hover:text-primary hover:pl-4 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/#contact"
              className="brutal-button text-center w-full mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
