import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/95 backdrop-blur-xl border-b border-slate-800 shadow-lg shadow-cyan-500/5" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl md:text-3xl tracking-wider cursor-pointer"
            style={{ fontWeight: 800 }}
            onClick={() => scrollToSection("#home")}
          >
            Proper<span className="text-cyan-400">Cut</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative text-sm uppercase tracking-[0.2em] text-slate-300 hover:text-white transition-colors cursor-pointer group"
                style={{ fontWeight: 600 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-red-500 group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
            
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-red-500 hover:from-cyan-400 hover:to-red-400 rounded-md text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 cursor-pointer"
              style={{ fontWeight: 700 }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-slate-800/50 rounded-lg transition-colors cursor-pointer"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-6 flex flex-col gap-4 pb-6"
            >
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-base uppercase tracking-wider text-slate-300 hover:text-cyan-400 transition-colors py-3 border-b border-slate-800 cursor-pointer"
                  style={{ fontWeight: 600 }}
                >
                  {item.label}
                </button>
              ))}
              
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 px-6 py-4 bg-gradient-to-r from-cyan-500 to-red-500 text-center rounded-md text-sm uppercase tracking-wider shadow-lg shadow-cyan-500/30 cursor-pointer"
                style={{ fontWeight: 700 }}
              >
                Hire Me
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
