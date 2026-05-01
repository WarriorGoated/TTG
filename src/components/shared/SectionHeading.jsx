import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ badge, title, description, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 font-body ${
          light ? "bg-white/10 text-white/80" : "bg-primary/10 text-primary"
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-4 ${
        light ? "text-white" : "text-foreground"
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg font-body leading-relaxed ${
          light ? "text-white/70" : "text-muted-foreground"
        }`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}