"use client";

import React from "react";
import { ArrowUp, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon, YoutubeIcon } from "./Icons";

export default function Footer({ onOpenTerminal }: { onOpenTerminal: () => void }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-cyber-border/80 bg-cyber-void py-12 px-4 sm:px-6 lg:px-8 font-mono text-xs text-cyber-muted">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left identity & status */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
            <span className="text-cyber-white font-bold">PAMARTHI SAI NARASIMHAM</span>
          </div>
          <span className="hidden sm:inline text-cyber-dim">|</span>
          <span className="text-cyber-dim">ML / AI ENGINEER &bull; SASTRA &apos;26</span>
        </div>

        {/* Center Quick Links */}
        <div className="flex items-center gap-4 text-cyber-muted">
          <a
            href="https://github.com/Shxam"
            target="_blank"
            rel="noreferrer"
            className="hover:text-terminal-green transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/pamarthi-sai-narasimham-28b356400/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-terminal-green transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="https://youtube.com/@Shxam"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-400 transition-colors"
          >
            <YoutubeIcon className="w-4 h-4" />
          </a>
          <a
            href="/llms.txt"
            target="_blank"
            rel="noreferrer"
            className="hover:text-terminal-green transition-colors text-[11px]"
          >
            /llms.txt
          </a>
        </div>

        {/* Right action */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-cyber-surface hover:bg-cyber-card border border-cyber-border text-cyber-muted hover:text-terminal-green transition-colors"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>COMMANDS</span>
          </button>
          <button
            onClick={scrollToTop}
            className="p-2 rounded bg-cyber-surface hover:bg-cyber-card border border-cyber-border text-cyber-muted hover:text-cyber-white transition-colors"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-cyber-border/40 text-center text-[10px] text-cyber-dim">
        Designed &amp; Engineered with Next.js 14, Tailwind CSS, Matter.js &amp; Framer Motion. Zero templates.
      </div>
    </footer>
  );
}
