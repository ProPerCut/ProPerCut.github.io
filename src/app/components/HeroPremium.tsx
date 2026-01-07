import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export function HeroPremium() {
  const [typingText, setTypingText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "Professional Video Editor",
    "YouTube Automation Specialist",
    "Documentary Storytelling Expert",
    "Cinematic High-Retention Editor",
    "Faceless Channel Growth Architect",
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typingText.length < currentPhrase.length) {
          setTypingText(currentPhrase.substring(0, typingText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (typingText.length > 0) {
          setTypingText(currentPhrase.substring(0, typingText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typingText, isDeleting, currentPhraseIndex]);

  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Background ambient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.08),transparent_40%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(239,68,68,0.08),transparent_40%)]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-screen py-24 lg:py-0">
          
          {/* LEFT SIDE - IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex items-center justify-center lg:justify-start relative order-1 lg:order-1"
          >
            <div className="relative">
              {/* Floating animation wrapper */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                {/* Neon rim lighting effects */}
                <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500 via-purple-500 to-red-500 rounded-full opacity-30 blur-3xl animate-pulse" />
                <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400 to-red-500 rounded-full opacity-20 blur-2xl" />
                
                {/* Image container with oval mask */}
                <div className="relative w-[280px] h-[350px] md:w-[350px] md:h-[450px] lg:w-[420px] lg:h-[520px]">
                  <div className="absolute inset-0 rounded-[40%_40%_40%_40%/50%_50%_50%_50%] overflow-hidden border-4 border-cyan-400/30 shadow-2xl shadow-cyan-500/30">
                    <img
                      src="figma:asset/506c9bb0430f4944708df31e571b073912881a3a.png"
                      alt="Hasan Abdullah - Professional Video Editor"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Cinematic gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                  
                  {/* Edge glow highlights */}
                  <div className="absolute -inset-1 rounded-[40%_40%_40%_40%/50%_50%_50%_50%] bg-gradient-to-r from-cyan-500 to-red-500 opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-500" />
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-500/20 rounded-full blur-3xl"
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE - TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col justify-center space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-2"
          >
            {/* Main Heading */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight mb-4"
                style={{
                  fontWeight: 800,
                  lineHeight: 0.9,
                  letterSpacing: "-0.02em",
                }}
              >
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  HASAN
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-white bg-clip-text text-transparent">
                  ABDULLAH
                </span>
              </motion.h1>
            </div>

            {/* Sub-heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight text-slate-300"
              style={{
                fontWeight: 600,
                lineHeight: 1.2,
              }}
            >
              Crafting Visual Masterpieces at{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent">
                ProperCut
              </span>
            </motion.h2>

            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="h-12 md:h-16 flex items-center justify-center lg:justify-start"
            >
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-cyan-400 h-full flex items-center">
                <span className="border-r-2 border-cyan-400 pr-2 animate-pulse">
                  {typingText}
                </span>
              </p>
            </motion.div>

            {/* Short powerful tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed"
            >
              High-retention edits. Psychology-driven storytelling.
              <br />
              <span className="text-white">Results that scale.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start pt-4"
            >
              <button
                onClick={scrollToPortfolio}
                className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 rounded-md overflow-hidden transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 cursor-pointer"
              >
                <span className="relative z-10 text-base sm:text-lg tracking-wide uppercase" style={{ fontWeight: 700 }}>
                  View Portfolio
                </span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </button>

              <a
                href="#contact"
                className="group relative px-8 sm:px-10 py-4 sm:py-5 border-2 border-red-500 hover:bg-red-500/10 rounded-md overflow-hidden transition-all duration-300 shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:scale-105 cursor-pointer"
              >
                <span className="relative z-10 text-base sm:text-lg tracking-wide uppercase" style={{ fontWeight: 700 }}>
                  Hire Me
                </span>
                <div className="absolute inset-0 bg-red-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToPortfolio}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 15, 0] }}
        transition={{
          opacity: { delay: 2 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-cyan-400 hover:text-cyan-300 transition-colors hidden lg:block cursor-pointer"
      >
        <ChevronDown size={40} strokeWidth={2} />
      </motion.button>
    </section>
  );
}
