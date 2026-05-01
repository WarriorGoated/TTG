import React from "react";
import { motion } from "framer-motion";
import { Award, Shield, Star, Gem } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";

const accreditations = [
  { icon: Award, title: "CTS-D Certified", description: "AVIXA Certified Technology Specialist – Design" },
  { icon: Shield, title: "Safe Contractor", description: "Safe Contractor Approved for health and safety compliance" },
  { icon: Star, title: "AVIXA Member", description: "Active member of the Audiovisual and Integrated Experience Association" },
  { icon: Gem, title: "Edge AV Member", description: "Recognized for excellence in delivering cutting-edge AV solutions and exceptional customer service" },
];

export default function AccreditationsSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#e3dfd7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="Accreditations"
          title="Trusted & Recognized"
          description="Industry-certified and recognized for excellence in AV solutions."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accreditations.map((acc, i) => (
            <motion.div
              key={acc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8 bg-white rounded-2xl border border-[#cdc9c0] hover:border-[#637480]/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <acc.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{acc.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{acc.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}