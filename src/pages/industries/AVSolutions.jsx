import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../../components/shared/PageHero";
import SectionHeading from "../../components/shared/SectionHeading";

const sectors = [
  {
    title: "Corporate Offices",
    description: "From boardrooms to open-plan collaboration zones, we design and install AV systems that empower teams to communicate clearly and work efficiently — whether in the office or remote.",
  },
  {
    title: "Multi-Tenant Buildings",
    description: "We deliver scalable, tenant-ready AV infrastructure for commercial landlords. Systems are designed to accommodate multiple occupiers with flexible, future-proof technology.",
  },
  {
    title: "Public Sector & Education",
    description: "TOPAZ supports public sector organisations with compliant, robust AV solutions — from lecture theatres and training rooms to council chambers and civic spaces.",
  },
  {
    title: "Retail & Hospitality",
    description: "Engaging digital experiences for retail environments, hotels, restaurants and venues — including digital signage, background audio, and guest-facing display systems.",
  },
  {
    title: "Healthcare Facilities",
    description: "Purpose-built AV solutions for clinical and administrative environments, including patient information systems, staff communication, and secure video conferencing.",
  },
  {
    title: "Industrial & Warehousing",
    description: "Robust AV and UC solutions designed to work in demanding environments — PA systems, display technology, and communications for operations teams.",
  },
];

const capabilities = [
  {
    title: "Video Conferencing",
    description: "Microsoft Teams Rooms, Zoom Rooms, and bespoke VC setups certified and installed by our accredited engineers.",
  },
  {
    title: "Digital Displays",
    description: "Commercial-grade screens, video walls, and LED installations for boardrooms, lobbies, and large-format applications.",
  },
  {
    title: "Audio Solutions",
    description: "From ceiling microphone arrays to distributed speaker systems, we deliver crystal-clear audio for any environment.",
  },
  {
    title: "AV over IP",
    description: "Future-ready matrix switching and AV signal distribution over standard IT networks using Crestron, Extron, and Lightware.",
  },
];

export default function AVSolutions() {
  return (
    <>
      <PageHero
        badge="Industries"
        title="AV Solutions Across Every Sector"
        description="Topaz Technology Group delivers enterprise-grade audio visual solutions to organisations across the UK and internationally — from fit-out to ongoing support."
        image="https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/e20075ced_generated_8a5c251c.png"
      />

      {/* Intro */}
      <section className="py-24 bg-[#e3dfd7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-6 font-body">
                Who We Serve
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6 leading-tight">
                Trusted by leading Organisations Around The World
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                With over 21 years of experience and 3,000+ projects delivered, TOPAZ Technology Group has established itself as a leading provider of commercial AV and unified communications solutions. We work with organisations of all sizes — from SMEs fitting out their first meeting room to global enterprises rolling out AV across an entire portfolio.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                Our team of certified engineers and project managers ensure every installation meets the highest standards of quality, reliability, and user experience. We are proud members of Edge AV and hold Safe Contractor approval.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#637480] text-white rounded-full font-medium font-body hover:bg-[#526370] transition-all shadow-xl group"
              >
                Speak to Our Team
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/713e0d4ae_generated_89c8ed89.png"
                alt="Professional AV installation"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            badge="Sectors"
            title="Industries We Serve"
            description="We have delivered AV and UC solutions across a broad range of sectors, bringing specialist knowledge and proven methodologies to every project."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, i) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`p-8 rounded-2xl border border-[#cdc9c0] hover:shadow-lg hover:border-primary/30 transition-all duration-300 ${i % 2 === 1 ? "bg-[#637480]" : "bg-[#e3dfd7]/40"}`}
              >
                <h3 className={`text-lg font-heading font-semibold mb-2 ${i % 2 === 1 ? "text-white" : "text-foreground"}`}>{sector.title}</h3>
                <p className={`text-sm font-body leading-relaxed ${i % 2 === 1 ? "text-white/70" : "text-muted-foreground"}`}>{sector.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-[#637480]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            badge="Capabilities"
            title="What We Deliver"
            description="Our full-service approach covers everything from initial consultation and system design through to installation, commissioning, and long-term support."
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all"
              >
                <h3 className="text-lg font-heading font-semibold text-white mb-2">{cap.title}</h3>
                <p className="text-white/60 text-sm font-body leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#e3dfd7]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-muted-foreground font-body mb-8">
              Contact our team today to discuss your project requirements and discover how TOPAZ can deliver the right AV solution for your organisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#637480] text-white rounded-full font-semibold font-body hover:bg-[#526370] transition-all shadow-xl group"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/solutions/design"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#637480] border border-[#cdc9c0] rounded-full font-semibold font-body hover:bg-[#e3dfd7] transition-all"
              >
                View Our Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}