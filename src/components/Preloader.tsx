"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LOGS = [
  "INITIALIZING QUANTUM KERNEL v4.19-AI...",
  "ALLOCATING EMBEDDING BUFFERS [FAISS / PINECONE]... OK",
  "CONNECTING TO NEO4J KNOWLEDGE GRAPH CLUSTER... 200 OK",
  "LOADING HYBRID RAG & CROSS-ENCODER WEIGHTS... 100%",
  "VERIFYING SYSTEM AGENTS: POSTMORTEM-IQ, IKIP, TRIAGE-AGENT... OK",
  "PAMARTHI SAI NARASIMHAM // SYSTEM ONLINE.",
];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Check if user has already visited in this session
    const hasLoaded = sessionStorage.getItem("sai_portfolio_loaded");
    if (hasLoaded === "true") {
      onComplete();
      setIsFinished(true);
      return;
    }

    let currentLogIndex = 0;
    const logInterval = setInterval(() => {
      if (currentLogIndex < BOOT_LOGS.length) {
        setLogs((prev) => [...prev, BOOT_LOGS[currentLogIndex]]);
        currentLogIndex++;
        setProgress((currentLogIndex / BOOT_LOGS.length) * 100);
      } else {
        clearInterval(logInterval);
        setTimeout(() => {
          sessionStorage.setItem("sai_portfolio_loaded", "true");
          setIsFinished(true);
          onComplete();
        }, 500);
      }
    }, 240);

    return () => clearInterval(logInterval);
  }, [onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem("sai_portfolio_loaded", "true");
    setIsFinished(true);
    onComplete();
  };

  if (isFinished) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
        }}
        className="fixed inset-0 z-50 bg-cyber-void flex flex-col justify-between p-6 sm:p-12 font-mono select-none overflow-hidden"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-cyber-border/50 pb-4 text-xs text-cyber-muted">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-terminal-green animate-pulse" />
            <span className="text-cyber-white tracking-wider">SYSTEM_BOOT_SEQUENCE</span>
          </div>
          <button
            onClick={handleSkip}
            className="text-xs text-terminal-green/80 hover:text-terminal-green px-3 py-1 border border-terminal-green/30 hover:border-terminal-green rounded transition-colors"
          >
            [ESC] SKIP INTRO →
          </button>
        </div>

        {/* Center log console */}
        <div className="max-w-2xl w-full my-auto space-y-3">
          <div className="text-xs uppercase tracking-widest text-terminal-green/80 mb-2">
            {"// BOOTING NEURAL INTERFACE"}
          </div>
          <div className="space-y-2 min-h-[140px] text-xs sm:text-sm text-cyber-white/90">
            {logs.map((log, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2"
              >
                <span className="text-terminal-green">›</span>
                <span>{log}</span>
              </motion.div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-8 space-y-2">
            <div className="flex justify-between text-xs text-cyber-muted">
              <span>LOADING MEMORY CORE</span>
              <span className="text-terminal-green font-bold">{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-1 bg-cyber-surface rounded-full overflow-hidden border border-cyber-border">
              <motion.div
                className="h-full bg-gradient-to-r from-terminal-greenDim to-terminal-green shadow-terminal-glow"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="flex items-center justify-between text-xs text-cyber-dim border-t border-cyber-border/40 pt-4">
          <span>IDENTITY: PAMARTHI SAI NARASIMHAM</span>
          <span className="font-mono text-terminal-green">CORE: ONLINE</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
