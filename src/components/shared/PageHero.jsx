import React from "react";
import { motion } from "framer-motion";

export default function PageHero({ badge, title, description, image }) {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          {badge && (
            <span className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-sm text-primary-foreground rounded-full text-xs font-semibold uppercase tracking-wider mb-6 font-body">
              {badge}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-white/70 font-body leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}