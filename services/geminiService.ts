
import { GoogleGenAI } from "@google/genai";

// Fixed: Initialize GoogleGenAI with exactly the required configuration
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getRelocationAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `
          You are the Ubuntu Asili Africa Assistant. 
          Your tone is calm, dignified, grounded, and authoritative. 
          You represent a business that helps African American women relocate to Africa and own land safely.
          Keep answers concise and reassuring. 
          Focus on safety, legal verification, and cultural dignity.
          If asked about specific prices, mention that costs vary by country and a private consultation is best.
          Always end with a subtle encouragement to book a consultation.
        `,
        temperature: 0.7,
      },
    });

    // Fixed: Ensure use of the .text property (not a method) as per @google/genai guidelines
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, but I'm having trouble connecting right now. Please book a consultation for detailed advice.";
  }
};
