const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

async function generateContent(prompt) {
    try {
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        console.error("Gemini API ERROR DETAILS:", error?.response?.data || error.message || error);
        throw new Error("Failed to generate AI response");
    }
}

module.exports = generateContent;