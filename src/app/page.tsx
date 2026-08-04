"use client";

import React, { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsPhysicsSection from "@/components/SkillsPhysicsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import VipModal from "@/components/VipModal";

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [vipModalOpen, setVipModalOpen] = useState(false);

  // Global Cmd+K / Ctrl+K keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setTerminalOpen(false);
        setVipModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="min-h-screen bg-cyber-void relative overflow-hidden">
      {/* Cyber Preloader */}
      <Preloader onComplete={() => {}} />

      {/* Floating Glass Navbar */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Hero Section */}
      <HeroSection onOpenTerminal={() => setTerminalOpen(true)} />

      {/* About Section */}
      <AboutSection />

      {/* Matter.js 2D Physics Skills Arena */}
      <SkillsPhysicsSection />

      {/* Production Experience Section */}
      <ExperienceSection />

      {/* Flagship Projects Section */}
      <ProjectsSection />

      {/* Activities & Achievements Section */}
      <ActivitiesSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Terminal Command Palette Modal */}
      <CommandPalette
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onOpenContactModal={() => setVipModalOpen(true)}
      />

      {/* VIP Hire Me Modal */}
      <VipModal isOpen={vipModalOpen} onClose={() => setVipModalOpen(false)} />
    </main>
  );
}
