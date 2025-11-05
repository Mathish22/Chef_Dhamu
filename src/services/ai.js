import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = `
You are an expert chef assistant. A user will provide a list of ingredients they have, and your job is to suggest a delicious recipe they can make.

- You don't need to use every ingredient from the user's list.
- The recipe can include a few common additional ingredients (like oil, salt, pepper, water).
- Format your response in Markdown for easy display on a web page. Include headings for the recipe title, ingredients, and instructions.
`;

// Get the API key from the environment variables file
const apiKey = import.meta.env.VITE_GEMINI_KEY;
if (!apiKey) {
  throw new Error("VITE_GEMINI_KEY is not set in your .env file.");
}

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(apiKey);

export async function getRecipeFromGemini(ingredientsArray) {
  const ingredientsString = ingredientsArray.join(", ");

  try {
    // Use the stable 'gemini-1.0-pro' model
    // Corrected code
// New, corrected code
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

    // Combine the system instructions and the user's ingredients into a single, effective prompt
    const fullPrompt = `
      ${SYSTEM_PROMPT}

      Here are the ingredients I have: ${ingredientsString}.
      
      Please give me a recipe you'd recommend I make!
    `;

    // Send the prompt to the model and get the result
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    
    return response.text();

  } catch (err) {
    // Log detailed errors to the developer console for debugging
    console.error("API Error:", err.message);
    console.error("Full Error Details:", err);
    // Return a user-friendly error message to the UI
    return "Sorry, I couldn't generate a recipe at this time. Please check the console for details.";
  }
}