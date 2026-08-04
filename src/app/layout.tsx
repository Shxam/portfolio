import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Inter, Orbitron } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0F2C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sainarasimham.dev"),
  title: "Pamarthi Sai Narasimham | Machine Learning & AI Engineer",
  description:
    "Fresher ML/AI Engineer building production-ready AI systems with LLMs, GraphRAG, Neo4j, and robust backend engineering. SASTRA CSE 2026, 2.6k+ YouTube community.",
  keywords: [
    "Pamarthi Sai Narasimham",
    "Machine Learning Engineer",
    "AI Engineer",
    "GraphRAG",
    "LLMs",
    "LangChain",
    "FastAPI",
    "Neo4j",
    "Next.js",
    "Python AI Developer",
    "TigerGraph Hackathon Winner",
    "HackerRank Orchestrate",
  ],
  authors: [{ name: "Pamarthi Sai Narasimham", url: "https://github.com/Shxam" }],
  creator: "Pamarthi Sai Narasimham",
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://sainarasimham.dev",
    title: "Pamarthi Sai Narasimham — ML / AI Engineer",
    description:
      "Production-ready AI systems with LLMs, GraphRAG, vector stores, and backend engineering. Fresher who was told 'get experience first,' so I started building it myself.",
    siteName: "Pamarthi Sai Narasimham Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pamarthi Sai Narasimham — AI Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pamarthi Sai Narasimham | ML & AI Engineer",
    description:
      "Production AI systems, GraphRAG, LLMs, and backend engineering. 2.6k+ YouTube community.",
    creator: "@Shxam",
  },
  alternates: {
    canonical: "https://sainarasimham.dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://sainarasimham.dev/#person",
      "name": "Pamarthi Sai Narasimham",
      "givenName": "Sai Narasimham",
      "familyName": "Pamarthi",
      "jobTitle": "Machine Learning / AI Engineer",
      "description":
        "Machine Learning & AI Engineer building production-ready AI systems using LLMs, GraphRAG, graph databases, and backend engineering.",
      "url": "https://sainarasimham.dev",
      "email": "mailto:shamsai3469@gmail.com",
      "telephone": "+919849202469",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Andhra Pradesh",
        "addressCountry": "India"
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "SASTRA Deemed to be University",
        "sameAs": "https://www.sastra.edu/"
      },
      "sameAs": [
        "https://github.com/Shxam",
        "https://youtube.com/@Shxam",
        "https://linkedin.com/in/sai-narasimham"
      ],
      "knowsAbout": [
        "Large Language Models (LLMs)",
        "GraphRAG (Knowledge Graph RAG)",
        "Retrieval Augmented Generation",
        "FastAPI",
        "Docker",
        "Neo4j",
        "TigerGraph",
        "FAISS",
        "Pinecone",
        "PyTorch",
        "Full-Stack Development",
        "Next.js 14"
      ]
    },
    {
      "@type": "ProfilePage",
      "@id": "https://sainarasimham.dev/#webpage",
      "url": "https://sainarasimham.dev",
      "name": "Pamarthi Sai Narasimham — Portfolio & Engineering Showcase",
      "about": { "@id": "https://sainarasimham.dev/#person" },
      "isPartOf": {
        "@type": "WebSite",
        "name": "Pamarthi Sai Narasimham Portfolio",
        "url": "https://sainarasimham.dev"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="author" href="/llms.txt" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${orbitron.variable} font-sans bg-cyber-void text-cyber-white selection:bg-terminal-green selection:text-cyber-void relative min-h-screen`}
      >
        {/* Ambient background gradients and noise */}
        <div className="noise-overlay" aria-hidden="true" />
        <div className="scanline-overlay" aria-hidden="true" />
        <div className="vignette-layer" aria-hidden="true" />
        
        {/* Glow ambient background nodes */}
        <div className="fixed top-[-10vw] left-[-10vw] w-[40vw] h-[40vw] rounded-full bg-terminal-green/5 blur-[120px] pointer-events-none z-0" />
        <div className="fixed bottom-[-10vw] right-[-10vw] w-[45vw] h-[45vw] rounded-full bg-cyber-violet/5 blur-[140px] pointer-events-none z-0" />
        <div className="fixed top-[40vh] right-[10vw] w-[30vw] h-[30vw] rounded-full bg-terminal-cyan/5 blur-[130px] pointer-events-none z-0" />

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
