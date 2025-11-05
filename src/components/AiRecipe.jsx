import ReactMarkdown from 'react-markdown';

// This component now receives the recipe and loading state as props
function AiRecipe({ recipe, loading }) {
  return (
    <section className="recipe-section"> {/* Added a class for styling */}
      <h2>Your Recipe</h2>
      
      {/* Show a loading message */}
      {loading && <p>Thinking of a delicious recipe for you...</p>}
      
      {/* When not loading, display the recipe */}
      {!loading && recipe && (
        <ReactMarkdown>{recipe}</ReactMarkdown>
      )}

      {/* Show a placeholder if there's no recipe and it's not loading */}
      {!loading && !recipe && (
          <p>Your recipe will appear here once you search!</p>
      )}
    </section>
  );
}

export default AiRecipe;
