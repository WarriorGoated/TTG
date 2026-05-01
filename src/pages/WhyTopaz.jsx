import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, PenTool, Hammer, TestTube, Headphones, ArrowRight } from "lucide-react";
import PageHero from "../components/shared/PageHero";
import StatCounter from "../components/shared/StatCounter";
import SectionHeading from "../components/shared/SectionHeading";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery & Analysis",
    description: "We begin by deeply understanding your unique challenges, objectives, and technical requirements through comprehensive discovery sessions.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Strategic Design",
    description: "Our experts create tailored AV solutions that align with your business goals, budget, and technical environment.",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Precision Implementation",
    description: "Our certified technicians execute flawless installations with minimal disruption to your operations.",
  },
  {
    icon: TestTube,
    step: "04",
    title: "Rigorous Testing",
    description: "Every system undergoes comprehensive testing to ensure optimal performance, reliability, and user experience.",
  },
  {
    icon: Headphones,
    step: "05",
    title: "Ongoing Support",
    description: "Our 24/5 global help desk and proactive maintenance ensure your systems remain at peak performance.",
  },
];

export default function WhyTopaz() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="Why Choose TOPAZ Technology Group?"
        description="With over two decades of experience in the AV industry, TOPAZ Technology Group delivers innovative, reliable, and scalable technology solutions that transform the way businesses communicate and collaborate."
        image="https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/36d9858bb_generated_be132e42.png"
      />

      {/* Stats */}
      <section className="py-20 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StatCounter />
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            badge="Our Methodology"
            title="The TOPAZ Approach"
            description="A proven framework that delivers exceptional results through innovation and precision."
          />

          <div className="relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 relative z-10 border-4 border-background">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-primary font-body uppercase tracking-wider">
                    Step {step.step}
                  </span>
                  <h3 className="text-lg font-heading font-semibold text-foreground mt-2 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium font-body hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 group"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Highlight strip */}
      <section className="py-16 bg-[#e3dfd7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl font-body text-foreground/70 max-w-3xl mx-auto leading-relaxed"
          >
            Trusted by organisations across the UK for over <span className="font-semibold text-foreground">20 years</span> — from single-room installs to complex, multi-site enterprise deployments. Our commitment is to deliver technology that simply works.
          </motion.p>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-24 lg:py-32 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            badge="Accreditations"
            title="Trusted & Recognized"
            description="Industry-certified and recognized for excellence in AV solutions."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "CTS-D Certified", desc: "AVIXA Certified Technology Specialist – Design" },
              { title: "Safe Contractor", desc: "Safe Contractor Approved for health and safety" },
              { title: "AVIXA Member", desc: "Active AVIXA Association member" },
              { title: "Edge AV Member", desc: "Excellence in cutting-edge AV solutions" },
            ].map((acc, i) => (
              <motion.div
                key={acc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-background rounded-2xl border border-border text-center"
              >
                <h4 className="font-heading font-semibold text-foreground mb-1">{acc.title}</h4>
                <p className="text-xs text-muted-foreground font-body">{acc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}