import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";

// To change accreditation images, update the `image` URL for each entry below.
const accreditations = [
  {
    image: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/cc12dce27_CTS-D.png",
    title: "CTS-D Certified",
    description: "AVIXA Certified Technology Specialist – Design",
  },
  {
    image: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/f89291428_SafeCon.png",
    title: "Safe Contractor",
    description: "Safe Contractor Approved for health and safety compliance",
  },
  {
    image: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/f2ae317ab_AvixaMember.png",
    title: "AVIXA Member",
    description: "Active member of the Audiovisual and Integrated Experience Association",
  },
  {
    image: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/13e79736c_edgeAV.jpg",
    title: "Edge AV Member",
    description: "Recognized for excellence in delivering cutting-edge AV solutions and exceptional customer service",
  },
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
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <img
                  src={acc.image}
                  alt={acc.title}
                  className={`object-contain ${acc.title === "Edge AV Member" ? "w-full h-full" : "max-w-full max-h-full"}`}
                />
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