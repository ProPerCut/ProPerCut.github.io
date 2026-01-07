import { motion } from "motion/react";
import { Mail, Send, User, FileText, Facebook, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

export function ContactPremium() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", project: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61585959697232",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hasan-abdullah-0963473a3",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Twitter,
      label: "X (Twitter)",
      href: "https://x.com/propercutforyou",
      color: "from-slate-700 to-slate-800",
    },
  ];

  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-b from-slate-950 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(239,68,68,0.06),transparent_50%)]" />

      <div className="container mx-auto max-w-6xl relative z-10">
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
              Let's Connect
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
              BUILD
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent">
              SOMETHING CINEMATIC
            </span>
          </h2>

          <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to create high-retention content?
            <br />
            <span className="text-white">Let's talk.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form - Takes 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-gradient-to-br from-slate-900/80 to-black p-8 md:p-12 rounded-2xl border-2 border-slate-800 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm mb-3 text-slate-300 flex items-center gap-2 uppercase tracking-wider"
                  >
                    <User size={18} className="text-cyan-400" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/60 border-2 border-slate-700 focus:border-cyan-500 rounded-lg px-6 py-4 focus:outline-none transition-all duration-300 text-white placeholder-slate-500 text-lg"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-3 text-slate-300 flex items-center gap-2 uppercase tracking-wider"
                  >
                    <Mail size={18} className="text-cyan-400" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/60 border-2 border-slate-700 focus:border-cyan-500 rounded-lg px-6 py-4 focus:outline-none transition-all duration-300 text-white placeholder-slate-500 text-lg"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Project Details Field */}
                <div>
                  <label
                    htmlFor="project"
                    className="block text-sm mb-3 text-slate-300 flex items-center gap-2 uppercase tracking-wider"
                  >
                    <FileText size={18} className="text-cyan-400" />
                    Project Details
                  </label>
                  <textarea
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-black/60 border-2 border-slate-700 focus:border-cyan-500 rounded-lg px-6 py-4 focus:outline-none transition-all duration-300 text-white placeholder-slate-500 resize-none text-lg"
                    placeholder="Tell me about your project, goals, timeline, and budget..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={submitted}
                  whileHover={{ scale: submitted ? 1 : 1.02 }}
                  whileTap={{ scale: submitted ? 1 : 0.98 }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-red-500 hover:from-cyan-400 hover:to-red-400 disabled:from-green-500 disabled:to-green-600 px-8 py-5 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70"
                >
                  {submitted ? (
                    <span className="text-xl uppercase tracking-wider" style={{ fontWeight: 700 }}>
                      ✓ Message Sent!
                    </span>
                  ) : (
                    <>
                      <Send size={24} />
                      <span className="text-xl uppercase tracking-wider" style={{ fontWeight: 700 }}>
                        Send Message
                      </span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Email Card */}
            <div className="bg-gradient-to-br from-slate-900/80 to-black p-8 rounded-2xl border-2 border-slate-800">
              <Mail size={32} className="text-cyan-400 mb-4" />
              <h3 className="text-xl mb-2" style={{ fontWeight: 700 }}>
                Email Me
              </h3>
              <a
                href="mailto:propercutforyou@gmail.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg break-all"
              >
                propercutforyou@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-slate-900/80 to-black p-8 rounded-2xl border-2 border-slate-800">
              <h3 className="text-xl mb-6" style={{ fontWeight: 700 }}>
                Connect on Social
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 5 }}
                    className={`flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r ${social.color} hover:shadow-lg transition-all duration-300`}
                  >
                    <social.icon size={24} />
                    <span style={{ fontWeight: 600 }}>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="bg-gradient-to-br from-green-900/20 to-black p-6 rounded-2xl border-2 border-green-500/30">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 uppercase tracking-wider text-sm" style={{ fontWeight: 700 }}>
                  Available Now
                </span>
              </div>
              <p className="text-slate-400 text-sm">
                Taking on new projects. Response within 24 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

