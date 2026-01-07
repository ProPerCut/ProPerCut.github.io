import { motion } from "motion/react";
import { Play, ArrowRight } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  featured?: boolean;
}

export function PortfolioPremium() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "The Most Guarded People in the World",
      category: "Power & History Documentaries",
      thumbnail: "https://images.unsplash.com/photo-1605364850012-126639a6ccab?w=800",
      featured: true,
    },
    {
      id: 2,
      title: "The Secrets of the CIA",
      category: "Secrets, Crime & Dark Stories",
      thumbnail: "https://images.unsplash.com/photo-1765562435228-71fa20988b3b?w=800",
      featured: true,
    },
    {
      id: 3,
      title: "Secret Behind Lionel Messi's Success",
      category: "Sports Legends & Mindset",
      thumbnail: "https://images.unsplash.com/photo-1667983091531-72affee1bf69?w=800",
      featured: true,
    },
    {
      id: 4,
      title: "Inside The Life Of Cristiano Ronaldo",
      category: "Celebrity Lifestyle & Fame",
      thumbnail: "https://images.unsplash.com/photo-1649771543037-916e2702008a?w=800",
      featured: true,
    },
    {
      id: 5,
      title: "The Case of The Silk Road",
      category: "Secrets, Crime & Dark Stories",
      thumbnail: "https://images.unsplash.com/photo-1605360846282-023d330bad8d?w=800",
      featured: true,
    },
    {
      id: 6,
      title: "Dark Side of Dubai",
      category: "Secrets, Crime & Dark Stories",
      thumbnail: "https://images.unsplash.com/photo-1743819479509-d7b90fee1e33?w=800",
      featured: true,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="portfolio" className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.03),transparent_60%)]" />
      
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
              Featured Work
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
              SELECTED
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent">
              PROJECTS
            </span>
          </h2>
          
          <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            High-retention videos that captivate millions.
            <br />
            <span className="text-white">Every frame tells a story.</span>
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative"
            >
              {/* Card container */}
              <div className="relative bg-slate-900/50 rounded-lg overflow-hidden border border-slate-800 hover:border-transparent transition-all duration-500">
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <motion.div
                    animate={{
                      scale: hoveredId === project.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <ImageWithFallback
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  
                  {/* Play button */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: hoveredId === project.id ? 1 : 0,
                      scale: hoveredId === project.id ? 1 : 0.8,
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="bg-gradient-to-r from-cyan-500 to-red-500 p-6 rounded-full shadow-2xl shadow-cyan-500/50">
                      <Play size={36} fill="white" className="text-white" />
                    </div>
                  </motion.div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-xs text-cyan-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-xl mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-red-400 group-hover:bg-clip-text transition-all duration-300"
                    style={{ fontWeight: 600 }}
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Glow border on hover */}
                <motion.div
                  animate={{
                    opacity: hoveredId === project.id ? 1 : 0,
                  }}
                  className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-red-500 rounded-lg -z-10 blur-md"
                />
              </div>

              {/* Lift effect */}
              <motion.div
                animate={{
                  y: hoveredId === project.id ? -8 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 -z-20"
              />
            </motion.div>
          ))}
        </div>

        {/* View Full Portfolio CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#full-portfolio"
            className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 border-2 border-slate-700 hover:border-cyan-500 rounded-lg transition-all duration-300 group shadow-lg hover:shadow-cyan-500/30 hover:scale-105"
          >
            <span className="text-xl uppercase tracking-wider" style={{ fontWeight: 700 }}>
              View Full Portfolio
            </span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight className="text-cyan-400" size={24} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

