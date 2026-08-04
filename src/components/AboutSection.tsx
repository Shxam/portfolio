"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Network, Terminal, ExternalLink } from "lucide-react";
import { YoutubeIcon } from "./Icons";
import GlitchText from "./GlitchText";

export default function AboutSection() {
  const pillars = [
    {
      title: "GraphRAG & Knowledge Graphs",
      desc: "Bridging unstructured document embeddings with structured Neo4j & TigerGraph relationships to eliminate hallucinations and drastically cut token overhead.",
      icon: Network,
      badge: "GRAPH INTEL",
    },
    {
      title: "Production AI Backends",
      desc: "Building deterministic validation layers, hybrid RAG pipelines (Dense + BM25), and cross-encoder rerankers on FastAPI, Docker, and Asyncio.",
      icon: Terminal,
      badge: "LATENCY &lt; 10S",
    },
    {
      title: "Full-Stack Security & Scale",
      desc: "Architecting end-to-end applications on Next.js 14 and Supabase with strict Row-Level Security (RLS) enforcement and auditable data schemas.",
      icon: Code2,
      badge: "30+ TABLES RLS",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-16">
        <div className="flex items-center gap-2 text-xs font-mono text-terminal-green tracking-widest uppercase mb-2">
          <span>{"// 01. SYSTEM SPECIFICATIONS"}</span>
          <span className="w-12 h-px bg-terminal-green/40" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-cyber-white">
          <GlitchText text="ENGINEERING PROFILE" />
        </h2>
        <p className="text-sm sm:text-base text-cyber-muted max-w-2xl mt-2">
          Bridging the gap between raw research models and production-grade software that solves real enterprise bottlenecks.
        </p>
      </div>

      {/* Main Grid: Narrative & Highlights */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Core Narrative & Philosophy (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Main Story Card */}
          <div className="p-6 sm:p-8 bg-cyber-surface/60 border border-cyber-border rounded-2xl relative overflow-hidden backdrop-blur-sm">
            <div className="space-y-4 text-cyber-muted text-sm sm:text-base leading-relaxed">
              <p className="text-cyber-white font-medium text-base sm:text-lg">
                I build AI systems that aren&apos;t just demo wrappers—they are robust, token-optimized, and wired into enterprise graph databases and backend infrastructure.
              </p>
              <p>
                When faced with the classic dilemma of <span className="text-terminal-green italic">&quot;need experience to get hired, need a job to get experience,&quot;</span> I treated the industry as an open arena: actively entering global AI hackathons (TigerGraph, HackerRank, Meta OpenEnv), resolving enterprise-level security audits on live client products, and building in public.
              </p>
              <p>
                My core philosophy revolves around <span className="text-cyber-white font-mono font-semibold">Deterministic Precision + Probabilistic Intelligence</span>: using strict rule engines and graph traversals to validate facts before delegating fuzzy reasoning to LLMs.
              </p>
            </div>

            {/* Pillar Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-cyber-border/70">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 bg-cyber-void/60 border border-cyber-border rounded-xl space-y-2 hover:border-terminal-green/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <Icon className="w-4 h-4 text-terminal-green" />
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyber-surface border border-cyber-border text-cyber-dim">
                        {pillar.badge}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-cyber-white font-mono">
                      {pillar.title}
                    </div>
                    <p className="text-[11px] text-cyber-dim leading-snug">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Education & YouTube (5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5 space-y-6"
        >
          {/* SASTRA University Card */}
          <div className="p-6 bg-cyber-surface/60 border border-cyber-border rounded-2xl space-y-4 hover:border-terminal-green/30 transition-all">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-terminal-green/10 border border-terminal-green/30 flex items-center justify-center text-terminal-green">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-terminal-green uppercase tracking-wider">
                    EDUCATION &amp; ACADEMICS
                  </span>
                  <h3 className="text-base font-bold text-cyber-white">
                    B.Tech Computer Science Engineering
                  </h3>
                </div>
              </div>
              <span className="px-2.5 py-1 bg-cyber-void border border-cyber-border rounded text-xs font-mono text-terminal-green font-bold">
                8.2 / 10 CGPA
              </span>
            </div>

            <div className="text-xs text-cyber-muted space-y-2 font-mono">
              <div className="flex justify-between">
                <span>INSTITUTION:</span>
                <span className="text-cyber-white">SASTRA Deemed University</span>
              </div>
              <div className="flex justify-between">
                <span>TIMELINE:</span>
                <span className="text-cyber-white">2022 – 2026 (Graduating Batch)</span>
              </div>
              <div className="flex justify-between">
                <span>FOUNDATIONS:</span>
                <span className="text-cyber-white">Data Structures, Algorithms, OS, DBMS</span>
              </div>
            </div>
          </div>

          {/* YouTube Build In Public Spotlight */}
          <div className="p-6 bg-cyber-surface/60 border border-cyber-border rounded-2xl space-y-4 hover:border-red-500/30 transition-all relative overflow-hidden group">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:scale-105 transition-transform">
                  <YoutubeIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-red-400 uppercase tracking-wider">
                    BUILD IN PUBLIC COMMUNITY
                  </span>
                  <h3 className="text-base font-bold text-cyber-white">
                    YouTube Engineering Channel
                  </h3>
                </div>
              </div>
              <span className="px-2.5 py-1 bg-red-500/10 border border-red-500/30 rounded text-xs font-mono text-red-400 font-bold">
                2,600+ SUBS
              </span>
            </div>

            <p className="text-xs text-cyber-muted font-sans leading-relaxed">
              Documenting the journey of building real-world AI systems, sharing hackathon architectures, coding live, and teaching practical software engineering to 2,600+ engaged developers.
            </p>

            <a
              href="https://youtube.com/@Shxam"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-cyber-white hover:text-red-400 transition-colors pt-1"
            >
              <span>EXPLORE CHANNEL CONTENT</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
