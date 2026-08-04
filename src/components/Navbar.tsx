"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Menu, X, ArrowUpRight } from "lucide-react";
import GlitchText from "./GlitchText";

interface NavbarProps {
  onOpenTerminal: () => void;
}

export default function Navbar({ onOpenTerminal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "ACTIVITIES", href: "#activities" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-cyber-void/85 backdrop-blur-md border-b border-cyber-border/80 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Monogram */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded border border-cyber-border group-hover:border-terminal-green bg-cyber-surface flex items-center justify-center font-mono font-bold text-xs text-terminal-green transition-all shadow-sm">
            SN
          </div>
          <div className="flex flex-col">
            <span className="font-mono font-bold text-xs tracking-wider text-cyber-white group-hover:text-terminal-green transition-colors">
              SAI NARASIMHAM
            </span>
            <div className="flex items-center gap-1.5 text-[10px] text-cyber-muted font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-terminal-green animate-pulse" />
              <span className="text-terminal-green/90">AVAILABLE FOR ROLES</span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono tracking-wider text-cyber-muted">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-cyber-white transition-colors py-1 group relative"
            >
              <span className="text-terminal-green opacity-0 group-hover:opacity-100 transition-opacity mr-1">
                {"//"}
              </span>
              <GlitchText text={link.name} />
            </a>
          ))}
        </nav>

        {/* Action cluster */}
        <div className="flex items-center gap-3">
          {/* Terminal Command Button */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-2 bg-cyber-surface hover:bg-cyber-card border border-cyber-border hover:border-terminal-green text-cyber-white hover:text-terminal-green px-3 py-1.5 rounded-md text-xs font-mono transition-all shadow-sm group"
            title="Open Command Palette (Cmd + K)"
          >
            <Terminal className="w-3.5 h-3.5 text-terminal-green group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">TERMINAL</span>
            <kbd className="bg-cyber-void px-1.5 py-0.5 rounded border border-cyber-border/60 text-[10px] text-cyber-muted group-hover:text-terminal-green">
              ⌘K
            </kbd>
          </button>

          {/* Quick Contact Link */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-1 bg-terminal-green/10 hover:bg-terminal-green/20 text-terminal-green border border-terminal-green/40 hover:border-terminal-green px-3 py-1.5 rounded-md text-xs font-mono transition-all shadow-sm"
          >
            <span>HIRE ME</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-cyber-muted hover:text-cyber-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cyber-void/95 border-b border-cyber-border px-6 py-5 font-mono text-sm space-y-4 backdrop-blur-xl">
          <div className="text-[11px] text-terminal-green uppercase tracking-widest pb-1 border-b border-cyber-border/40">
            {"// NAVIGATION MENU"}
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-cyber-muted hover:text-terminal-green transition-colors py-1"
            >
              <span className="text-terminal-green mr-2">&gt;</span>
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-cyber-surface border border-cyber-border text-terminal-green py-2 rounded text-xs"
            >
              <Terminal className="w-4 h-4" />
              OPEN TERMINAL PALETTE (⌘K)
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-terminal-green text-cyber-void font-bold py-2 rounded text-xs"
            >
              GET IN TOUCH →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
