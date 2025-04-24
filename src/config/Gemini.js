import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_API_KEY,
});

async function main(propmt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: propmt,
  });
  console.log(response.text);
}

export default main;
