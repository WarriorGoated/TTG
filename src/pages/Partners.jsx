import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";

const partnerCategories = [
  {
    category: "Unified Communications & Video Conferencing",
    partners: [
      { name: "Microsoft Teams", type: "Unified Communications", logo: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/08af5a62f_Microsoft_Office_Teams_Logo_512px.png" },
      { name: "Zoom", type: "Video Conferencing", logo: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/07b5f8387_Zoom-Logo-2014.png" },
      { name: "Google Meet", type: "Video Conferencing", logo: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/20c9fe6f6_Google-Meet-Symbol.png" },
      { name: "Pexip", type: "Video Interoperability", logo: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/5d9c74be0_Pexip_logosvg.png" },
      { name: "Cisco", type: "Collaboration", logo: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/8350124bd_Cisco_logo_blue_2016svg.png" },
    ],
  },
  {
    category: "Commercial Displays",
    partners: [
      { name: "LG", type: "Commercial Displays", logo: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/1a4313f86_LG_logo_2014svg.png" },
      { name: "Samsung", type: "Commercial Displays", logo: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/c661cd410_dc36c1d02dfe2ec192b7ec6d2289cb2d.png" },
      { name: "Hisense", type: "Commercial Displays", logo: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/7742d5d2a_hisense-logo-png_seeklogo-449490.png" },
      { name: "Sony", type: "Professional Displays", logo: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/e9573afcf_sony-logo-png-transparent.png" },
      { name: "Iiyama", type: "Commercial Displays", logo: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/82bca2d6f_Iiyama_logosvg.png" },
    ],
  },
  {
    category: "Audio Solutions",
    partners: [
      { name: "QSC", type: "Audio & Control", logo: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/26c0673a4_qsc-logo.png" },
      { name: "Biamp", type: "Audio Processing", logo: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/d036ce294_hi-resolution-biamp-logo.png" },
      { name: "Shure", type: "Audio Solutions", logo: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/09b8c101a_Shure_Logosvg.png" },
      { name: "Sennheiser", type: "Audio Solutions", logo: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/227872e48_Sennheiser_Logo.png" },
    ],
  },
  {
    category: "LED Technology",
    partners: [
      { name: "Unilumin", type: "LED Technology", logo: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/3656c1dbc_Unilumin-500x500.png" },
      { name: "Leyard", type: "LED Displays", logo: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/f2ad055af_dual-vertical-full-color-1-01-1.png" },
      { name: "Hisense", type: "LED Displays", logo: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/7742d5d2a_hisense-logo-png_seeklogo-449490.png" },
    ],
  },
  {
    category: "Video Conferencing Devices",
    partners: [
      { name: "Logitech", type: "Video Conferencing", logo: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/3a0282d66_Logitech_logosvg.png" },
      { name: "Poly", type: "Audio & Video", logo: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/af0b7204b_logoPoly.png" },
      { name: "Yealink", type: "Video Conferencing", logo: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/45b90b943_Yealink_logo.png" },
      { name: "Neat", type: "Video Devices", logo: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/19cab7dd9_neat-logo-vector.png" },
    ],
  },
  {
    category: "AV over IP & Control",
    partners: [
      { name: "QSC / Q-SYS", type: "AV over IP", logo: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/26c0673a4_qsc-logo.png" },
      { name: "Blustream", type: "AV over IP", logo: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/9baa9f54e_Blustream_pzBdeJG.png" },
      { name: "Inogeni", type: "Video Connectivity", logo: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/6a0ccadef_Inogen-Logo-PNG-SVG-Vector-01.png" },
      { name: "Lightware", type: "AV over IP", logo: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/ce230ad5d_lightware-logo-png-transparent.png" },
      { name: "Extron", type: "AV Control", logo: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/984f49f49_Extron-Logo.png" },
      { name: "Crestron", type: "AV Control", logo: "https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/afc0814d0_image.png" },
    ],
  },
];

function getInitials(name) {
  return name.split(" ").map(w => w[0]).join("").slice(0, 2);
}

function PartnerLogo({ partner }) {
  const [imgError, setImgError] = useState(false);
  if (partner.logo && !imgError) {
    return (
      <div className="h-14 flex items-center justify-center mb-3">
        <img
          src={partner.logo}
          alt={`${partner.name} logo`}
          className="max-h-10 max-w-[110px] w-auto object-contain"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }
  return (
    <div className="h-14 flex items-center justify-center mb-3">
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-heading font-bold text-lg">
        {getInitials(partner.name)}
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <>
      <PageHero
        badge="Technology Partners"
        title="Our Technology Partners"
        description="We collaborate with the world's leading manufacturers and technology providers to deliver exceptional AV and UC solutions."
        image="https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/8c1ee1ad7_generated_692ce45d.png"
      />

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {partnerCategories.map((cat, catIdx) => (
            <div key={cat.category} className="mb-16 last:mb-0">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xl font-heading font-bold text-foreground mb-8 pb-4 border-b border-border"
              >
                {cat.category}
              </motion.h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {cat.partners.map((partner, i) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group p-6 bg-white rounded-2xl border border-[#cdc9c0] hover:border-[#637480]/40 hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <PartnerLogo partner={partner} />
                    <h4 className="font-heading font-semibold text-foreground text-sm mb-1">
                      {partner.name}
                    </h4>
                    <p className="text-xs text-muted-foreground font-body">{partner.type}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Highlight strip */}
      <section className="py-16 bg-[#e3dfd7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl font-body text-[#637480] max-w-3xl mx-auto leading-relaxed"
          >
            We work exclusively with <span className="font-semibold text-[#637480]">industry-leading manufacturers</span> — ensuring every solution we deliver is built on proven, enterprise-grade technology that you can trust.
          </motion.p>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-24 bg-[#637480]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Become a Partner
            </h2>
            <p className="text-lg text-primary-foreground/70 font-body mb-8">
              Interested in partnering with TOPAZ? Let's explore how we can work together to deliver exceptional technology solutions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold font-body hover:bg-white/90 transition-all shadow-xl group"
            >
              Contact Our Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}