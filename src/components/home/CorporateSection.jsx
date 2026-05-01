import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, Users, Landmark, Cpu, ArrowRight } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";

const features = [
  {
    icon: Building2,
    title: "Enterprise-Grade",
    description: "Reliable AV for large-scale deployments with enterprise-level support and 24/7 monitoring.",
  },
  {
    icon: Users,
    title: "Multi-Tenant",
    description: "Scalable solutions designed specifically for shared spaces and co-working environments.",
  },
  {
    icon: Landmark,
    title: "Landlord Solutions",
    description: "Future-proof building infrastructure with flexible, tenant-ready AV systems.",
  },
  {
    icon: Cpu,
    title: "Smart Integration",
    description: "Seamless technology ecosystems that connect all your AV and IT infrastructure.",
  },
];

export default function CorporateSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/e20075ced_generated_8a5c251c.png"
          alt="Corporate building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#637480]/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="Corporate AV"
          title="Solutions Built for Enterprise"
          description="Professional audio-visual solutions designed for enterprise environments, commercial landlords, and multi-tenanted buildings."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <feat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-white mb-2">{feat.title}</h3>
              <p className="text-white/50 text-sm font-body leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium font-body hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 group"
          >
            Get a Custom Solution
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}