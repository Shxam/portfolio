"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Terminal, X, CornerDownLeft, Sparkles, Copy, Check, ExternalLink } from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContactModal?: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
  time: string;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onOpenContactModal,
}: CommandPaletteProps) {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: "welcome",
      output: (
        <span className="text-cyber-muted">
          Type <span className="text-terminal-green font-bold">help</span> to view available system commands, or try <span className="text-terminal-green font-bold">sudo hire-me</span>.
        </span>
      ),
      time: "00:00:01",
    },
  ]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const historyEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  useEffect(() => {
    historyEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const getTimeString = () => {
    const now = new Date();
    return now.toTimeString().split(" ")[0];
  };

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    const time = getTimeString();

    if (trimmed === "clear" || trimmed === "cls") {
      setHistory([]);
      setInput("");
      return;
    }

    let outputNode: React.ReactNode = null;

    switch (trimmed) {
      case "help":
        outputNode = (
          <div className="space-y-1 text-xs text-cyber-muted">
            <p className="text-terminal-green font-bold">{"// SYSTEM COMMAND PALETTE"}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
              <div><span className="text-terminal-green">about</span> - About Sai & Architecture</div>
              <div><span className="text-terminal-green">skills</span> - Physics Skills Arena</div>
              <div><span className="text-terminal-green">projects</span> - Production Systems & Benchmarks</div>
              <div><span className="text-terminal-green">experience</span> - Full-Stack IPL Dhaba Audit</div>
              <div><span className="text-terminal-green">activities</span> - Hackathons & YouTube</div>
              <div><span className="text-terminal-green">contact</span> - Email & Direct Links</div>
              <div><span className="text-terminal-green">sudo hire-me</span> - ⭐ Priority VIP Direct Line</div>
              <div><span className="text-terminal-green">cat llms.txt</span> - View AI crawler specs</div>
              <div><span className="text-terminal-green">matrix</span> - Digital rain Easter egg</div>
              <div><span className="text-terminal-green">clear</span> - Clear console output</div>
            </div>
          </div>
        );
        break;

      case "about":
      case "skills":
      case "projects":
      case "experience":
      case "activities":
      case "contact": {
        const targetElement = document.getElementById(trimmed);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
          outputNode = (
            <span className="text-terminal-green">
              Navigating to section: #{trimmed}... [OK]
            </span>
          );
          setTimeout(() => {
            onClose();
          }, 400);
        } else {
          outputNode = <span className="text-red-400">Target section not found.</span>;
        }
        break;
      }

      case "sudo hire-me":
      case "hire":
      case "hire-me": {
        // Trigger celebratory confetti blast
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#39FF88", "#00F0FF", "#A855F7", "#F59E0B"],
        });

        outputNode = (
          <div className="p-3 bg-terminal-green/10 border border-terminal-green/40 rounded space-y-2">
            <div className="flex items-center gap-2 text-terminal-green font-bold">
              <Sparkles className="w-4 h-4" />
              <span>ACCESS LEVEL: VIP CANDIDATE ENGAGEMENT</span>
            </div>
            <p className="text-cyber-white text-xs">
              Direct Contact: <span className="text-terminal-green font-mono">shamsai3469@gmail.com</span> | (+91) 9849202469
            </p>
            <p className="text-cyber-muted text-xs">
              Status: Available for ML/AI Engineer & Full-Stack roles (Full-time / Remote / Relocation).
            </p>
          </div>
        );

        if (onOpenContactModal) {
          setTimeout(() => {
            onOpenContactModal();
          }, 300);
        }
        break;
      }

      case "cat llms.txt":
      case "llms.txt":
      case "llm": {
        outputNode = (
          <div className="space-y-1.5 text-xs text-cyber-muted font-mono bg-cyber-surface/50 p-2.5 rounded border border-cyber-border">
            <p className="text-terminal-green font-bold">{"// LLM AGENT CONTEXT INDEX (llms.txt)"}</p>
            <p>NAME: Pamarthi Sai Narasimham</p>
            <p>ROLE: Machine Learning / AI Engineer (LLMs, GraphRAG, Neo4j, FastAPI)</p>
            <p>BENCHMARK: 95.8% token reduction in PostMortemIQ | 100% eval pass rate</p>
            <p>HACKATHONS: HackerRank Orchestrate (212/12,850), TigerGraph Round Winner</p>
            <a
              href="/llms.txt"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-terminal-green hover:underline pt-1"
            >
              View raw endpoint /llms.txt <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        );
        break;
      }

      case "matrix": {
        confetti({
          particleCount: 50,
          spread: 120,
          colors: ["#39FF88", "#10B981"],
        });
        outputNode = (
          <span className="text-terminal-green animate-pulse">
            Wake up, Neo... The Matrix has you. Follow the green cursor.
          </span>
        );
        break;
      }

      default:
        outputNode = (
          <span className="text-red-400">
            command not found: `{trimmed}`. Type <span className="text-terminal-green">help</span> for a list of commands.
          </span>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        command: cmdStr,
        output: outputNode,
        time,
      },
    ]);
    setInput("");
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("shamsai3469@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-cyber-void/80 backdrop-blur-md">
          {/* Backdrop click to close */}
          <div className="absolute inset-0" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="relative w-full max-w-2xl bg-cyber-void/95 border border-cyber-border rounded-xl shadow-2xl overflow-hidden font-mono z-10 flex flex-col max-h-[80vh]"
          >
            {/* Terminal Top Window Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-cyber-surface/90 border-b border-cyber-border">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-terminal-green inline-block shadow-sm" />
                <span className="text-xs text-cyber-muted ml-2 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-terminal-green" />
                  sai@terminal-ai-kernel: ~
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1 text-[11px] text-cyber-muted hover:text-terminal-green px-2 py-0.5 border border-cyber-border rounded transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-terminal-green" />
                      <span className="text-terminal-green">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>COPY EMAIL</span>
                    </>
                  )}
                </button>
                <button
                  onClick={onClose}
                  className="text-cyber-muted hover:text-cyber-white p-1 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Terminal History output */}
            <div className="p-4 overflow-y-auto space-y-3 flex-1 min-h-[220px] max-h-[360px] text-xs">
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 text-cyber-dim">
                    <span className="text-terminal-green font-bold">sai@ai:~$</span>
                    <span className="text-cyber-white">{item.command}</span>
                    <span className="text-[10px] ml-auto">{item.time}</span>
                  </div>
                  <div className="pl-4">{item.output}</div>
                </div>
              ))}
              <div ref={historyEndRef} />
            </div>

            {/* Interactive Command Input Box */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                executeCommand(input);
              }}
              className="flex items-center gap-2 px-4 py-3 bg-cyber-surface/60 border-t border-cyber-border"
            >
              <span className="text-terminal-green font-bold text-sm">›</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type a command ('help', 'sudo hire-me', 'projects', 'about')..."
                className="flex-1 bg-transparent text-sm text-cyber-white placeholder:text-cyber-dim focus:outline-none font-mono"
              />
              <button
                type="submit"
                className="text-xs bg-terminal-green/10 hover:bg-terminal-green/20 text-terminal-green border border-terminal-green/30 hover:border-terminal-green px-2.5 py-1 rounded flex items-center gap-1 transition-colors"
              >
                <span>RUN</span>
                <CornerDownLeft className="w-3 h-3" />
              </button>
            </form>

            {/* Bottom quick shortcut hints */}
            <div className="flex items-center justify-between px-4 py-2 bg-cyber-void text-[10px] text-cyber-dim border-t border-cyber-border/40">
              <span>Shortcuts: Press ESC to close</span>
              <span>Try: sudo hire-me</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
