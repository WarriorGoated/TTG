import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Package, Truck, Wrench, CheckCircle, Monitor, Wifi, Shield, Clock } from "lucide-react";
import PageHero from "../../components/shared/PageHero";
import SectionHeading from "../../components/shared/SectionHeading";

const processSteps = [
  { icon: Package, title: "Procurement", description: "We source the best equipment from our extensive network of 25+ technology partners, ensuring quality and value." },
  { icon: Truck, title: "Logistics", description: "Coordinated delivery and staging to minimise disruption to your operations, with flexible scheduling options." },
  { icon: Wrench, title: "Installation", description: "Our certified technicians handle every aspect of installation, from cable management to final system integration." },
  { icon: CheckCircle, title: "Commissioning", description: "Comprehensive testing, configuration, and user training to ensure everything works perfectly from day one." },
];

const whatWeInstall = [
  { icon: Monitor, title: "Display Systems", desc: "LED walls, commercial displays, projectors, and interactive screens." },
  { icon: Wifi, title: "Conferencing", desc: "Video conferencing rooms, Microsoft Teams, Zoom, and Google Meet solutions." },
  { icon: Shield, title: "Control Systems", desc: "Crestron, Extron, and QSC control and automation systems." },
  { icon: Clock, title: "Audio", desc: "Professional sound systems, microphones, DSP, and acoustic solutions." },
];

export default function SupplyInstall() {
  return (
    <>
      <PageHero
        badge="AV Solutions"
        title="Supply & Install"
        description="We provide and install top-quality technology solutions, ensuring professional setup and configuration for optimal performance and reliability."
        image="https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/23ff73efd_generated_501bd931.png"
      />

      {/* Process */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            badge="Our Process"
            title="From Supply to Go-Live"
            description="A seamless, managed process from procurement through to final commissioning."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative p-8 bg-card rounded-2xl border border-border"
              >
                <span className="absolute top-4 right-4 text-5xl font-heading font-bold text-primary/5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
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
            With <span className="font-semibold text-foreground">25+ technology partners</span> and a team of certified engineers, TOPAZ delivers installations that are completed on time, on budget, and to the highest quality standards.
          </motion.p>
        </div>
      </section>

      {/* What We Install */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            badge="Capabilities"
            title="What We Supply & Install"
            description="Enterprise-grade equipment from the world's leading manufacturers."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whatWeInstall.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 bg-background rounded-2xl border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Topaz for Supply & Install */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden"
            >
              <img src="https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/23ff73efd_generated_501bd931.png" alt="AV Installation" className="w-full h-[400px] object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Why Choose TOPAZ?</h2>
              <ul className="space-y-4">
                {[
                  "3000+ projects successfully delivered",
                  "25+ industry-leading technology partners",
                  "CTS-D certified design and installation team",
                  "Minimal disruption to your daily operations",
                  "Full project management from start to finish",
                  "Comprehensive testing and quality assurance",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-body text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Need a Professional Installation?
          </h2>
          <p className="text-lg text-primary-foreground/70 font-body mb-8">
            From single meeting rooms to multi-site deployments, our team delivers flawless installations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold font-body hover:bg-white/90 transition-all shadow-xl group"
          >
            Request a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}