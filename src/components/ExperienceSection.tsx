"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Database, CreditCard, Navigation, CheckCircle2, ChevronRight } from "lucide-react";
import GlitchText from "./GlitchText";

export default function ExperienceSection() {
  const [showAuditDetails, setShowAuditDetails] = useState(false);

  const securityAuditHighlights = [
    "Engineered scalable mobile-first architecture with TypeScript type-safety across 96% of codebase",
    "Implemented modular component structure enabling rapid feature iteration and code reusability",
    "Designed robust error handling and recovery mechanisms ensuring 99%+ application reliability",
    "Optimized rendering pipelines and data fetching strategies for sub-200ms interaction latency",
    "Architected Docker containerization for seamless CI/CD deployment and environment parity",
    "Integrated comprehensive testing frameworks (unit, integration, performance) for production-grade quality",
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
                FULL-STACK DEVELOPER
              </span>
              <span>•</span>
              <span className="text-cyber-muted">PERSONAL PROJECT</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-display text-cyber-white">
              MobileApp
            </h3>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="px-3 py-1.5 rounded-lg bg-cyber-void border border-cyber-border text-cyber-white font-bold">
              2026
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-terminal-green/10 border border-terminal-green/40 text-terminal-green font-bold">
              <ShieldCheck className="w-4 h-4" />
              PRODUCTION READY
            </span>
          </div>
        </div>

        {/* Narrative & Highlights */}
        <div className="py-6 space-y-4 text-cyber-muted text-sm sm:text-base leading-relaxed">
          <p className="text-cyber-white font-medium">
            Architected and deployed a comprehensive mobile application leveraging modern React Native and TypeScript best practices with sophisticated state management and real-time data synchronization.
          </p>
          <ul className="space-y-3 font-sans text-sm">
            <li className="flex items-start gap-3">
              <span className="text-terminal-green mt-0.5 font-bold font-mono">›</span>
              <span>
                <strong className="text-cyber-white">Robust Architecture:</strong> Engineered a scalable mobile-first application with TypeScript type-safety, modular component structure, and enterprise-grade error handling across all operational flows.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-terminal-green mt-0.5 font-bold font-mono">›</span>
              <span>
                <strong className="text-cyber-white">Performance &amp; Reliability:</strong> Implemented optimized rendering pipelines, efficient data fetching strategies, and comprehensive testing frameworks ensuring 99%+ application reliability and sub-200ms latency.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-terminal-green mt-0.5 font-bold font-mono">›</span>
              <span>
                <strong className="text-cyber-white">Developer Experience:</strong> Built reusable component libraries, automated deployment pipelines with Docker, and streamlined CI/CD workflows enabling rapid iteration and environment parity across staging and production.
              </span>
            </li>
          </ul>
        </div>

        {/* Architecture Spec Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 font-mono text-xs">
          <div className="p-3 bg-cyber-void/80 border border-cyber-border rounded-xl space-y-1">
            <div className="text-cyber-dim text-[10px] flex items-center gap-1">
              <Database className="w-3.5 h-3.5 text-purple-400" />
              LANGUAGE MIX
            </div>
            <div className="text-cyber-white font-bold">TypeScript 96%</div>
          </div>
          <div className="p-3 bg-cyber-void/80 border border-cyber-border rounded-xl space-y-1">
            <div className="text-cyber-dim text-[10px] flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-terminal-green" />
              RELIABILITY
            </div>
            <div className="text-terminal-green font-bold">99%+ Uptime</div>
          </div>
          <div className="p-3 bg-cyber-void/80 border border-cyber-border rounded-xl space-y-1">
            <div className="text-cyber-dim text-[10px] flex items-center gap-1">
              <CreditCard className="w-3.5 h-3.5 text-amber-400" />
              PERFORMANCE
            </div>
            <div className="text-cyber-white font-bold">&lt;200ms Latency</div>
          </div>
          <div className="p-3 bg-cyber-void/80 border border-cyber-border rounded-xl space-y-1">
            <div className="text-cyber-dim text-[10px] flex items-center gap-1">
              <Navigation className="w-3.5 h-3.5 text-cyan-400" />
              DEPLOYMENT
            </div>
            <div className="text-cyber-white font-bold">Docker CI/CD</div>
          </div>
        </div>

        {/* Architecture Drawer Toggle */}
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
            <span>{showAuditDetails ? "HIDE" : "EXPAND"} ARCHITECTURE &amp; IMPLEMENTATION DETAILS</span>
          </button>

          {showAuditDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 p-4 bg-cyber-void/90 border border-cyber-border rounded-xl space-y-2.5 font-mono text-xs text-cyber-muted"
            >
              <div className="text-terminal-green font-bold text-xs uppercase tracking-wider mb-2">
                {"// TECHNICAL HIGHLIGHTS [PRODUCTION GRADE]"}
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
          {["TypeScript", "React Native", "Expo", "PostgreSQL", "Redis", "Node.js", "Docker", "Tailwind CSS", "JavaScript"].map((tech) => (
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
