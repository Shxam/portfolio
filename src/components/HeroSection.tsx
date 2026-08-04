"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, ArrowDown, Sparkles, Cpu, GitBranch, ShieldCheck } from "lucide-react";
import GlitchText from "./GlitchText";

interface HeroSectionProps {
  onOpenTerminal: () => void;
}

export default function HeroSection({ onOpenTerminal }: HeroSectionProps) {
  const metrics = [
    {
      value: "95.8%",
      label: "TOKEN COST REDUCTION",
      detail: "GraphRAG Incident Analysis",
      icon: Cpu,
    },
    {
      value: "212 / 12.8k",
      label: "GLOBAL RANK (TOP 1.6%)",
      detail: "HackerRank Orchestrate 2026",
      icon: Sparkles,
    },
    {
      value: "30+",
      label: "SECURITY FINDINGS RESOLVED",
      detail: "IPL Dhaba Production Audit",
      icon: ShieldCheck,
    },
    {
      value: "2,600+",
      label: "YOUTUBE COMMUNITY",
      detail: "Build-In-Public Tutorials",
      icon: GitBranch,
    },
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background HUD Grid Accent */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:32px_32px] opacity-40 pointer-events-none" />

      {/* Top Meta Chips */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono mb-6"
      >
        <div className="flex items-center gap-2 px-3 py-1 bg-cyber-surface border border-cyber-border rounded-full text-cyber-muted">
          <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
          <span className="text-cyber-white">ML / AI ENGINEER</span>
        </div>
        <div className="px-3 py-1 bg-cyber-surface/60 border border-cyber-border/70 rounded-full text-cyber-dim">
          <span>AP, INDIA (OPEN TO REMOTE)</span>
        </div>
        <div className="px-3 py-1 bg-terminal-green/10 border border-terminal-green/30 rounded-full text-terminal-green">
          <span>SASTRA CSE &apos;26</span>
        </div>
      </motion.div>

      {/* Giant Display Name */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="space-y-2 mb-8"
      >
        <div className="text-xs sm:text-sm font-mono text-terminal-green tracking-widest uppercase">
          {"// IDENTITY & CORE FOCUS"}
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-cyber-white leading-[1.05]">
          <span className="block">PAMARTHI SAI</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyber-white via-terminal-green/90 to-cyber-white">
            <GlitchText text="NARASIMHAM" tag="span" />
          </span>
        </h1>
      </motion.div>

      {/* Hero Tagline & Narrative */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-3xl space-y-4 mb-10"
      >
        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-cyber-white/90 border-l-2 border-terminal-green pl-4 italic">
          &ldquo;Fresher who was told <span className="text-terminal-green font-semibold">&apos;get experience first,&apos;</span> so I started building it myself.&rdquo;
        </p>
        <p className="text-sm sm:text-base text-cyber-muted font-sans leading-relaxed">
          Architecting production-ready AI systems using LLMs, GraphRAG, hybrid retrieval, and high-performance backends. Proven by hackathon round victories, security audits, and thousands of developers following the build-in-public journey.
        </p>
      </motion.div>

      {/* Action CTA Cluster */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex flex-wrap items-center gap-4 mb-14"
      >
        <a
          href="#projects"
          className="px-6 py-3.5 bg-terminal-green hover:bg-terminal-green/90 text-cyber-void font-mono font-bold text-xs sm:text-sm rounded-lg shadow-terminal-glow hover:shadow-terminal-glow-lg transition-all flex items-center gap-2 group"
        >
          <span>EXPLORE AI SYSTEMS</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>

        <button
          onClick={onOpenTerminal}
          className="px-5 py-3.5 bg-cyber-surface hover:bg-cyber-card border border-cyber-border hover:border-terminal-green text-cyber-white hover:text-terminal-green font-mono text-xs sm:text-sm rounded-lg transition-all flex items-center gap-2.5 shadow-sm"
        >
          <Terminal className="w-4 h-4 text-terminal-green" />
          <span>LAUNCH COMMAND PALETTE</span>
          <kbd className="bg-cyber-void px-2 py-0.5 rounded text-[11px] text-cyber-dim border border-cyber-border">
            ⌘K
          </kbd>
        </button>

        <a
          href="/llms.txt"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-3.5 text-cyber-dim hover:text-terminal-green font-mono text-xs transition-colors flex items-center gap-1.5"
        >
          <span>[llms.txt]</span>
        </a>
      </motion.div>

      {/* Live Benchmark & Metrics Grid */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
      >
        {metrics.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <div
              key={idx}
              className="p-4 sm:p-5 bg-cyber-surface/70 border border-cyber-border hover:border-terminal-green/50 rounded-xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] sm:text-xs font-mono text-cyber-dim group-hover:text-terminal-green transition-colors">
                  0{idx + 1} {"//"}
                </span>
                <Icon className="w-4 h-4 text-cyber-dim group-hover:text-terminal-green transition-colors" />
              </div>
              <div className="text-2xl sm:text-3xl font-black font-display text-cyber-white group-hover:text-terminal-green transition-colors tracking-tight">
                {metric.value}
              </div>
              <div className="text-[11px] sm:text-xs font-mono font-bold text-cyber-muted mt-1">
                {metric.label}
              </div>
              <div className="text-[10px] text-cyber-dim font-sans mt-0.5">
                {metric.detail}
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* Down indicator */}
      <div className="mt-12 flex justify-center">
        <a
          href="#about"
          className="flex items-center gap-2 text-xs font-mono text-cyber-dim hover:text-terminal-green transition-colors"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
