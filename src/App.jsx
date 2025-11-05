import React, { useState } from 'react';

// Import all the necessary components
import Header from './components/Header';
import Main from './components/Main';
import IngredientsList from './components/IngredientsList.jsx';
import AiRecipe from './components/AiRecipe.jsx';

// Optional: Import a CSS file for styling your app
import './App.css'; 

function App() {
  // --- State Management ---
  // The state for the recipe and loading status is managed here, in the parent component.
  // This is the single source of truth for the entire application.
  const [recipe, setRecipe] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    // React Fragment (<>) is used to return multiple elements without a wrapper div.
    <>
      <Header />
      <Main>
        <div className="container">
          {/* --- Component Communication (Props) --- */}

          {/* The `IngredientsList` component receives the `setRecipe` and `setIsLoading` functions as props.
            This allows it to update the state that lives here in the `App` component.
          */}
          <IngredientsList 
            setRecipe={setRecipe} 
            setIsLoading={setIsLoading} 
          />

          {/* The `AiRecipe` component receives the `recipe` data and `isLoading` status as props.
            It uses this data to display the correct information to the user.
          */}
          <AiRecipe 
            recipe={recipe} 
            loading={isLoading} 
          />
        </div>
      </Main>
    </>
  );
}

export default App;

