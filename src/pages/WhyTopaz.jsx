import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/shared/PageHero";
import StatCounter from "../components/shared/StatCounter";
import SectionHeading from "../components/shared/SectionHeading";

const steps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "We begin by deeply understanding your unique challenges, objectives, and technical requirements through comprehensive discovery sessions.",
  },
  {
    step: "02",
    title: "Strategic Design",
    description: "Our experts create tailored AV solutions that align with your business goals, budget, and technical environment.",
  },
  {
    step: "03",
    title: "Precision Implementation",
    description: "Our certified technicians execute flawless installations with minimal disruption to your operations.",
  },
  {
    step: "04",
    title: "Rigorous Testing",
    description: "Every system undergoes comprehensive testing to ensure optimal performance, reliability, and user experience.",
  },
  {
    step: "05",
    title: "Ongoing Support",
    description: "Our 24/5 global help desk and proactive maintenance ensure your systems remain at peak performance.",
  },
];

const strengths = [
  {
    title: "In-House Technical Capability",
    body: "TOPAZ operates with a fully in-house delivery model, unlike many integrators who rely heavily on subcontracted design and engineering resource. Our in-house team covers technical design and engineering, project management, installation and commissioning, control systems and software, and service and maintenance — ensuring consistency, accountability and quality control across every stage of delivery.",
  },
  {
    title: "Consultative, Design-Led Approach",
    body: "We take a consultative approach to every project, focusing on how technology supports people, spaces and operations — not just hardware specification. Solutions are designed around user experience and ease of operation, operational efficiency and supportability, and long-term flexibility and scalability.",
  },
  {
    title: "International Reach",
    body: "We have been working on an international level for over 20 years deploying projects around the world and we have been recognised by EDGE as one of the leading UK Integrators. EDGE selects the best integrators from around the world, audits and critiques them, then invites the best to work collectively on an international scale — this gives us global capability to deploy and support around the world.",
  },
  {
    title: "Partnership-Focused Delivery",
    body: "TOPAZ is committed to building long-term partnerships with our customers delivering real value due to the mutual trust that is built. It allows us to go further and deliver whatever is needed whenever it is needed in the spirit of the partnership rather than it being a transactional supplier relationship. This is a core value of our entire business and we are proud to still work with customers today that we started working with 20 years ago — a testament to our approach.",
  },
  {
    title: "Investing in People and Future Talent",
    body: "We actively nurture the next generation of AV professionals through graduate programmes and apprenticeships, work placements and mentoring, and a structured fast-track career acceleration scheme for high-performing individuals. This commitment has been recognised through our recent AV Awards 'Rising Star' finalist recognition, reinforcing our ability to attract, retain and develop top-tier talent.",
  },
  {
    title: "Manufacturer Partnerships & Commercial Transparency",
    body: "As a Yealink Gold Partner and LG Silver Partner, we maintain strong manufacturer relationships while remaining vendor-agnostic in technology selection. Our fixed-price delivery model avoids the 'change-order mentality' — our commercial approach prioritises clarity, predictability and value through robust upfront design and scoping.",
  },
];

export default function WhyTopaz() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="Why Choose TOPAZ Technology Group?"
        description="TOPAZ Technology Group is a design-led technology partner with over 20 years' experience delivering high-quality, future-ready workplace technology solutions for leading landlords, developers and corporate occupiers across the UK and internationally."
        image="https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/36d9858bb_generated_be132e42.png"
      />

      {/* Stats */}
      <section className="py-20 bg-white border-b border-[#cdc9c0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StatCounter />
        </div>
      </section>

      {/* About */}
      <section className="py-24 bg-[#e3dfd7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 font-body bg-primary/10 text-primary">
                About TOPAZ Technology Group
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                A Design-Led Technology Partner
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-5">
                TOPAZ Technology Group is a design-led technology partner with over 20 years' experience delivering high-quality, future-ready workplace technology solutions for leading landlords, developers and corporate occupiers across the UK and internationally.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-5">
                Founded in 2005, TOPAZ has built a strong reputation for consistent delivery, technical excellence and long-term partnership. We specialise in audio-visual systems integration, unified communications, video conferencing, collaboration technologies and digital signage, supporting projects from early consultancy and design through to installation, commissioning and ongoing service.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Our vision is to be recognised as an industry leader across workplace and collaboration technologies.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="p-8 bg-white rounded-2xl border border-[#cdc9c0]">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">Audio-Visual Division</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  Delivering integrated AV, UC and collaboration systems through strong partnerships with world-leading manufacturers.
                </p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-[#cdc9c0]">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">Digital Division</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  Operating as an OEM manufacturer, delivering patented, market-leading display technologies deployed globally at scale for some of the world's leading companies.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 lg:py-32 bg-[#e3dfd7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            badge="Our Methodology"
            title="The TOPAZ Approach"
            description="A proven framework that delivers exceptional results through innovation and precision."
          />

          <div className="max-w-3xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#637480] flex items-center justify-center text-white font-heading font-bold text-sm shadow-lg">
                    {step.step}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-[#cdc9c0] mt-2 mb-0 min-h-[2rem]" />
                  )}
                </div>
                <div className="pb-8 last:pb-0">
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
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

      {/* Experience & Strengths */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            badge="Experience & Strengths"
            title="What Sets Us Apart"
            description="Over 20 years of delivering exceptional technology solutions through in-house expertise, consultative design, and genuine partnership."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`p-10 rounded-2xl border border-[#cdc9c0] hover:border-[#637480]/40 hover:shadow-lg transition-all duration-300 ${i % 2 === 1 ? "bg-[#637480]" : "bg-[#e3dfd7]"}`}
              >
                <h3 className={`text-xl font-heading font-semibold mb-4 ${i % 2 === 1 ? "text-white" : "text-foreground"}`}>{s.title}</h3>
                <p className={`text-base font-body leading-relaxed ${i % 2 === 1 ? "text-white/70" : "text-muted-foreground"}`}>{s.body}</p>
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
            Trusted by organisations across the UK for over <span className="font-semibold text-foreground">20 years</span> — from single-room installs to complex, multi-site enterprise deployments. Our commitment is to deliver technology that simply works.
          </motion.p>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-24 lg:py-32 bg-[#e3dfd7] border-t border-[#cdc9c0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            badge="Accreditations"
            title="Trusted & Recognized"
            description="Industry-certified and recognized for excellence in AV solutions."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "CTS-D Certified", desc: "AVIXA Certified Technology Specialist – Design", image: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/cc12dce27_CTS-D.png" },
              { title: "Safe Contractor", desc: "Safe Contractor Approved for health and safety", image: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/f89291428_SafeCon.png" },
              { title: "AVIXA Member", desc: "Active AVIXA Association member", image: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/f2ae317ab_AvixaMember.png" },
              { title: "Edge AV Member", desc: "Excellence in cutting-edge AV solutions", image: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/13e79736c_edgeAV.jpg" },
            ].map((acc, i) => (
              <motion.div
                key={acc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-white rounded-2xl border border-[#cdc9c0] text-center"
              >
                <div className="w-20 h-20 flex items-center justify-center mx-auto mb-3">
                  <img src={acc.image} alt={acc.title} className={`object-contain ${acc.title === "Edge AV Member" ? "w-full h-full" : "max-w-full max-h-full"}`} />
                </div>
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