"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Copy, Check, Send, Sparkles, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import GlitchText from "./GlitchText";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [message, setMessage] = useState("");
  const [senderEmail, setSenderEmail] = useState("");

  const email = "shamsai3469@gmail.com";
  const phone = "(+91) 9849202469";
  const github = "https://github.com/Shxam";
  const linkedin = "https://linkedin.com/in/sai-narasimham";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderEmail || !message) return;

    // Open mail client with pre-filled content
    const mailtoUrl = `mailto:${email}?subject=Collaboration%20Inquiry%20from%20${encodeURIComponent(
      senderEmail
    )}&body=${encodeURIComponent(message)}`;
    window.open(mailtoUrl, "_blank");

    setFormSent(true);
    setTimeout(() => {
      setMessage("");
      setSenderEmail("");
      setFormSent(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-16">
        <div className="flex items-center gap-2 text-xs font-mono text-terminal-green tracking-widest uppercase mb-2">
          <span>{"// 06. SECURE COMMUNICATION"}</span>
          <span className="w-12 h-px bg-terminal-green/40" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-cyber-white">
          <GlitchText text="INITIATE CONTACT" />
        </h2>
        <p className="text-sm sm:text-base text-cyber-muted max-w-2xl mt-2">
          Ready to engineer high-impact AI architectures, GraphRAG systems, or full-stack platforms. Open for full-time roles, remote opportunities, and technical consulting.
        </p>
      </div>

      {/* Main Grid: Terminal Contact Card & Quick Dispatcher */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Terminal Contact Card (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-cyber-void/90 border border-cyber-border rounded-3xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-md shadow-2xl space-y-6 font-mono text-xs"
        >
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-cyber-border/80">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-terminal-green" />
              <span className="text-cyber-muted ml-2">sai@contact-node:~$ cat credentials.json</span>
            </div>
            <span className="text-[10px] text-terminal-green uppercase">STATUS: 200 OK</span>
          </div>

          {/* Copy Email Flash Card */}
          <div
            className={`p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
              copied
                ? "bg-terminal-green/20 border-terminal-green shadow-terminal-glow"
                : "bg-cyber-surface/70 border-cyber-border hover:border-terminal-green/40"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] text-cyber-dim uppercase tracking-wider block mb-1">
                  DIRECT EMAIL ENDPOINT
                </span>
                <span className="text-base sm:text-lg font-bold text-cyber-white font-mono select-all">
                  {email}
                </span>
              </div>
              <button
                onClick={handleCopyEmail}
                className={`px-4 py-2.5 rounded-xl font-bold font-mono text-xs flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
                  copied
                    ? "bg-terminal-green text-cyber-void shadow-terminal-glow scale-105"
                    : "bg-terminal-green/10 hover:bg-terminal-green text-terminal-green hover:text-cyber-void border border-terminal-green/40"
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>[EMAIL COPIED TO CLIPBOARD!]</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>COPY EMAIL</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Channel Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {/* Phone */}
            <div className="p-4 bg-cyber-surface/40 border border-cyber-border rounded-xl space-y-1">
              <div className="flex items-center gap-2 text-cyber-dim text-[10px]">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                PHONE &amp; WHATSAPP
              </div>
              <a
                href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                className="text-cyber-white hover:text-cyan-400 font-bold block transition-colors"
              >
                {phone}
              </a>
            </div>

            {/* GitHub */}
            <div className="p-4 bg-cyber-surface/40 border border-cyber-border rounded-xl space-y-1">
              <div className="flex items-center gap-2 text-cyber-dim text-[10px]">
                <GithubIcon className="w-3.5 h-3.5 text-purple-400" />
                GITHUB PROFILE
              </div>
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="text-cyber-white hover:text-purple-400 font-bold flex items-center gap-1 transition-colors"
              >
                <span>github.com/Shxam</span>
                <ExternalLink className="w-3 h-3 text-cyber-dim" />
              </a>
            </div>

            {/* LinkedIn */}
            <div className="p-4 bg-cyber-surface/40 border border-cyber-border rounded-xl space-y-1 sm:col-span-2">
              <div className="flex items-center gap-2 text-cyber-dim text-[10px]">
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                LINKEDIN NETWORK
              </div>
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-cyber-white hover:text-blue-400 font-bold flex items-center gap-1 transition-colors"
              >
                <span>linkedin.com/in/sai-narasimham</span>
                <ExternalLink className="w-3 h-3 text-cyber-dim" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Quick Dispatch Form (5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5 bg-cyber-surface/60 border border-cyber-border rounded-3xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-terminal-green mb-4">
            <Sparkles className="w-4 h-4" />
            <span>DISPATCH INQUIRY PROTOCOL</span>
          </div>
          <h3 className="text-xl font-bold font-display text-cyber-white mb-2">
            Send a Direct Message
          </h3>
          <p className="text-xs text-cyber-muted mb-6 font-sans">
            Prefill your collaboration or hiring inquiry to dispatch immediately.
          </p>

          <form onSubmit={handleSendMessage} className="space-y-4 font-mono text-xs">
            <div>
              <label className="block text-cyber-dim mb-1 text-[11px]">
                YOUR EMAIL ADDRESS:
              </label>
              <input
                type="email"
                required
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="recruiter@tech.com"
                className="w-full bg-cyber-void border border-cyber-border focus:border-terminal-green rounded-xl px-3.5 py-2.5 text-cyber-white placeholder:text-cyber-dim focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-cyber-dim mb-1 text-[11px]">
                PROJECT / ROLE DETAILS:
              </label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi Sai, we loved your GraphRAG and full-stack work. Let's discuss an AI Engineer role..."
                className="w-full bg-cyber-void border border-cyber-border focus:border-terminal-green rounded-xl px-3.5 py-2.5 text-cyber-white placeholder:text-cyber-dim focus:outline-none transition-colors resize-none font-sans text-xs"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-terminal-green hover:bg-terminal-green/90 text-cyber-void font-bold rounded-xl shadow-terminal-glow transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{formSent ? "OPENING EMAIL CLIENT..." : "TRANSMIT MESSAGE →"}</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
