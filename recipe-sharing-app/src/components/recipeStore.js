
import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: "",
  favorites: [],
  recommendations: [],

  // Initial recipes
  setRecipes: (recipes) => set({ recipes }),

  // Add recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, { ...newRecipe, id: Date.now() }],
    })),

  // Update recipe - CHECK THIS EXISTS
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe,
      ),
    })),

  // Delete recipe - CHECK THIS EXISTS
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Search functionality
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Get filtered recipes
  getFilteredRecipes: () => {
    const state = get();
    return state.recipes.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        recipe.description
          .toLowerCase()
          .includes(state.searchTerm.toLowerCase()),
    );
  },

  // Favorites functionality
  addFavorite: (recipeId) =>
    set((state) => {
      if (!state.favorites.includes(recipeId)) {
        return { favorites: [...state.favorites, recipeId] };
      }
      return state;
    }),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Check if recipe is favorite
  isFavorite: (recipeId) => {
    const state = get();
    return state.favorites.includes(recipeId);
  },

  // Recommendations
  generateRecommendations: () =>
    set((state) => {
      if (state.favorites.length === 0) {
        return { recommendations: [] };
      }

      const favoriteRecipes = state.recipes.filter((recipe) =>
        state.favorites.includes(recipe.id),
      );

      const recommendations = state.recipes.filter((recipe) => {
        if (state.favorites.includes(recipe.id)) return false;

        return favoriteRecipes.some(
          (fav) =>
            fav.title
              .toLowerCase()
              .includes(recipe.title.toLowerCase().substring(0, 3)) ||
            recipe.title
              .toLowerCase()
              .includes(fav.title.toLowerCase().substring(0, 3)),
        );
      });

      return { recommendations: recommendations.slice(0, 5) };
    }),
}));

export default useRecipeStore;
