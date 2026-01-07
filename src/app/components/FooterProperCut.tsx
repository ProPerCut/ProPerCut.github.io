import { motion } from "motion/react";
import { Youtube, Instagram, Twitter, Linkedin, Mail, Facebook } from "lucide-react";

export function FooterProperCut() {
  const socialLinks = [
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61585959697232", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/propercutforyou", label: "X (Twitter)" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/hasan-abdullah-0963473a3", label: "LinkedIn" },
    { icon: Mail, href: "mailto:propercutforyou@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-black border-t border-slate-800 py-16 px-6 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(239,68,68,0.03),transparent_50%)]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col items-center gap-10">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl tracking-wider"
            style={{ fontWeight: 800 }}
          >
            Proper<span className="text-cyan-400">Cut</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.3, rotate: 5 }}
                className="text-slate-400 hover:text-cyan-400 transition-colors p-3 rounded-full hover:bg-slate-900"
                aria-label={social.label}
              >
                <social.icon size={26} />
              </motion.a>
            ))}
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 text-center max-w-2xl text-lg"
          >
            Crafting visual masterpieces that captivate and engage audiences worldwide.
            <br />
            <span className="text-cyan-400">Every frame. Every story. Perfectly cut.</span>
          </motion.p>

          {/* Divider */}
          <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-2"
          >
            <p className="text-slate-500 text-sm">
              <span className="text-white" style={{ fontWeight: 600 }}>ProperCut</span> © 2024 | propercut.github.io
            </p>
            <p className="text-slate-600 text-xs">
              Hasan Abdullah - Professional Video Editor & Storyteller
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
