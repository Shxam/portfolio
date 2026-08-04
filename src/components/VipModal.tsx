"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Check, Copy, Mail, Phone } from "lucide-react";
import { GithubIcon } from "./Icons";

interface VipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VipModal({ isOpen, onClose }: VipModalProps) {
  const [copied, setCopied] = useState(false);
  const email = "shamsai3469@gmail.com";
  const phone = "(+91) 9849202469";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-cyber-void/85 backdrop-blur-lg">
          <div className="absolute inset-0" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-cyber-void/95 border-2 border-terminal-green rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(57,255,136,0.3)] z-10 font-mono text-xs space-y-6"
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-terminal-green/30 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-terminal-green/10 border border-terminal-green/40 flex items-center justify-center text-terminal-green">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-terminal-green uppercase font-bold tracking-widest">
                    {"// PRIORITY LINE ACTIVATED"}
                  </div>
                  <h3 className="text-xl font-bold font-display text-cyber-white">
                    Direct VIP Contact Card
                  </h3>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-cyber-muted hover:text-cyber-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Candidate Identity */}
            <div className="p-4 bg-cyber-surface/70 border border-cyber-border rounded-2xl space-y-2">
              <div className="text-cyber-white font-bold text-sm">
                Pamarthi Sai Narasimham
              </div>
              <div className="text-terminal-green text-xs">
                Machine Learning &amp; AI Engineer &bull; SASTRA &apos;26
              </div>
              <p className="text-cyber-muted font-sans text-xs pt-1">
                Target Roles: AI Engineer, ML Engineer, GraphRAG Specialist, Full-Stack Developer (Remote / Global / Onsite).
              </p>
            </div>

            {/* Copy Email Button */}
            <div className="space-y-2">
              <span className="text-cyber-dim text-[10px] uppercase">
                ONE-TOUCH EMAIL DISPATCH:
              </span>
              <div className="flex items-center justify-between p-3.5 bg-cyber-surface border border-cyber-border rounded-xl">
                <span className="text-cyber-white font-bold">{email}</span>
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 bg-terminal-green text-cyber-void font-bold rounded-lg hover:bg-terminal-green/90 transition-colors flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Channel Links */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <a
                href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                className="p-3 bg-cyber-surface hover:bg-cyber-card border border-cyber-border rounded-xl flex items-center gap-2 text-cyber-white transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{phone}</span>
              </a>
              <a
                href="https://github.com/Shxam"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-cyber-surface hover:bg-cyber-card border border-cyber-border rounded-xl flex items-center gap-2 text-cyber-white transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-purple-400" />
                <span>GitHub Profile</span>
              </a>
            </div>

            {/* Direct Email Action */}
            <a
              href={`mailto:${email}?subject=VIP%20Interview%20Invitation%20for%20Sai%20Narasimham`}
              className="w-full py-3.5 bg-terminal-green hover:bg-terminal-green/90 text-cyber-void font-bold rounded-xl shadow-terminal-glow flex items-center justify-center gap-2 text-sm transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>SEND CALENDAR / EMAIL INVITATION</span>
            </a>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
