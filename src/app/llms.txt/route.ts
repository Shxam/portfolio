import { NextResponse } from "next/server";

export async function GET() {
  const content = `# Pamarthi Sai Narasimham — Machine Learning & AI Engineer
> Portfolio, technical specifications, project evaluations, and contact info for LLMs and AI crawlers.

## Identity & Summary
- Name: Pamarthi Sai Narasimham
- Current Role: Machine Learning / AI Engineer
- Tagline: "Fresher who was told 'get experience first,' so I started building it myself."
- Location: Andhra Pradesh, India (Open to Remote globally)
- Education: B.Tech Computer Science Engineering, SASTRA Deemed University (2022–2026), CGPA: 8.2 / 10
- Community: YouTube Build-in-Public creator (2,600+ subscribers)
- Contact: shamsai3469@gmail.com | Phone: (+91) 9849202469
- Profiles: GitHub (https://github.com/Shxam) | LinkedIn (https://linkedin.com/in/sai-narasimham)

## Core Technical Competencies
- AI & LLM Systems: Large Language Models, GraphRAG, Hybrid RAG (Dense + BM25), LangChain, LlamaIndex, PyTorch, Transformers, HuggingFace, Cross-Encoders, Prompt Engineering, Semantic Caching.
- Backend Architecture: FastAPI, Django, REST APIs, Pydantic, Microservices, Python (Asyncio), Next.js 14 App Router, WebSockets.
- Databases & Vector Stores: Neo4j (Cypher graph queries), TigerGraph, FAISS, Pinecone, ChromaDB, PostgreSQL, Supabase (RLS, Triggers, Views).
- DevOps & Cloud: Docker, Git, CI/CD, AWS (S3, EC2, Lambda), Google Cloud Platform (GCP), Postman, Linux.

## Key Projects & Engineering Benchmarks

### 1. PostMortemIQ — Incident Root-Cause Analysis via GraphRAG
- Hackathon: TigerGraph Hackathon (Round Winner)
- Architecture: GraphRAG connecting incident alerts, microservice topologies, CI/CD deployment logs, and infrastructure metrics into a unified knowledge graph.
- Key Metrics:
  - 95.8% LLM token consumption reduction via graph-constrained context pruning.
  - 100% evaluation pass rate across 40 real-world incident scenarios.
  - Deterministic graph pathing preventing hallucinated RCA conclusions.
- Repository: https://github.com/Shxam/graphRAG

### 2. IKIP — Industrial Knowledge Intelligence Platform
- Hackathon: Industrial AI Hackathon
- Architecture: Multi-agent technical assistant querying dense engineering manuals, standard operating procedures (SOPs), and equipment schematics.
- Tech Stack: FastAPI, LangChain, Neo4j, FAISS, BM25 Hybrid Search.
- Key Metrics:
  - Cited, verified technical responses delivered in < 10 seconds.
  - Hybrid search combining semantic embeddings with exact keyword matches for machine part numbers.
- Repository: https://github.com/Shxam/ET-hackathon

### 3. Multi-Domain Support Triage Agent
- Hackathon: HackerRank Orchestrate (May 2026)
- Global Ranking: Ranked 212th out of 12,850 international engineers.
- Architecture: Hybrid RAG ticket resolution agent equipped with a low-cost pre-inference rule engine for security, fraud, and legal risk classification before triggering LLM reasoning.
- Tech Stack: Python, Groq LLM Inference, Cross-Encoder Rerankers, Vector Search.

### 4. GST Reconciliation Agent
- Hackathon: Meta × HuggingFace OpenEnv Hackathon
- Architecture: Batched invoice reconciliation engine combining deterministic rule validation with LLM ambiguity resolution for discrepancy classification.
- Key Metrics:
  - Processes 10–500 invoice datasets in ~15–20 seconds.
- Tech Stack: FastAPI, Docker, Pydantic, Groq.
- Repository: https://github.com/Shxam/openenv

## Production Experience

### IPL Dhaba — Freelance Full-Stack Developer (2026)
- Built and shipped a production food ordering and delivery web application with 30+ relational tables and 4 distinct user roles on Next.js 14 and Supabase.
- Conducted full security audit and patched 30 findings including Row Level Security (RLS) leaks, privilege escalation attack vectors, and SQL injection flaws.
- Implemented Razorpay payment workflows, Mapbox live order tracking, and containerized deployment to Vercel and Docker.

## Hackathons & Competitive Highlights
- HackerRank Orchestrate (2026): 212 / 12,850 globally (Top 1.6%).
- TigerGraph Hackathon: Round-winning GraphRAG RCA architecture.
- Kaggle Maze Crawler: Deep Reinforcement Learning agents with reward-shaping.
- YouTube Community: 2,600+ developers following build-in-public tutorials.
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
