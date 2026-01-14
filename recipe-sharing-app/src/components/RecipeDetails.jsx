import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const getFilteredRecipes = useRecipeStore(
    (state) => state.getFilteredRecipes,
  );

  const displayedRecipes = searchTerm ? getFilteredRecipes() : recipes;

  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      {displayedRecipes.length === 0 ? (
        <p>
          No recipes found.{" "}
          {searchTerm
            ? "Try a different search term."
            : "Add your first recipe!"}
        </p>
      ) : (
        <div className="recipes-grid">
          {displayedRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <div className="recipe-actions">
                <Link to={`/recipe/${recipe.id}`} className="btn-view">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;