"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Database, CreditCard, Navigation, CheckCircle2, ChevronRight } from "lucide-react";
import GlitchText from "./GlitchText";

export default function ExperienceSection() {
  const [showAuditDetails, setShowAuditDetails] = useState(false);

  const securityAuditHighlights = [
    "Patched Row Level Security (RLS) policies across 30+ tables to eliminate tenant data leakage",
    "Blocked vertical & horizontal privilege escalation across 4 user roles (Admin, Customer, Delivery, Kitchen)",
    "Hardened Razorpay webhook signature verification against replay attacks",
    "Implemented atomic PostgreSQL RPC transactions for wallet deduction and balance locks",
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-16">
        <div className="flex items-center gap-2 text-xs font-mono text-terminal-green tracking-widest uppercase mb-2">
          <span>{"// 03. PRODUCTION TRACK RECORD"}</span>
          <span className="w-12 h-px bg-terminal-green/40" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-cyber-white">
          <GlitchText text="CLIENT WORK &amp; AUDITS" />
        </h2>
        <p className="text-sm sm:text-base text-cyber-muted max-w-2xl mt-2">
          Real-world engineering delivering hardened, auditable production applications with mission-critical security and payment flows.
        </p>
      </div>

      {/* Main Experience Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-6 sm:p-10 bg-cyber-surface/70 border border-cyber-border rounded-3xl relative overflow-hidden backdrop-blur-md hover:border-terminal-green/40 transition-all shadow-xl"
      >
        {/* Top Role Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-cyber-border/80 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-terminal-green mb-1">
              <span className="px-2 py-0.5 rounded bg-terminal-green/10 border border-terminal-green/30">
                INDEPENDENT CONTRACTOR
              </span>
              <span>•</span>
              <span className="text-cyber-muted">REMOTE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-display text-cyber-white">
              Full-Stack Developer — IPL Dhaba
            </h3>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="px-3 py-1.5 rounded-lg bg-cyber-void border border-cyber-border text-cyber-white font-bold">
              2026
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-terminal-green/10 border border-terminal-green/40 text-terminal-green font-bold">
              <ShieldCheck className="w-4 h-4" />
              AUDIT VERIFIED
            </span>
          </div>
        </div>

        {/* Narrative & Highlights */}
        <div className="py-6 space-y-4 text-cyber-muted text-sm sm:text-base leading-relaxed">
          <p className="text-cyber-white font-medium">
            Architected and deployed an end-to-end food ordering and real-time delivery platform engineered on Next.js 14 App Router and Supabase.
          </p>
          <ul className="space-y-3 font-sans text-sm">
            <li className="flex items-start gap-3">
              <span className="text-terminal-green mt-0.5 font-bold font-mono">›</span>
              <span>
                <strong className="text-cyber-white">Complex Relational Architecture:</strong> Designed a robust 30+ table database schema managing 4 distinct operational roles (Customer, Restaurant Staff, Delivery Partner, Super Admin) with granular permission trees.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-terminal-green mt-0.5 font-bold font-mono">›</span>
              <span>
                <strong className="text-cyber-white">Full Security Audit Resolution:</strong> Remediated 30 high-priority security vulnerabilities identified during rigorous penetration testing, eliminating Row-Level Security bypasses, IDOR attack surfaces, and privilege escalation vulnerabilities.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-terminal-green mt-0.5 font-bold font-mono">›</span>
              <span>
                <strong className="text-cyber-white">Payments &amp; Live Telemetry:</strong> Integrated automated Razorpay payment webhooks, Mapbox live delivery telemetry with ETA interpolation, and containerized Docker CI/CD pipelines deployed to Vercel.
              </span>
            </li>
          </ul>
        </div>

        {/* Architecture Spec Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 font-mono text-xs">
          <div className="p-3 bg-cyber-void/80 border border-cyber-border rounded-xl space-y-1">
            <div className="text-cyber-dim text-[10px] flex items-center gap-1">
              <Database className="w-3.5 h-3.5 text-purple-400" />
              SCHEMA
            </div>
            <div className="text-cyber-white font-bold">30+ Tables RLS</div>
          </div>
          <div className="p-3 bg-cyber-void/80 border border-cyber-border rounded-xl space-y-1">
            <div className="text-cyber-dim text-[10px] flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-terminal-green" />
              AUDIT SCORE
            </div>
            <div className="text-terminal-green font-bold">30/30 Resolved</div>
          </div>
          <div className="p-3 bg-cyber-void/80 border border-cyber-border rounded-xl space-y-1">
            <div className="text-cyber-dim text-[10px] flex items-center gap-1">
              <CreditCard className="w-3.5 h-3.5 text-amber-400" />
              PAYMENTS
            </div>
            <div className="text-cyber-white font-bold">Razorpay + Webhooks</div>
          </div>
          <div className="p-3 bg-cyber-void/80 border border-cyber-border rounded-xl space-y-1">
            <div className="text-cyber-dim text-[10px] flex items-center gap-1">
              <Navigation className="w-3.5 h-3.5 text-cyan-400" />
              TRACKING
            </div>
            <div className="text-cyber-white font-bold">Mapbox Live GPS</div>
          </div>
        </div>

        {/* Security Audit Drawer Toggle */}
        <div className="mt-4 pt-4 border-t border-cyber-border/70">
          <button
            onClick={() => setShowAuditDetails(!showAuditDetails)}
            className="flex items-center gap-2 text-xs font-mono text-terminal-green hover:underline cursor-pointer"
          >
            <ChevronRight
              className={`w-4 h-4 transition-transform duration-200 ${
                showAuditDetails ? "rotate-90" : ""
              }`}
            />
            <span>{showAuditDetails ? "HIDE" : "EXPAND"} SECURITY AUDIT REMEDIATION DETAILS</span>
          </button>

          {showAuditDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 p-4 bg-cyber-void/90 border border-cyber-border rounded-xl space-y-2.5 font-mono text-xs text-cyber-muted"
            >
              <div className="text-terminal-green font-bold text-xs uppercase tracking-wider mb-2">
                {"// REMEDIATION LOGS [30 FINDINGS CLOSED]"}
              </div>
              {securityAuditHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-terminal-green shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          {["Next.js 14", "Supabase", "PostgreSQL", "Razorpay", "Mapbox GL", "Docker", "Vercel", "Tailwind CSS", "TypeScript"].map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-cyber-surface border border-cyber-border/80 rounded-md text-xs font-mono text-cyber-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
