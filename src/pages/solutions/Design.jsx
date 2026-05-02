import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../../components/shared/PageHero";
import SectionHeading from "../../components/shared/SectionHeading";

const designProcess = [
  { title: "Consultation", description: "We meet with your stakeholders to understand your vision, workflow, and technical requirements." },
  { title: "Site Survey", description: "Our engineers conduct comprehensive surveys to assess space, infrastructure, and environmental factors." },
  { title: "System Design", description: "CTS-D certified designers create detailed schematics, equipment schedules, and system architecture documents." },
  { title: "3D Visualisation", description: "Interactive 3D models let you visualise the end result before any equipment is ordered or installed." },
  { title: "Documentation", description: "Complete technical documentation including rack layouts, cable schedules, and integration specifications." },
  { title: "Design Review", description: "Collaborative review sessions ensure every detail aligns with your objectives before we proceed." },
];

const capabilities = [
  "Meeting room and boardroom AV design",
  "Large-scale auditorium and event space solutions",
  "Video conferencing and unified communications",
  "Digital signage and LED wall solutions",
  "Control system programming and automation",
  "Network infrastructure for AV over IP",
  "Multi-tenant building technology planning",
  "Acoustic consultation and treatment design",
];

export default function Design() {
  return (
    <>
      <PageHero
        badge="AV Solutions"
        title="Design Services"
        description="From concept to completion, our CTS-D certified design team delivers custom technology solutions tailored to your exact requirements and specifications."
        image="https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/713e0d4ae_generated_89c8ed89.png"
      />

      {/* Design Process */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            badge="Our Process"
            title="How We Design"
            description="A meticulous, structured approach to creating the perfect AV environment for your business."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {designProcess.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-8 rounded-2xl border border-[#cdc9c0] hover:border-[#637480]/40 hover:shadow-lg transition-all duration-300 ${i % 2 === 1 ? "bg-[#637480]" : "bg-[#e3dfd7]"}`}
              >
                <span className={`text-xs font-bold font-body block mb-3 ${i % 2 === 1 ? "text-white/50" : "text-primary/50"}`}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={`text-lg font-heading font-semibold mb-2 ${i % 2 === 1 ? "text-white" : "text-foreground"}`}>{step.title}</h3>
                <p className={`text-sm font-body leading-relaxed ${i % 2 === 1 ? "text-white/70" : "text-muted-foreground"}`}>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Did You Know */}
      <section className="py-16 bg-[#e3dfd7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl font-body text-foreground/70 max-w-3xl mx-auto leading-relaxed"
          >
            Every TOPAZ design is produced by our<span className="font-semibold text-foreground"> qualified solutions architects</span>. We've delivered over <span className="font-semibold text-foreground">3,000 projects</span> across the UK and internationally.
          </motion.p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-[#e3dfd7] border-y border-[#cdc9c0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 font-body bg-primary/10 text-primary">
                Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                What We Design
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                Our design team has extensive experience across all AV disciplines, from intimate huddle spaces to sprawling enterprise campus deployments.
              </p>
              <ul className="space-y-3">
                {capabilities.map((cap) => (
                  <li key={cap} className="flex items-center gap-3 text-foreground font-body text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {cap}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* ⭐ FIXED IMAGE BELOW */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src="/AV-Design.jpg"   // <-- your correct photo here
                alt="AV Design work"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#637480]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Start Your Design Project?
          </h2>
          <p className="text-lg text-primary-foreground/70 font-body mb-8">
            Let our CTS-D certified design team create a bespoke AV solution for your space.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold font-body hover:bg-white/90 transition-all shadow-xl group"
          >
            Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
