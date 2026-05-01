import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import PageHero from "../components/shared/PageHero";
import { base44 } from "@/api/base44Client";

const ContactEnquiry = base44.entities.ContactEnquiry;

const contactInfo = [
  { icon: MapPin, title: "Address", value: "30 Crosby Road North, Waterloo, Liverpool, L22 4QF" },
  { icon: Mail, title: "Email", value: "info@topaztechnologygroup.com" },
  { icon: Clock, title: "Help Desk", value: "24/5 Global Support" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    await ContactEnquiry.create({
      name: form.name,
      email: form.email,
      company: form.company || "",
      phone: form.phone || "",
      message: form.message,
      status: "new",
    });
    setSending(false);
    setSent(true);
  };

  return (
    <>
      <PageHero
        badge="Contact"
        title="Let's Start a Conversation"
        description="Whether you need a bespoke AV solution or just want to learn more, our team of specialists is ready to help."
        image="https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/36d9858bb_generated_be132e42.png"
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Get in Touch</h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Reach out to us and our team will respond promptly to discuss your requirements.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-foreground text-sm">{info.title}</p>
                      <p className="text-muted-foreground font-body text-sm">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="p-6 bg-card rounded-2xl border border-border">
                <h4 className="font-heading font-semibold text-foreground mb-2">Company Information</h4>
                <p className="text-sm text-muted-foreground font-body">
                  TOPAZ Technology Group Ltd<br />
                  Company No. 13061763<br />
                  Registered in England and Wales
                </p>
              </div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              {sent ? (
                <div className="space-y-6 bg-card p-8 rounded-2xl border border-border flex flex-col items-center justify-center text-center min-h-[400px]">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-foreground">Message Sent!</h3>
                  <p className="text-muted-foreground font-body">Thank you for getting in touch. A member of our team will respond to you shortly.</p>
                  <button onClick={() => { setSent(false); setForm({ name: "", email: "", company: "", phone: "", message: "" }); }} className="text-sm text-primary underline font-body">
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="space-y-6 bg-card p-8 rounded-2xl border border-border" onSubmit={handleSubmit}>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Send Us a Message</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="font-body text-sm mb-2 block">Full Name *</Label>
                      <Input required value={form.name} onChange={(e) => handleChange("name", e.target.value)} placeholder="John Smith" />
                    </div>
                    <div>
                      <Label className="font-body text-sm mb-2 block">Email *</Label>
                      <Input required type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="john@company.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="font-body text-sm mb-2 block">Company</Label>
                      <Input value={form.company} onChange={(e) => handleChange("company", e.target.value)} placeholder="Company name" />
                    </div>
                    <div>
                      <Label className="font-body text-sm mb-2 block">Phone</Label>
                      <Input value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="+44" />
                    </div>
                  </div>
                  <div>
                    <Label className="font-body text-sm mb-2 block">Message *</Label>
                    <Textarea required rows={6} value={form.message} onChange={(e) => handleChange("message", e.target.value)} placeholder="Tell us about your project..." />
                  </div>
                  <Button type="submit" disabled={sending} className="w-full bg-[#637480] text-white rounded-full py-6 font-body font-medium text-base hover:bg-[#526370]">
                    <Send className="w-4 h-4 mr-2" />
                    {sending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      {/* Locations */}
      <section id="locations" className="py-24 bg-[#e3dfd7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4 font-body">
              Locations
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Offices</h2>
            <p className="text-muted-foreground font-body">We operate from two UK locations, with national coverage across Great Britain.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm"
            >
              <div className="p-6 border-b border-border">
                <h3 className="text-lg font-heading font-bold text-foreground mb-1">Head Office</h3>
                <p className="text-sm text-muted-foreground font-body">166 Lord Street, Southport, PR9 0QA, United Kingdom</p>
              </div>
              <iframe
                title="Topaz Head Office - Southport"
                src="https://www.google.com/maps?q=166+Lord+Street,+Southport,+PR9+0QA,+United+Kingdom&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm"
            >
              <div className="p-6 border-b border-border">
                <h3 className="text-lg font-heading font-bold text-foreground mb-1">London Office</h3>
                <p className="text-sm text-muted-foreground font-body">Lower Farm Road, Effingham, Leatherhead, United Kingdom</p>
              </div>
              <iframe
                title="Topaz London Office - Leatherhead"
                src="https://www.google.com/maps?q=Lower+Farm+Road,+Effingham,+Leatherhead,+United+Kingdom&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}