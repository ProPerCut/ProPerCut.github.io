import { motion } from "motion/react";
import { Brain, Scissors, TrendingUp, Award } from "lucide-react";

export function AboutPremium() {
  const expertise = [
    {
      icon: Brain,
      title: "Psychology-Driven",
      description: "Every cut, transition, and effect is strategically placed to maximize retention and engagement.",
    },
    {
      icon: Scissors,
      title: "Precision Editing",
      description: "Frame-perfect cuts that maintain pacing and flow. No dead moments.",
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Edits designed to boost watch time, CTR, and channel growth metrics.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Cinematic color grading, professional sound design, and motion graphics.",
    },
  ];

  const tools = [
    { name: "Adobe Premiere Pro", icon: "🎬", mastery: 95 },
    { name: "After Effects", icon: "⚡", mastery: 92 },
    { name: "DaVinci Resolve", icon: "🎨", mastery: 90 },
    { name: "Photoshop", icon: "🖼️", mastery: 88 },
  ];

  return (
    <section id="about" className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.04),transparent_60%)]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
              About Me
            </span>
          </motion.div>
          
          <h2
            className="text-5xl md:text-7xl lg:text-8xl mb-6"
            style={{
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              BEYOND
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent">
              EDITING
            </span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3
              className="text-3xl md:text-4xl mb-6"
              style={{ fontWeight: 700, lineHeight: 1.2 }}
            >
              I don't just edit videos.
              <br />
              <span className="text-cyan-400">I craft experiences.</span>
            </h3>

            <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
              <p>
                <span className="text-white font-semibold">Video editing is psychology.</span>
                {" "}Every frame counts. Every transition matters. I understand what keeps viewers watching—and what makes them click away.
              </p>

              <p>
                My journey started with a simple question:{" "}
                <span className="text-cyan-400 italic">"Why do some videos hold attention while others don't?"</span>
              </p>

              <p>
                Years of experience across documentaries, sports content, crime stories, and faceless automation channels taught me one thing:
                {" "}<span className="text-white font-semibold">storytelling beats raw editing every time.</span>
              </p>

              <p>
                I combine <span className="text-red-400">technical precision</span> with{" "}
                <span className="text-cyan-400">psychological insight</span> to create videos that don't just look good—they{" "}
                <span className="text-white font-semibold">perform.</span>
              </p>
            </div>
          </motion.div>

          {/* Right: Expertise Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gradient-to-br from-slate-900/80 to-black p-6 rounded-lg border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon
                    size={36}
                    className="text-cyan-400 mb-4 group-hover:text-red-400 transition-colors duration-300"
                  />
                </motion.div>
                <h4 className="text-xl mb-2" style={{ fontWeight: 700 }}>
                  {item.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tools & Mastery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-900/60 to-black p-10 md:p-16 rounded-2xl border border-slate-800"
        >
          <h3
            className="text-3xl md:text-4xl mb-12 text-center"
            style={{ fontWeight: 700 }}
          >
            Technical <span className="text-cyan-400">Mastery</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{tool.icon}</span>
                    <span className="text-xl text-slate-200" style={{ fontWeight: 600 }}>
                      {tool.name}
                    </span>
                  </div>
                  <span className="text-cyan-400 text-lg" style={{ fontWeight: 700 }}>
                    {tool.mastery}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tool.mastery}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-red-500 rounded-full relative"
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}

