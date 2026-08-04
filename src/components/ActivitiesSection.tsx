"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Bot } from "lucide-react";
import { YoutubeIcon } from "./Icons";
import GlitchText from "./GlitchText";

export default function ActivitiesSection() {
  const activities = [
    {
      title: "HackerRank Orchestrate",
      date: "May 2026",
      badge: "GLOBAL RANK 212 / 12,850",
      category: "COMPETITIVE AI",
      icon: Trophy,
      desc: "Finished 212th globally out of 12,850 engineers in a 24-hour hybrid RAG competition. Engineered pre-inference rule filtering and cross-encoder reranking.",
    },
    {
      title: "TigerGraph Hackathon",
      date: "2026",
      badge: "ROUND WINNER",
      category: "KNOWLEDGE GRAPHS",
      icon: Award,
      desc: "Designed and built PostMortemIQ, a round-winning GraphRAG root-cause analysis system reducing LLM token costs by 95.8% across 40 production incident scenarios.",
    },
    {
      title: "Kaggle — Maze Crawler",
      date: "2025–2026",
      badge: "REINFORCEMENT LEARNING",
      category: "RL & SIMULATION",
      icon: Bot,
      desc: "Iteratively trained and tuned Deep Reinforcement Learning agents for complex spatial navigation using custom reward-shaping functions and policy gradients.",
    },
    {
      title: "Build In Public Creator",
      date: "Active",
      badge: "2,600+ SUBSCRIBERS",
      category: "COMMUNITY",
      icon: YoutubeIcon,
      desc: "Running a dedicated YouTube channel documenting full-stack AI development, graph database integration, hackathon architecture breakdowns, and system design.",
    },
  ];

  return (
    <section id="activities" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-16">
        <div className="flex items-center gap-2 text-xs font-mono text-terminal-green tracking-widest uppercase mb-2">
          <span>{"// 05. RECOGNITION & COMPETITION"}</span>
          <span className="w-12 h-px bg-terminal-green/40" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-cyber-white">
          <GlitchText text="ACTIVITIES &amp; MILESTONES" />
        </h2>
        <p className="text-sm sm:text-base text-cyber-muted max-w-2xl mt-2">
          High-pressure competitive hackathons, algorithmic benchmarks, and open engineering leadership.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activities.map((act, idx) => {
          const Icon = act.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 bg-cyber-surface/60 hover:bg-cyber-surface border border-cyber-border hover:border-terminal-green/40 rounded-2xl transition-all duration-300 relative overflow-hidden backdrop-blur-sm group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyber-void border border-cyber-border group-hover:border-terminal-green/50 flex items-center justify-center text-terminal-green transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyber-dim uppercase tracking-wider">
                      {act.category} • {act.date}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-cyber-white group-hover:text-terminal-green transition-colors">
                      {act.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="inline-block px-2.5 py-1 bg-terminal-green/10 border border-terminal-green/30 rounded text-xs font-mono text-terminal-green font-bold mb-3">
                {act.badge}
              </div>

              <p className="text-xs sm:text-sm text-cyber-muted font-sans leading-relaxed">
                {act.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
