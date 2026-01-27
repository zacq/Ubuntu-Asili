
import { GoogleGenAI } from "@google/genai";

// Fixed: Initialize GoogleGenAI with exactly the required configuration
const apiKey = process.env.API_KEY;

export const getRelocationAdvice = async (userPrompt: string) => {
  if (!apiKey) {
    console.warn("Gemini API Key is not set.");
    return "The AI service is currently unavailable (API Key missing). Please contact support or book a consultation.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: userPrompt }]
        }
      ],
      config: {
        systemInstruction: {
          parts: [{ text: `
          You are the Ubuntu Asili Africa Assistant. 
          Your tone is calm, dignified, grounded, and authoritative. 
          You represent a business that helps African American women relocate to Africa and own land safely.
          Keep answers concise and reassuring. 
          Focus on safety, legal verification, and cultural dignity.
          If asked about specific prices, mention that costs vary by country and a private consultation is best.
          Always end with a subtle encouragement to book a consultation.
        `}] }
        ,
        temperature: 0.7,
      },
    });

    return response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, but I'm having trouble connecting right now. Please book a consultation for detailed advice.";
  }
};
