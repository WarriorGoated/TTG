import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { loadAIChat } from "@/lib/loadAIChat";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    label: "AV Solutions",
    children: [
      { label: "Design", href: "/solutions/design" },
      { label: "Supply & Install", href: "/solutions/supply-install" },
      { label: "Service & Maintenance", href: "/solutions/service-maintenance" },
    ],
  },
  {
    label: "Industries",
    children: [
      { label: "Digital Signage", href: "https://www.topazdigital.com/", external: true },
      { label: "AV Solutions", href: "/industries/av-solutions" },
    ],
  },
  {
    label: "About Us",
    children: [
      { label: "Why TOPAZ?", href: "/about/why-topaz" },
      { label: "Our Partners", href: "/about/partners" },
      { label: "Sustainability", href: "/about/sustainability" },
    ],
  },
  {
    label: "Contact",
    children: [
      { label: "Contact Us", href: "/contact" },
      { label: "Technical Support", href: "/support" },
    ],
  },
];

function DropdownMenu({ items, isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-xl overflow-hidden z-50"
        >
          {items.map((item) =>
            item.action === "ai-chat" ? (
              <button
                key="ai-chat"
                onClick={loadAIChat}
                className="block w-full text-left px-5 py-3 text-sm text-foreground/80 hover:bg-primary/5 hover:text-primary transition-colors font-body"
              >
                {item.label}
              </button>
            ) : item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-5 py-3 text-sm text-foreground/80 hover:bg-primary/5 hover:text-primary transition-colors font-body"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className="block px-5 py-3 text-sm text-foreground/80 hover:bg-primary/5 hover:text-primary transition-colors font-body"
              >
                {item.label}
              </Link>
            )
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-[#e3dfd7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/4f32f46e8_TTGFinalLogo_completely_grey.png"
              alt="TOPAZ Technology Group"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#637480] hover:text-[#3d4e57] transition-colors font-body rounded-lg font-semibold tracking-wide">
                  {link.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                </button>
                <DropdownMenu items={link.children} isOpen={openDropdown === link.label} />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-[#637480] text-white rounded-full text-sm font-medium font-body hover:bg-[#526370] transition-all shadow-md"
            >
              Speak to a Specialist
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 font-body">
                    {link.label}
                  </p>
                  {link.children.map((child) =>
                    child.action === "ai-chat" ? (
                      <button
                        key="ai-chat"
                        onClick={loadAIChat}
                        className="block w-full text-left py-2 text-foreground/80 hover:text-primary transition-colors font-body"
                      >
                        {child.label}
                      </button>
                    ) : child.external ? (
                      <a
                        key={child.href}
                        href={child.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block py-2 text-foreground/80 hover:text-primary transition-colors font-body"
                      >
                        {child.label}
                      </a>
                    ) : (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block py-2 text-foreground/80 hover:text-primary transition-colors font-body"
                      >
                        {child.label}
                      </Link>
                    )
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="block w-full text-center px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium font-body"
              >
                Speak to a Specialist
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}