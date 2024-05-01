// Components
import { RecipeListPage, RecipePage } from "./pages";
import { Heading } from "@chakra-ui/react";

// Hooks
import { useState } from "react";

// Data
import { data } from "./utils";

export const App = () => {
  // Your state code here
  const recipes = data.hits;
  const [recipe, setRecipe] = useState(null);

  return (
    <main
      style={{
        padding: "32px",
        backgroundColor: "#e8c441",
        height: "100vh",
        overflow: "scroll",
      }}
    >
      {recipe ? (
        <RecipePage recipe={recipe} setRecipe={setRecipe} />
      ) : (
        <RecipeListPage recipes={recipes} setRecipe={setRecipe} />
      )}
    </main>
  );
};
