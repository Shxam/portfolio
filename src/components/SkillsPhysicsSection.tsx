"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, RefreshCw, Zap, Smartphone, Monitor } from "lucide-react";
import GlitchText from "./GlitchText";

interface SkillItem {
  id: string;
  name: string;
  category: "Programming" | "AI/ML" | "Backend" | "Databases" | "Cloud";
  color: string;
  bg: string;
  border: string;
}

const SKILLS_DATA: SkillItem[] = [
  // Programming
  { id: "py", name: "Python", category: "Programming", color: "#F59E0B", bg: "rgba(245, 158, 11, 0.15)", border: "rgba(245, 158, 11, 0.5)" },
  { id: "cpp", name: "C++", category: "Programming", color: "#F59E0B", bg: "rgba(245, 158, 11, 0.15)", border: "rgba(245, 158, 11, 0.5)" },
  { id: "sql", name: "SQL", category: "Programming", color: "#F59E0B", bg: "rgba(245, 158, 11, 0.15)", border: "rgba(245, 158, 11, 0.5)" },
  { id: "ts", name: "JavaScript / TypeScript", category: "Programming", color: "#F59E0B", bg: "rgba(245, 158, 11, 0.15)", border: "rgba(245, 158, 11, 0.5)" },

  // AI / ML
  { id: "pytorch", name: "PyTorch", category: "AI/ML", color: "#39FF88", bg: "rgba(57, 255, 136, 0.18)", border: "rgba(57, 255, 136, 0.6)" },
  { id: "transformers", name: "Transformers", category: "AI/ML", color: "#39FF88", bg: "rgba(57, 255, 136, 0.18)", border: "rgba(57, 255, 136, 0.6)" },
  { id: "rag", name: "GraphRAG & RAG", category: "AI/ML", color: "#39FF88", bg: "rgba(57, 255, 136, 0.18)", border: "rgba(57, 255, 136, 0.6)" },
  { id: "langchain", name: "LangChain", category: "AI/ML", color: "#39FF88", bg: "rgba(57, 255, 136, 0.18)", border: "rgba(57, 255, 136, 0.6)" },
  { id: "llamaindex", name: "LlamaIndex", category: "AI/ML", color: "#39FF88", bg: "rgba(57, 255, 136, 0.18)", border: "rgba(57, 255, 136, 0.6)" },
  { id: "sklearn", name: "scikit-learn", category: "AI/ML", color: "#39FF88", bg: "rgba(57, 255, 136, 0.18)", border: "rgba(57, 255, 136, 0.6)" },

  // Backend & DevOps
  { id: "fastapi", name: "FastAPI", category: "Backend", color: "#00F0FF", bg: "rgba(0, 240, 255, 0.15)", border: "rgba(0, 240, 255, 0.5)" },
  { id: "django", name: "Django", category: "Backend", color: "#00F0FF", bg: "rgba(0, 240, 255, 0.15)", border: "rgba(0, 240, 255, 0.5)" },
  { id: "docker", name: "Docker", category: "Backend", color: "#00F0FF", bg: "rgba(0, 240, 255, 0.15)", border: "rgba(0, 240, 255, 0.5)" },
  { id: "rest", name: "REST APIs", category: "Backend", color: "#00F0FF", bg: "rgba(0, 240, 255, 0.15)", border: "rgba(0, 240, 255, 0.5)" },
  { id: "git", name: "Git", category: "Backend", color: "#00F0FF", bg: "rgba(0, 240, 255, 0.15)", border: "rgba(0, 240, 255, 0.5)" },

  // Databases & Vector Stores
  { id: "neo4j", name: "Neo4j", category: "Databases", color: "#A855F7", bg: "rgba(168, 85, 247, 0.18)", border: "rgba(168, 85, 247, 0.6)" },
  { id: "faiss", name: "FAISS", category: "Databases", color: "#A855F7", bg: "rgba(168, 85, 247, 0.18)", border: "rgba(168, 85, 247, 0.6)" },
  { id: "pinecone", name: "Pinecone", category: "Databases", color: "#A855F7", bg: "rgba(168, 85, 247, 0.18)", border: "rgba(168, 85, 247, 0.6)" },
  { id: "chroma", name: "ChromaDB", category: "Databases", color: "#A855F7", bg: "rgba(168, 85, 247, 0.18)", border: "rgba(168, 85, 247, 0.6)" },
  { id: "supabase", name: "Supabase (RLS)", category: "Databases", color: "#A855F7", bg: "rgba(168, 85, 247, 0.18)", border: "rgba(168, 85, 247, 0.6)" },
  { id: "postgres", name: "PostgreSQL", category: "Databases", color: "#A855F7", bg: "rgba(168, 85, 247, 0.18)", border: "rgba(168, 85, 247, 0.6)" },

  // Cloud & Tools
  { id: "aws", name: "AWS (S3 / Lambda)", category: "Cloud", color: "#F43F5E", bg: "rgba(244, 63, 94, 0.15)", border: "rgba(244, 63, 94, 0.5)" },
  { id: "gcp", name: "Google Cloud", category: "Cloud", color: "#F43F5E", bg: "rgba(244, 63, 94, 0.15)", border: "rgba(244, 63, 94, 0.5)" },
  { id: "postman", name: "Postman", category: "Cloud", color: "#F43F5E", bg: "rgba(244, 63, 94, 0.15)", border: "rgba(244, 63, 94, 0.5)" },
  { id: "powerbi", name: "Power BI", category: "Cloud", color: "#F43F5E", bg: "rgba(244, 63, 94, 0.15)", border: "rgba(244, 63, 94, 0.5)" },
];

const CATEGORIES = ["ALL", "Programming", "AI/ML", "Backend", "Databases", "Cloud"] as const;

export default function SkillsPhysicsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [zeroGravity, setZeroGravity] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const matterModuleRef = useRef<typeof import("matter-js") | null>(null);
  const engineRef = useRef<import("matter-js").Engine | null>(null);
  const runnerRef = useRef<import("matter-js").Runner | null>(null);
  const bodiesMapRef = useRef<{ body: import("matter-js").Body; skill: SkillItem }[]>([]);

  // Check screen size to toggle between Physics and Mobile Grid
  useEffect(() => {
    const checkScreen = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Initialize Matter.js on desktop
  useEffect(() => {
    if (isMobileView || !canvasRef.current || !canvasContainerRef.current) return;

    let animationFrameId: number;

    const initPhysics = async () => {
      const Matter = await import("matter-js");
      matterModuleRef.current = Matter;
      const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint } = Matter;

      const container = canvasContainerRef.current!;
      const width = container.clientWidth || 900;
      const height = 480;

      const canvas = canvasRef.current!;
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d")!;

      // Create engine
      const engine = Engine.create({
        gravity: { x: 0, y: zeroGravity ? -0.2 : 0.9, scale: 0.001 },
      });
      engineRef.current = engine;

      // Create walls
      const wallOptions = { isStatic: true, render: { visible: false } };
      const ground = Bodies.rectangle(width / 2, height + 30, width * 2, 60, wallOptions);
      const leftWall = Bodies.rectangle(-30, height / 2, 60, height * 2, wallOptions);
      const rightWall = Bodies.rectangle(width + 30, height / 2, 60, height * 2, wallOptions);
      const ceiling = Bodies.rectangle(width / 2, -100, width * 2, 60, wallOptions);

      Composite.add(engine.world, [ground, leftWall, rightWall, ceiling]);

      // Create skill pill bodies
      bodiesMapRef.current = [];
      const pillBodies: import("matter-js").Body[] = [];

      SKILLS_DATA.forEach((skill, index) => {
        const textWidth = Math.max(skill.name.length * 9.5 + 32, 90);
        const pillHeight = 36;
        const startX = 60 + (index % 8) * (width / 9) + (Math.random() * 30 - 15);
        const startY = -40 - Math.floor(index / 8) * 60 - Math.random() * 40;

        const body = Bodies.rectangle(startX, startY, textWidth, pillHeight, {
          chamfer: { radius: 18 },
          restitution: 0.45,
          friction: 0.25,
          frictionAir: 0.015,
          angle: (Math.random() - 0.5) * 0.4,
        });

        bodiesMapRef.current.push({ body, skill });
        pillBodies.push(body);
      });

      Composite.add(engine.world, pillBodies);

      // Mouse drag constraint
      const mouse = Mouse.create(canvas);
      const mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: {
          stiffness: 0.2,
          render: { visible: false },
        },
      });
      Composite.add(engine.world, mouseConstraint);

      // Runner
      const runner = Runner.create();
      runnerRef.current = runner;
      Runner.run(runner, engine);

      // Custom high-performance 2D Canvas rendering loop
      const renderLoop = () => {
        ctx.clearRect(0, 0, width, height);

        // Draw pills
        bodiesMapRef.current.forEach(({ body, skill }) => {
          const { x, y } = body.position;
          const angle = body.angle;
          const textWidth = Math.max(skill.name.length * 9.5 + 32, 90);
          const pillHeight = 36;

          const isMatchingCategory =
            selectedCategory === "ALL" || skill.category === selectedCategory;

          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(angle);

          // Draw rounded pill background
          ctx.beginPath();
          ctx.roundRect(-textWidth / 2, -pillHeight / 2, textWidth, pillHeight, 18);
          ctx.fillStyle = isMatchingCategory ? skill.bg : "rgba(14, 21, 56, 0.4)";
          ctx.fill();

          // Border & Glow
          ctx.lineWidth = isMatchingCategory ? 1.5 : 1;
          ctx.strokeStyle = isMatchingCategory ? skill.border : "rgba(30, 42, 94, 0.4)";
          ctx.stroke();

          // Text label
          ctx.font = "bold 11px JetBrains Mono, monospace";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = isMatchingCategory ? "#F2F2ED" : "rgba(138, 147, 178, 0.4)";
          ctx.fillText(skill.name, 0, 1);

          ctx.restore();
        });

        animationFrameId = requestAnimationFrame(renderLoop);
      };

      renderLoop();
    };

    initPhysics();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (runnerRef.current && matterModuleRef.current) {
        matterModuleRef.current.Runner.stop(runnerRef.current);
      }
      if (engineRef.current && matterModuleRef.current) {
        matterModuleRef.current.Engine.clear(engineRef.current);
      }
    };
  }, [isMobileView, zeroGravity, selectedCategory]);

  const handleResetPhysics = () => {
    const Matter = matterModuleRef.current;
    if (!engineRef.current || isMobileView || !Matter) return;

    bodiesMapRef.current.forEach(({ body }, index) => {
      const container = canvasContainerRef.current;
      const width = container ? container.clientWidth : 900;
      const startX = 60 + (index % 8) * (width / 9) + (Math.random() * 20 - 10);
      const startY = -40 - Math.floor(index / 8) * 50;

      Matter.Body.setPosition(body, { x: startX, y: startY });
      Matter.Body.setVelocity(body, { x: (Math.random() - 0.5) * 4, y: Math.random() * 2 });
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.1);
    });
  };

  const handleImpulse = () => {
    const Matter = matterModuleRef.current;
    if (!engineRef.current || isMobileView || !Matter) return;

    bodiesMapRef.current.forEach(({ body }) => {
      Matter.Body.applyForce(
        body,
        body.position,
        {
          x: (Math.random() - 0.5) * 0.08,
          y: -0.05 - Math.random() * 0.08,
        }
      );
    });
  };

  const filteredSkills =
    selectedCategory === "ALL"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-terminal-green tracking-widest uppercase mb-2">
            <span>{"// 02. TECHNICAL MATRIX"}</span>
            <span className="w-12 h-px bg-terminal-green/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-cyber-white">
            <GlitchText text="CORE CAPABILITIES" />
          </h2>
          <p className="text-sm sm:text-base text-cyber-muted max-w-xl mt-2">
            Interactive 2D physics arena. Drag, flick, and collide skills with realistic gravity.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? "bg-terminal-green text-cyber-void font-bold shadow-terminal-glow"
                  : "bg-cyber-surface/80 hover:bg-cyber-card border border-cyber-border text-cyber-muted hover:text-cyber-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Physics Arena Box (Desktop) or Mobile Grid */}
      {!isMobileView ? (
        <div className="relative rounded-2xl bg-cyber-void/80 border border-cyber-border overflow-hidden shadow-2xl backdrop-blur-md">
          {/* Top Arena Bar */}
          <div className="flex items-center justify-between px-5 py-3 bg-cyber-surface/90 border-b border-cyber-border font-mono text-xs text-cyber-muted">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
              <span>MATTER.JS 2D PHYSICS ENGINE [DRAG &amp; TOSS PILLS]</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleImpulse}
                className="flex items-center gap-1 text-cyber-dim hover:text-terminal-cyan px-2.5 py-1 rounded border border-cyber-border hover:border-terminal-cyan/50 transition-colors"
                title="Apply upward blast impulse"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>IMPULSE</span>
              </button>
              <button
                onClick={() => setZeroGravity(!zeroGravity)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded border transition-colors ${
                  zeroGravity
                    ? "bg-terminal-green/20 text-terminal-green border-terminal-green"
                    : "text-cyber-dim hover:text-cyber-white border-cyber-border"
                }`}
                title="Toggle Zero-G mode"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{zeroGravity ? "ZERO-G: ON" : "ZERO-G"}</span>
              </button>
              <button
                onClick={handleResetPhysics}
                className="flex items-center gap-1 text-cyber-dim hover:text-terminal-green px-2.5 py-1 rounded border border-cyber-border hover:border-terminal-green transition-colors"
                title="Reset physics simulation"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>RESET</span>
              </button>
            </div>
          </div>

          {/* Interactive Canvas */}
          <div ref={canvasContainerRef} className="w-full h-[480px] relative bg-cyber-grid bg-[size:24px_24px]">
            <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
          </div>

          {/* Bottom helper */}
          <div className="px-5 py-2.5 bg-cyber-surface/40 border-t border-cyber-border/60 flex items-center justify-between text-[11px] font-mono text-cyber-dim">
            <span className="flex items-center gap-1.5">
              <Monitor className="w-3.5 h-3.5 text-terminal-green" />
              Hover &amp; drag any skill pill to toss it across the arena
            </span>
            <span>24 Production Technologies Indexed</span>
          </div>
        </div>
      ) : (
        /* Mobile Touch-Optimized Grid */
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-terminal-green bg-cyber-surface p-3 rounded-xl border border-cyber-border">
            <Smartphone className="w-4 h-4" />
            <span>MOBILE VIEW: TAP CAPSULES TO REVEAL SPECIFICATIONS</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-3 rounded-xl border font-mono text-xs text-center flex flex-col items-center justify-center transition-all cursor-pointer"
                style={{
                  backgroundColor: skill.bg,
                  borderColor: skill.border,
                  color: "#F2F2ED",
                }}
              >
                <span className="font-bold text-xs">{skill.name}</span>
                <span className="text-[9px] text-cyber-dim mt-1 uppercase tracking-wider">
                  {skill.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Category Legend */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-3 font-mono text-xs">
        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-cyber-surface/50 border border-cyber-border">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
          <span className="text-cyber-muted">Programming</span>
        </div>
        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-cyber-surface/50 border border-cyber-border">
          <span className="w-2.5 h-2.5 rounded-full bg-terminal-green" />
          <span className="text-cyber-muted">AI / ML / RAG</span>
        </div>
        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-cyber-surface/50 border border-cyber-border">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
          <span className="text-cyber-muted">Backend &amp; DevOps</span>
        </div>
        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-cyber-surface/50 border border-cyber-border">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
          <span className="text-cyber-muted">Vector &amp; Graph DBs</span>
        </div>
        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-cyber-surface/50 border border-cyber-border">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
          <span className="text-cyber-muted">Cloud &amp; Analytics</span>
        </div>
      </div>
    </section>
  );
}
