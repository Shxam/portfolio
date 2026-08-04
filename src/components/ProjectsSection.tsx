"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Cpu, Trophy, X, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./Icons";
import GlitchText from "./GlitchText";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  event: string;
  award?: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  keyMetric: string;
  keyMetricLabel: string;
  summary: string;
  architectureDetails: string[];
  impactBadges: string[];
}

const PROJECTS: Project[] = [
  {
    id: "postmortemiq",
    title: "PostMortemIQ",
    subtitle: "AI Incident Root-Cause Analysis via Knowledge GraphRAG",
    event: "TigerGraph Hackathon",
    award: "ROUND WINNER",
    tech: ["TigerGraph", "GraphRAG", "Python", "Neo4j", "LangChain"],
    githubUrl: "https://github.com/Shxam/graphRAG",
    keyMetric: "95.8%",
    keyMetricLabel: "TOKEN CONSUMPTION REDUCTION",
    summary:
      "Automated enterprise incident root-cause analysis by linking telemetry alerts, CI/CD deployment logs, service topologies, and infrastructure commits into a traversable GraphRAG knowledge graph.",
    architectureDetails: [
      "Constructed a multi-relational graph connecting service outages directly to git commit diffs and kubernetes pods.",
      "Achieved a 100% evaluation pass rate across 40 real-world production incident scenarios.",
      "Graph-guided context extraction reduced token overhead by 95.8% compared to naive dense vector retrieval.",
    ],
    impactBadges: ["100% Eval Pass Rate", "40 Test Scenarios", "Graph Traversal"],
  },
  {
    id: "ikip",
    title: "IKIP",
    subtitle: "Industrial Knowledge Intelligence Platform",
    event: "Industrial AI Hackathon",
    award: "HACKATHON FINALIST",
    tech: ["FastAPI", "LangChain", "Neo4j", "FAISS", "BM25", "Multi-Agent"],
    githubUrl: "https://github.com/Shxam/ET-hackathon",
    keyMetric: "&lt; 10s",
    keyMetricLabel: "CITED TECHNICAL RESPONSES",
    summary:
      "Multi-agent industrial engineering assistant capable of answering complex questions from dense machine SOPs, schematics, and operating manuals using hybrid keyword + graph retrieval.",
    architectureDetails: [
      "Hybrid search engine combining FAISS semantic embeddings with BM25 keyword matching for exact part numbers.",
      "Neo4j relationship graph linking equipment manuals to component failure modes.",
      "Multi-agent orchestrator validating citations against raw PDF ground truth in under 10 seconds.",
    ],
    impactBadges: ["Hybrid FAISS + BM25", "Neo4j Schematics", "Multi-Agent"],
  },
  {
    id: "triage-agent",
    title: "Multi-Domain Support Triage Agent",
    subtitle: "Enterprise Customer Ticket Resolution & Risk Engine",
    event: "HackerRank Orchestrate (May 2026)",
    award: "GLOBAL RANK 212 / 12,850 (TOP 1.6%)",
    tech: ["Python", "Hybrid RAG", "Groq LLM", "Cross-Encoder", "Pydantic"],
    keyMetric: "Top 1.6%",
    keyMetricLabel: "GLOBAL RANK (212 / 12,850)",
    summary:
      "High-throughput customer support triage agent resolving tickets across disparate domains with a deterministic pre-inference rule engine for security, fraud, and legal risk classification.",
    architectureDetails: [
      "Pre-inference regex & deterministic classifier intercepting high-risk queries with zero LLM latency.",
      "Cross-encoder reranking stage re-ordering retrieved documents for maximum semantic density.",
      "Sub-second Groq inference delivering instantaneous ticket resolution and auto-tagging.",
    ],
    impactBadges: ["Cross-Encoder Rerank", "Rule Pre-Filter", "24-Hr Hackathon"],
  },
  {
    id: "gst-agent",
    title: "GST Reconciliation Agent",
    subtitle: "Deterministic Validation + LLM Reasoning System",
    event: "Meta × HuggingFace OpenEnv Hackathon",
    award: "OPENENV SHOWCASE",
    tech: ["FastAPI", "Docker", "Pydantic", "Groq", "Python"],
    githubUrl: "https://github.com/Shxam/openenv",
    keyMetric: "15-20s",
    keyMetricLabel: "BATCH RECONCILIATION TIME",
    summary:
      "Automated GST invoice reconciliation pipeline evaluating multi-format invoices with mathematical rule checkers and LLM-driven discrepancy arbitration.",
    architectureDetails: [
      "Dual-stage engine: strict mathematical parity verification followed by LLM arbitration for ambiguous items.",
      "Batched asynchronous inference processing datasets ranging from 10 to 500 invoices in 15–20s.",
      "Fully containerized with Docker for deterministic reproducibility across enterprise environments.",
    ],
    impactBadges: ["10–500 Invoices", "Batched Async", "Docker Container"],
  },
];

export default function ProjectsSection() {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-terminal-green tracking-widest uppercase mb-2">
            <span>{"// 04. SYSTEM ARCHITECTURES"}</span>
            <span className="w-12 h-px bg-terminal-green/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-cyber-white">
            <GlitchText text="FLAGSHIP AI PROJECTS" />
          </h2>
          <p className="text-sm sm:text-base text-cyber-muted max-w-xl mt-2">
            Awwwards-style system index. High-performance RAG, GraphRAG, and automated reasoning pipelines.
          </p>
        </div>

        <div className="font-mono text-xs text-cyber-dim">
          <span>[TOTAL INDEXED: 4 FLAGSHIP SYSTEMS]</span>
        </div>
      </div>

      {/* Projects Grid / Client Work Index */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group bg-cyber-surface/60 hover:bg-cyber-surface border border-cyber-border hover:border-terminal-green/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden backdrop-blur-sm hover:shadow-terminal-glow"
          >
            {/* Top Bar */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-mono text-terminal-green font-bold flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5" />
                  {project.event}
                </span>
                {project.award && (
                  <span className="px-2 py-0.5 rounded bg-terminal-green/10 border border-terminal-green/30 text-[10px] font-mono text-terminal-green font-bold">
                    {project.award}
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl font-bold font-display text-cyber-white group-hover:text-terminal-green transition-colors mb-1">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-cyber-muted mb-4">
                {project.subtitle}
              </p>

              {/* Metric Callout */}
              <div className="p-3 bg-cyber-void/80 border border-cyber-border rounded-xl mb-5 flex items-center justify-between">
                <div>
                  <div className="text-xl sm:text-2xl font-black font-display text-terminal-green">
                    <span dangerouslySetInnerHTML={{ __html: project.keyMetric }} />
                  </div>
                  <div className="text-[10px] font-mono text-cyber-dim">
                    {project.keyMetricLabel}
                  </div>
                </div>
                <Sparkles className="w-5 h-5 text-terminal-green/60" />
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-cyber-muted line-clamp-3 leading-relaxed mb-6 font-sans">
                {project.summary}
              </p>
            </div>

            {/* Bottom Actions & Tech Tags */}
            <div className="space-y-4 pt-4 border-t border-cyber-border/70">
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-cyber-void border border-cyber-border/70 text-[11px] font-mono text-cyber-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Link Buttons */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-mono text-cyber-white hover:text-terminal-green flex items-center gap-1.5 transition-colors"
                >
                  <span>VIEW ARCHITECTURE SPEC</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-cyber-surface hover:bg-cyber-card border border-cyber-border hover:border-terminal-green text-cyber-muted hover:text-cyber-white transition-all"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Deep Dive Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-cyber-void/85 backdrop-blur-md">
            <div className="absolute inset-0" onClick={() => setActiveModalProject(null)} />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-2xl bg-cyber-void/95 border border-cyber-border rounded-2xl p-6 sm:p-8 shadow-2xl z-10 space-y-6 font-mono text-xs max-h-[85vh] overflow-y-auto"
            >
              {/* Modal Top */}
              <div className="flex items-start justify-between border-b border-cyber-border pb-4">
                <div>
                  <div className="flex items-center gap-2 text-terminal-green mb-1">
                    <Trophy className="w-4 h-4" />
                    <span className="font-bold">{activeModalProject.event}</span>
                    {activeModalProject.award && (
                      <span className="px-2 py-0.5 bg-terminal-green/10 border border-terminal-green/30 rounded text-[10px]">
                        {activeModalProject.award}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-black font-display text-cyber-white">
                    {activeModalProject.title}
                  </h3>
                  <p className="text-cyber-muted text-xs mt-0.5">
                    {activeModalProject.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-1.5 text-cyber-muted hover:text-cyber-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Key Benchmark */}
              <div className="p-4 bg-cyber-surface/80 border border-cyber-border rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-2xl font-black font-display text-terminal-green">
                    <span dangerouslySetInnerHTML={{ __html: activeModalProject.keyMetric }} />
                  </div>
                  <div className="text-cyber-dim text-[11px]">
                    {activeModalProject.keyMetricLabel}
                  </div>
                </div>
                <Cpu className="w-6 h-6 text-terminal-green/70" />
              </div>

              {/* Full Architecture Specs */}
              <div className="space-y-3">
                <div className="text-terminal-green font-bold uppercase tracking-wider">
                  {"// ARCHITECTURE SPECIFICATIONS & BENCHMARKS"}
                </div>
                <div className="space-y-2.5">
                  {activeModalProject.architectureDetails.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-cyber-muted font-sans text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-terminal-green shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="space-y-2 pt-2 border-t border-cyber-border">
                <div className="text-cyber-dim uppercase text-[10px]">TECHNOLOGY STACK:</div>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-cyber-surface border border-cyber-border text-cyber-white text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-cyber-border">
                <span className="text-cyber-dim">PAMARTHI SAI NARASIMHAM // 2026</span>
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-terminal-green text-cyber-void font-bold rounded-lg hover:bg-terminal-green/90 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>VIEW GITHUB REPO</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
