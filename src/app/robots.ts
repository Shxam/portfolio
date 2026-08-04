import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "GPTBot",
        allow: ["/", "/llms.txt"],
      },
      {
        userAgent: "ClaudeBot",
        allow: ["/", "/llms.txt"],
      },
      {
        userAgent: "PerplexityBot",
        allow: ["/", "/llms.txt"],
      },
    ],
    sitemap: "https://sainarasimham.dev/sitemap.xml",
  };
}
