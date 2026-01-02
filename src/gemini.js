import { GoogleGenAI } from "@google/genai";

const API = "AIzaSyCBnXK6oQakmwuJlajp_VkxRPEaD2V8ZCQ";

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
