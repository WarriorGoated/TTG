import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../../components/shared/PageHero";
import SectionHeading from "../../components/shared/SectionHeading";

const slaTable = [
  { feature: "Phone Response", premium: "2 Hours", expedited: "2 Hours" },
  { feature: "On Site Call Out", premium: "24 Hours", expedited: "4 Hours" },
  { feature: "Call Outs P/A", premium: "Unlimited", expedited: "Unlimited" },
  { feature: "Preventative Maintenance Visits", premium: "2", expedited: "4" },
];

const smaFeatures = [
  { title: "Guaranteed SLA", desc: "Guarantees support availability per your agreed service level." },
  { title: "No Surprise Costs", desc: "Avoids unbudgeted call-out costs with fixed contract pricing." },
  { title: "Proactive Maintenance", desc: "Increases lifespan of equipment through preventative maintenance visits." },
  { title: "Fast Response", desc: "Ensures minimum downtime with industry-leading response times." },
  { title: "Performance Reports", desc: "Detailed service reports with SLA performance metrics and insights." },
  { title: "24/5 Help Desk", desc: "Global help desk support available around the clock, five days a week." },
];

export default function ServiceMaintenance() {
  return (
    <>
      <PageHero
        badge="AV Solutions"
        title="Service & Maintenance"
        description="Comprehensive support and maintenance services to keep your systems running smoothly, with fast response times and expert technical assistance."
        image="https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/898af141a_generated_b3a48ee0.png"
      />

      {/* SMA Benefits */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            badge="Our Contracts"
            title="Service & Maintenance Agreements"
            description="Peace of mind with comprehensive contracts designed to keep your systems at peak performance."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {smaFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-8 rounded-2xl border border-[#cdc9c0] hover:border-[#637480]/40 hover:shadow-lg transition-all duration-300 ${i % 2 === 1 ? "bg-[#637480]" : "bg-[#e3dfd7]"}`}
              >
                <h3 className={`text-lg font-heading font-semibold mb-2 ${i % 2 === 1 ? "text-white" : "text-foreground"}`}>{feat.title}</h3>
                <p className={`text-sm font-body leading-relaxed ${i % 2 === 1 ? "text-white/70" : "text-muted-foreground"}`}>{feat.desc}</p>
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
            Our <span className="font-semibold text-foreground">24/5 global help desk</span> and field-based engineers provide rapid, expert support — with unlimited call-outs available on both Premium and Expedited service tiers.
          </motion.p>
        </div>
      </section>

      {/* SLA Table */}
      <section className="py-24 bg-[#e3dfd7] border-y border-[#cdc9c0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading
            title="Service Level Comparison"
            description="Choose the support tier that fits your business requirements."
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-[#cdc9c0] overflow-hidden"
          >
            <div className="grid grid-cols-3 bg-primary text-primary-foreground font-heading font-semibold text-sm">
              <div className="p-5">Service Level</div>
              <div className="p-5 text-center">Premium</div>
              <div className="p-5 text-center">Expedited</div>
            </div>
            {slaTable.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-white" : "bg-[#f5f2ee]"}`}>
                <div className="p-5 font-medium font-body text-foreground">{row.feature}</div>
                <div className="p-5 text-center font-body text-muted-foreground">{row.premium}</div>
                <div className="p-5 text-center font-body text-muted-foreground">{row.expedited}</div>
              </div>
            ))}
            <div className="p-5 bg-primary/5 text-sm text-muted-foreground font-body text-center border-t border-border">
              Custom solutions available — we can design a service package tailored to your exact requirements.
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Excellence */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Exceptional Service Support
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                At TOPAZ, we pride ourselves on delivering exceptional response times, regardless of your SLA. Our dedicated service team is committed to providing rapid, efficient support whenever you need it most.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                With comprehensive coverage across London and the UK, our team of certified technicians is always within reach. We understand that technical issues can arise at any time, which is why we offer flexible support options.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                Every service call is meticulously documented, and we provide detailed service reports along with SLA performance reports for complete transparency.
              </p>
              <Link
                to="/support"
                className="inline-flex items-center gap-2 text-primary font-medium font-body hover:gap-3 transition-all"
              >
                Visit Support Center <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden"
            >
              <img src="https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/898af141a_generated_b3a48ee0.png" alt="Service engineer" className="w-full h-[400px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#637480]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Keep Your Systems Running at Peak Performance
          </h2>
          <p className="text-lg text-primary-foreground/70 font-body mb-8">
            Speak to our team about a tailored service and maintenance contract.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold font-body hover:bg-white/90 transition-all shadow-xl group"
            >
              Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/support"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/30 rounded-full font-medium font-body hover:bg-white/20 transition-all"
            >
              Support Center
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}