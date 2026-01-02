import { GoogleGenAI } from "@google/genai";

const API = import.meta.env.VITE_GEMINI_API_KEY;


export async function runGemini(prompt) {
  const ai = new GoogleGenAI({
    apiKey: API,
  });

  const config = {
    thinkingConfig: { thinkingBudget: -1 },
  };

  const model = "gemini-flash-latest";

  const contents = [
    { role: "user", parts: [{ text: prompt }] },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  let text = "";
  for await (const chunk of response) {
    if (chunk.text) text += chunk.text;
  }

  return text.trim();
}
