import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../../components/shared/PageHero";
import SectionHeading from "../../components/shared/SectionHeading";

const commitments = [
  {
    title: "Responsible Sourcing",
    description: "We partner exclusively with manufacturers who demonstrate strong environmental responsibility — prioritising suppliers with certified sustainable supply chains and ethical manufacturing practices.",
  },
  {
    title: "Waste Reduction",
    description: "TOPAZ operates a strict waste reduction policy across all project sites. Redundant equipment is responsibly recycled or repurposed, and packaging waste is minimised at every stage.",
  },
  {
    title: "Energy-Efficient Solutions",
    description: "We design AV systems with energy efficiency in mind, specifying low-power displays, intelligent control systems, and automated standby scheduling to reduce our clients' carbon footprints.",
  },
  {
    title: "Longevity by Design",
    description: "Our service and maintenance contracts extend the operational lifespan of technology assets, reducing unnecessary replacement cycles and the associated environmental impact.",
  },
  {
    title: "Digital-First Operations",
    description: "We minimise paper consumption across our business through digital project management, documentation, and reporting — reducing our operational footprint year on year.",
  },
  {
    title: "Community & Social Value",
    description: "TOPAZ is committed to contributing positively to the communities in which we operate — supporting local employment, fair pay, and inclusive workplace practices.",
  },
];

export default function Sustainability() {
  return (
    <>
      <PageHero
        badge="Sustainability"
        title="Our Commitment to a Sustainable Future"
        description="At TOPAZ Technology Group, we believe that delivering exceptional technology and doing right by the environment are not mutually exclusive. Sustainability is built into how we work."
        image="https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/e20075ced_generated_8a5c251c.png"
      />

      {/* Our Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 font-body bg-primary/10 text-primary">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Innovation with Purpose
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                At TOPAZ Technology Group, our core values are built around innovation with purpose. We develop forward-thinking technology solutions with a strong focus on sustainability and energy efficiency, helping our customers reduce environmental impact while improving performance and long-term value.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                We also believe our people are our greatest strength, which is why we invest heavily in developing our workforce through structured training, upskilling, and continuous learning. We are committed to building a diverse and inclusive culture where different perspectives are valued and everyone has the opportunity to succeed.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Through apprenticeships, work experience placements, and community partnerships, we support emerging talent and help shape the next generation of skilled technology professionals.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src="https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/713e0d4ae_generated_89c8ed89.png"
                alt="Sustainable AV solutions"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nurturing Talent */}
      <section className="py-16 bg-[#e3dfd7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Nurturing the Next Generation</h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                We actively nurture the next generation of AV professionals through:
              </p>
              <ul className="space-y-3">
                {[
                  "Graduate programmes and apprenticeships",
                  "Work placements and mentoring",
                  "A structured fast-track career acceleration scheme for high-performing individuals",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-foreground/80">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#637480] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-white rounded-2xl border border-[#cdc9c0]"
            >
              <p className="text-lg font-heading font-semibold text-foreground leading-relaxed">
                "We are committed to building a diverse and inclusive culture where different perspectives are valued and everyone has the opportunity to succeed."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            badge="Our Commitments"
            title="What We Stand For"
            description="Six principles that guide how TOPAZ approaches sustainability across our business and client projects."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commitments.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-8 rounded-2xl border border-[#cdc9c0] hover:border-[#637480]/40 hover:shadow-lg transition-all duration-300 ${i % 2 === 1 ? "bg-[#637480]" : "bg-[#e3dfd7]"}`}
              >
                <h3 className={`text-lg font-heading font-semibold mb-3 ${i % 2 === 1 ? "text-white" : "text-foreground"}`}>{item.title}</h3>
                <p className={`text-sm font-body leading-relaxed ${i % 2 === 1 ? "text-white/70" : "text-muted-foreground"}`}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#637480]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Let's Build Something That Lasts
          </h2>
          <p className="text-lg text-primary-foreground/70 font-body mb-8">
            Talk to our team about how we can deliver a sustainable, future-proof AV solution for your organisation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold font-body hover:bg-white/90 transition-all shadow-xl group"
          >
            Get in Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}