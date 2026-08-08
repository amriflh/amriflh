import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Server-side Gemini AI Client
  let aiClient: GoogleGenAI | null = null;
  function getGeminiClient(): GoogleGenAI {
    if (!aiClient) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("GEMINI_API_KEY is not set in environment variables.");
      }
      aiClient = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
    return aiClient;
  }

  // Health check
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Gemini API route: Generate Bio & SEO Pitch
  app.post("/api/generate-bio", async (req, res) => {
    try {
      const { name, role, skills, outdoorFocus, tone, language } = req.body;

      const ai = getGeminiClient();
      const prompt = `Write a professional, compelling, and trustworthy GitHub profile README introduction bio for a professional named "${name || "Writer & SEO Specialist"}".
      
Profile Details:
- Primary Role: ${role || "Penulis & SEO Specialist"}
- Specializations & Skills: ${skills || "Keyword Research, Content Strategy, On-Page SEO, Content Writing, Technical SEO, Copywriting"}
- Outdoor/Mountain Theme Angle: ${outdoorFocus || "Loves mountain climbing, trekking, alpine adventures, reaching new heights in organic rankings like reaching mountain peaks"}
- Tone: ${tone || "Professional, trustworthy, inspired by nature & mountain climbing"}
- Output Language: ${language || "Indonesian"}

Requirements:
1. Provide a main headline slogan with mountain/outdoor metaphor.
2. Provide a 2-paragraph professional bio intro that highlights expertise in writing & SEO, plus a touch of passion for hiking/outdoors.
3. Provide 3 bullet points of core value proposition for clients or collaborators.
4. Output in valid JSON format with keys: "tagline", "bioParagraphs" (array of strings), "valuePoints" (array of strings). Do NOT include markdown code fences in JSON string if possible, or format cleanly.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        },
      });

      const text = response.text || "{}";
      res.json({ success: true, data: JSON.parse(text) });
    } catch (error: any) {
      console.error("Error generating bio:", error);
      res.status(500).json({
        success: false,
        error: error.message || "Failed to generate AI profile bio.",
      });
    }
  });

  // Gemini API route: Generate Daily SEO/Writing Mountain Quotes
  app.post("/api/generate-quotes", async (req, res) => {
    try {
      const { theme } = req.body;
      const ai = getGeminiClient();
      const prompt = `Generate 5 inspiring daily quotes or actionable tips combining Mountain Climbing / Nature wisdom with SEO Strategy & Professional Writing.
Language: Indonesian & English (bilingual or Indonesian).
Return a JSON array of objects with keys: "quote", "author", "category" ("SEO Tip", "Writing Wisdom", "Mountain Motivation").`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        },
      });

      const text = response.text || "[]";
      res.json({ success: true, quotes: JSON.parse(text) });
    } catch (error: any) {
      console.error("Error generating quotes:", error);
      res.status(500).json({
        success: false,
        error: error.message || "Failed to generate quotes.",
      });
    }
  });

  // Vite middleware setup for dev vs production static serving
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
