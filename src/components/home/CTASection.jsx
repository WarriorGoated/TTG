import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-[#637480]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-primary-foreground/70 font-body leading-relaxed mb-10 max-w-2xl mx-auto">
            Let our team of experts design a bespoke AV solution tailored to your business needs. Get in touch today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#637480] rounded-full font-semibold font-body hover:bg-white/90 transition-all shadow-xl group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about/why-topaz"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/30 rounded-full font-medium font-body hover:bg-white/20 transition-all"
            >
              Learn About Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}