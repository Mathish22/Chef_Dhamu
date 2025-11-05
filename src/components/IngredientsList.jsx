import React, { useState } from 'react';
// Correctly imports the AI function from the services folder
import { getRecipeFromGemini } from '../services/ai.js'; 

/**
 * A component that renders an input form for users to enter ingredients.
 * It receives functions from a parent component to update the application's state.
 * @param {object} props - The props object.
 * @param {Function} props.setRecipe - Function to update the recipe state in the parent.
 * @param {Function} props.setIsLoading - Function to update the loading state in the parent.
 */
function IngredientsList({ setRecipe, setIsLoading }) {
  // State for managing the text in the input field
  const [ingredients, setIngredients] = useState('');
  // State to disable the button during API calls, preventing multiple submissions
  const [isDisabled, setIsDisabled] = useState(false);

  // Handles the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!ingredients.trim()) return; // Prevent submission if the input is empty

    // Update the parent's state to show loading indicators
    setIsLoading(true);
    setIsDisabled(true);
    setRecipe(''); // Clear any previous recipe

    // Prepare ingredients and call the AI service
    const ingredientsArray = ingredients.split(',').map(item => item.trim());
    const generatedRecipe = await getRecipeFromGemini(ingredientsArray);
    
    // Update the parent's state with the new recipe
    setRecipe(generatedRecipe);
    
    // Reset the loading and disabled states
    setIsLoading(false);
    setIsDisabled(false);
  };

  return (
    <div className="ingredients-container">
      <h2>What's in your kitchen?</h2>
      <p>Enter ingredients separated by commas.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ingredients}
          // This correctly updates the state with every keystroke
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="e.g., chicken, rice, tomatoes"
          className="ingredients-input"
        />
        <button type="submit" disabled={isDisabled} className="submit-button">
          {isDisabled ? 'Generating...' : 'Find Recipe'}
        </button>
      </form>
    </div>
  );
}

export default IngredientsList;

