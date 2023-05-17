import React, { useState } from "react";
import Recipe from "../components/recipeInfo";

type RecipeData = {
  title: string;
  image: string;
  extendedIngredients: { original: string }[];
};

type SearchProps = {
  onSearchResults: (searchResults: RecipeData[]) => void;
};

const Search: React.FC<SearchProps> = ({ onSearchResults }) => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState<RecipeData[]>([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey= 4e9ed49c64fc4e7499a8c59f8c29ccc5`
      );
      const data = await response.json();
      setRecipes(data.results);
      onSearchResults(data.results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div>
      <h1>Recipe Finder</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <Recipe
              key={index}
              title={recipe.title}
              image={recipe.image}
              ingredients={recipe.extendedIngredients.map(
                (ingredient) => ingredient.original
              )}
            />
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;