import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAgriculturalAdvice = async (userQuery: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: `You are an expert agricultural advisor for farmers in Gujarat, India. 
        Your name is "AI કૃષિ સલાહકાર".
        Respond ONLY in Gujarati language. 
        Use simple, rural-friendly Gujarati wording (Gramya bhasha) that farmers can easily understand.
        Keep answers concise, helpful, and practical.
        You can advice on crop diseases, weather based planning, market prices estimation, and organic farming techniques.
        If the user asks about buying/selling specific items on the current app, encourage them to visit the "બજાર" page.
        `,
        temperature: 0.7,
      },
    });

    return response.text || "માફ કરશો, અત્યારે માહિતી ઉપલબ્ધ નથી.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "તકનીકી સમસ્યાને કારણે જવાબ આપવામાં અસમર્થ છીએ. કૃપા કરીને થોડી વાર પછી પ્રયાસ કરો.";
  }
};