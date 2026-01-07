import { motion } from "motion/react";
import { useState } from "react";
import { Youtube } from "lucide-react";

export function ChannelExperience() {
  const [hoveredChannel, setHoveredChannel] = useState<string | null>(null);

  const channels = [
    { name: "History Uncovered", subscribers: "2.5M+", category: "Documentary" },
    { name: "Sports Legends Hub", subscribers: "1.8M+", category: "Sports" },
    { name: "Dark Mysteries", subscribers: "3.2M+", category: "Crime & Mystery" },
    { name: "Celebrity Insider", subscribers: "950K+", category: "Lifestyle" },
    { name: "Automation Empire", subscribers: "1.2M+", category: "Faceless" },
    { name: "Psychology Deep Dive", subscribers: "780K+", category: "Education" },
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black to-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(239,68,68,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.05),transparent_50%)]" />

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
            <span className="text-red-400 uppercase tracking-[0.3em] text-sm">
              Proven Track Record
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
              CHANNELS
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-500 to-cyan-400 bg-clip-text text-transparent">
              I'VE WORKED WITH
            </span>
          </h2>
          
          <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Trusted by top YouTube channels.
            <br />
            <span className="text-white">Millions of views. Proven results.</span>
          </p>
        </motion.div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((channel, index) => (
            <motion.div
              key={channel.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredChannel(channel.name)}
              onHoverEnd={() => setHoveredChannel(null)}
              className="group relative"
            >
              <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-lg border border-slate-800 hover:border-red-500/50 transition-all duration-300 cursor-pointer">
                {/* YouTube icon */}
                <motion.div
                  animate={{
                    scale: hoveredChannel === channel.name ? 1.1 : 1,
                    rotate: hoveredChannel === channel.name ? 5 : 0,
                  }}
                  className="mb-4"
                >
                  <Youtube
                    size={40}
                    className={`${
                      hoveredChannel === channel.name
                        ? "text-red-500"
                        : "text-slate-400"
                    } transition-colors duration-300`}
                  />
                </motion.div>

                {/* Channel name with glitch effect */}
                <motion.h3
                  className="text-2xl mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300"
                  style={{ fontWeight: 700 }}
                  animate={{
                    x: hoveredChannel === channel.name ? [0, -2, 2, 0] : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: hoveredChannel === channel.name ? 2 : 0,
                  }}
                >
                  {channel.name}
                </motion.h3>

                {/* Subscribers */}
                <p className="text-cyan-400 text-lg mb-2" style={{ fontWeight: 600 }}>
                  {channel.subscribers} Subscribers
                </p>

                {/* Category */}
                <div className="inline-block bg-black/50 px-3 py-1 rounded-full">
                  <span className="text-xs text-slate-400 uppercase tracking-wider">
                    {channel.category}
                  </span>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  animate={{
                    opacity: hoveredChannel === channel.name ? 0.3 : 0,
                  }}
                  className="absolute -inset-[1px] bg-gradient-to-r from-red-500 to-cyan-500 rounded-lg -z-10 blur-lg"
                />
              </div>

              {/* Lift effect */}
              <motion.div
                animate={{
                  y: hoveredChannel === channel.name ? -5 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 -z-20"
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { number: "15M+", label: "Total Views Generated" },
            { number: "200+", label: "Videos Edited" },
            { number: "85%", label: "Avg. Retention Rate" },
            { number: "30+", label: "Channels Managed" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-slate-900/80 to-black border border-slate-800 rounded-lg"
            >
              <div
                className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent"
                style={{ fontWeight: 800 }}
              >
                {stat.number}
              </div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

