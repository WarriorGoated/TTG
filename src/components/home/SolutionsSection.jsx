import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Pencil, Wrench, Settings, ArrowRight } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";

// IMPORTANT:
// - Put your videos in /public
// - Use correct filenames like "/AV-Design.mp4"
// - "image" MUST be a real image file (jpg/png/webp), NOT an mp4

const solutions = [
  {
    icon: Pencil,
    title: "Design",
    description:
      "From concept to completion, our design services deliver custom technology solutions tailored to your exact requirements and specifications.",
    href: "/solutions/design",
    video: "/Buildings.mp4", // <-- your real video file
    image: "/fallback-design.jpg", // <-- must be an image
  },
  {
    icon: Wrench,
    title: "Supply & Install",
    description:
      "We provide and install top-quality technology solutions, ensuring professional setup and configuration for optimal performance and reliability.",
    href: "/solutions/supply-install",
    video: "/ConstrctionVideo.mp4",
    image: "/fallback-install.jpg",
  },
  {
    icon: Settings,
    title: "Service & Maintenance",
    description:
      "Comprehensive support and maintenance services to keep your systems running smoothly, with fast response times and expert technical assistance.",
    href: "/solutions/service-maintenance",
    video: "/Video-Conferencing.mp4",
    image: "/fallback-service.jpg",
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          badge="Our Expertise"
          title="Comprehensive AV Solutions"
          description="We deliver cutting-edge technology integration services that transform spaces and enhance experiences. Our solutions are designed to be scalable, secure, and future-ready."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Link
                to={sol.href}
                className="group block relative h-[480px] rounded-2xl overflow-hidden"
              >
                {sol.video ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  >
                    <source src={sol.video} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-4 border border-primary/30">
                    <sol.icon className="w-5 h-5 text-primary" />
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    {sol.title}
                  </h3>

                  <p className="text-white/60 font-body text-sm leading-relaxed mb-4">
                    {sol.description}
                  </p>

                  <span className="inline-flex items-center gap-2 text-primary text-sm font-medium font-body group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
