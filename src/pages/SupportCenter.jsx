import React, { useState } from "react";
import { motion } from "framer-motion";
import { Ticket, MessageCircle, CheckCircle, ArrowRight, Send } from "lucide-react";
import { loadAIChat } from "@/lib/loadAIChat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import PageHero from "../components/shared/PageHero";
import SectionHeading from "../components/shared/SectionHeading";
import { base44 } from "@/api/base44Client";

const TO_EMAIL = "sales@topaztechnologygroup.com";

const smaFeatures = [
  "Guarantees support availability per SLA",
  "Avoids unbudgeted call-out costs",
  "Increases lifespan of equipment through PMVs",
  "Ensures minimum downtime with fast response times",
];

const slaTable = [
  { feature: "Phone Response", premium: "2 Hours", expedited: "2 Hours" },
  { feature: "On Site Call Out", premium: "24 Hours", expedited: "4 Hours" },
  { feature: "Call Outs P/A", premium: "Unlimited", expedited: "Unlimited" },
  { feature: "Preventative Maintenance Visits", premium: "2", expedited: "4" },
];

export default function SupportCenter() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", company: "", email: "", phone: "",
    building: "", room: "", roomAvailability: "", faultDescription: "", message: ""
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const web3Data = new FormData();
    web3Data.append("access_key", "905536ca-c430-45d9-bc89-9428ad644174");
    web3Data.append("subject", "New Support Ticket - Topaz Technology Group");
    web3Data.append("name", `${formData.firstName} ${formData.lastName}`);
    web3Data.append("email", formData.email);
    web3Data.append("company", formData.company || "");
    web3Data.append("phone", formData.phone || "");
    web3Data.append("building", formData.building || "");
    web3Data.append("room", formData.room || "");
    web3Data.append("room_availability", formData.roomAvailability || "");
    web3Data.append("fault_description", formData.faultDescription || "");
    web3Data.append("message", formData.message);

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: web3Data,
    });

    setSending(false);
    setSent(true);
  };

  return (
    <>
      <PageHero
        badge="Support"
        title="How Can We Help You Today?"
        description="Submit a ticket or chat with our support team for immediate assistance."
        image="https://media.base44.com/images/public/69f35c96ab37fb0292b7fd5f/f9887c581_generated_88496fba.png"
      />

      {/* Support Options */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <SectionHeading
            title="Get the Help You Need"
            description="Choose from our support options to find the best way to get assistance."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-[#e3dfd7] rounded-2xl border border-[#cdc9c0] hover:border-[#637480]/40 transition-all text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#637480]/10 flex items-center justify-center mx-auto mb-4">
                <Ticket className="w-6 h-6 text-[#637480]" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Submit a Ticket</h3>
              <p className="text-muted-foreground font-body text-sm mb-6">Can't find what you're looking for? Our team is here to help.</p>
              <a href="#support-form" className="inline-flex items-center gap-2 text-primary font-medium font-body text-sm hover:gap-3 transition-all">
                Create Ticket <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-[#e3dfd7] rounded-2xl border border-[#cdc9c0] hover:border-[#637480]/40 transition-all text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#637480]/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-[#637480]" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">AI Chat</h3>
              <p className="text-muted-foreground font-body text-sm mb-6">Chat with our AI assistant for instant answers to your support queries.</p>
              <button onClick={loadAIChat} className="inline-flex items-center gap-2 text-primary font-medium font-body text-sm hover:gap-3 transition-all">
                Start AI Chat <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SMA Benefits */}
      <section className="py-24 bg-[#e3dfd7] border-y border-[#cdc9c0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 font-body bg-primary/10 text-primary">
                Service Contracts
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Benefits of Our Service & Maintenance Contracts
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                Our comprehensive service and maintenance contracts are designed to provide peace of mind, ensuring your systems operate at peak performance while minimizing unexpected downtime and costs.
              </p>
              <ul className="space-y-4">
                {smaFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="font-body text-foreground">{feat}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-[#cdc9c0] overflow-hidden"
            >
              <div className="grid grid-cols-3 bg-[#637480] text-white font-heading font-semibold text-sm">
                <div className="p-4">Service Level</div>
                <div className="p-4 text-center">Premium</div>
                <div className="p-4 text-center">Expedited</div>
              </div>
              {slaTable.map((row, i) => (
                <div key={row.feature} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-white" : "bg-[#f5f2ee]"}`}>
                  <div className="p-4 font-medium font-body text-foreground">{row.feature}</div>
                  <div className="p-4 text-center font-body text-muted-foreground">{row.premium}</div>
                  <div className="p-4 text-center font-body text-muted-foreground">{row.expedited}</div>
                </div>
              ))}
              <div className="p-4 bg-[#637480]/5 text-xs text-muted-foreground font-body text-center">
                Custom solutions available — contact us for a personalized quote.
              </div>
            </motion.div>
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
            Our certified service engineers operate across <span className="font-semibold text-foreground">the UK and internationally</span>, providing rapid on-site support backed by a dedicated <span className="font-semibold text-foreground">24/5 global help desk</span>.
          </motion.p>
        </div>
      </section>

      {/* Service Support Info */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { title: "Rapid Response", desc: "Exceptional response times regardless of your SLA." },
              { title: "UK Coverage", desc: "Comprehensive coverage across London and the UK." },
              { title: "Detailed Reports", desc: "Meticulous documentation and SLA performance reports." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-[#e3dfd7] rounded-2xl border border-[#cdc9c0]"
              >
                <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Ticket Form */}
      <section id="support-form" className="py-24 bg-[#e3dfd7] border-t border-[#cdc9c0]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <SectionHeading
            title="Raise a Support Ticket"
            description="Fill out the form below and our team will get back to you as soon as possible."
          />
          {sent ? (
            <div className="bg-white p-8 rounded-2xl border border-[#cdc9c0] flex flex-col items-center justify-center text-center min-h-[300px] gap-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-foreground">Ticket Submitted!</h3>
              <p className="text-muted-foreground font-body">Thank you. A member of our team will respond to your ticket shortly.</p>
              <button onClick={() => { setSent(false); setFormData({ firstName: "", lastName: "", company: "", email: "", phone: "", building: "", room: "", roomAvailability: "", faultDescription: "", message: "" }); }} className="text-sm text-primary underline font-body">
                Raise another ticket
              </button>
            </div>
          ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 bg-white p-8 rounded-2xl border border-[#cdc9c0]"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label className="font-body text-sm mb-2 block">First Name *</Label>
                <Input value={formData.firstName} onChange={(e) => handleChange("firstName", e.target.value)} placeholder="John" />
              </div>
              <div>
                <Label className="font-body text-sm mb-2 block">Last Name *</Label>
                <Input value={formData.lastName} onChange={(e) => handleChange("lastName", e.target.value)} placeholder="Smith" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label className="font-body text-sm mb-2 block">Company *</Label>
                <Input value={formData.company} onChange={(e) => handleChange("company", e.target.value)} placeholder="Company name" />
              </div>
              <div>
                <Label className="font-body text-sm mb-2 block">Email *</Label>
                <Input type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="john@company.com" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label className="font-body text-sm mb-2 block">Phone Number</Label>
                <Input value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="+44" />
              </div>
              <div>
                <Label className="font-body text-sm mb-2 block">Building</Label>
                <Input value={formData.building} onChange={(e) => handleChange("building", e.target.value)} placeholder="Building name" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label className="font-body text-sm mb-2 block">Room (name/number) Affected</Label>
                <Input value={formData.room} onChange={(e) => handleChange("room", e.target.value)} placeholder="Room 101" />
              </div>
              <div>
                <Label className="font-body text-sm mb-2 block">Room Availability</Label>
                <Input value={formData.roomAvailability} onChange={(e) => handleChange("roomAvailability", e.target.value)} placeholder="e.g. Mon-Fri 9-5" />
              </div>
            </div>
            <div>
              <Label className="font-body text-sm mb-2 block">Brief Description of Fault</Label>
              <Input value={formData.faultDescription} onChange={(e) => handleChange("faultDescription", e.target.value)} placeholder="Brief summary" />
            </div>
            <div>
              <Label className="font-body text-sm mb-2 block">Your Message *</Label>
              <Textarea rows={5} value={formData.message} onChange={(e) => handleChange("message", e.target.value)} placeholder="Describe your issue in detail..." />
            </div>
            <Button type="submit" disabled={sending} className="w-full bg-[#637480] text-white rounded-full py-6 font-body font-medium text-base hover:bg-[#526370]">
              <Send className="w-4 h-4 mr-2" />
              {sending ? "Submitting..." : "Raise Support Ticket"}
            </Button>
          </motion.form>
          )}
        </div>
      </section>
    </>
  );
}