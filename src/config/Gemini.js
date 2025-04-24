import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyCQGylxkwRgqc-W-iqx8E90HxkOtNJVlyg",
});

async function main(propmt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: propmt,
  });
  console.log(response.text);
}

export default main;
