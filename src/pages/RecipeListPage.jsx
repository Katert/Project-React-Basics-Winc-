// Components
import { Box, Heading, Grid, GridItem } from "@chakra-ui/react";
import { RecipeCard } from "../components/ui";
import { SearchField } from "../components/input";

// Hooks
import { useState } from "react";

export const RecipeListPage = ({ recipes, setRecipe }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    const recipeName = recipe.recipe.label.toLowerCase();
    const recipeHealthLabels = recipe.recipe.healthLabels.map((label) =>
      label.toLowerCase()
    );
    const lowerSearchTerm = searchTerm.toLowerCase();

    return (
      recipeName.includes(lowerSearchTerm) ||
      recipeHealthLabels.some((label) => label.includes(lowerSearchTerm))
    );
  });

  return (
    <>
      <Heading paddingY="8">Recipe Finder</Heading>
      <Box marginBottom={4}>
        <SearchField searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </Box>
      <Grid
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={4}
        alignItems="stretch"
      >
        {filteredRecipes.map((recipe) => {
          return (
            <GridItem key={recipe.recipe.label}>
              <RecipeCard
                title={recipe.recipe.label}
                healthLabels={recipe.recipe.healthLabels}
                dietLabels={recipe.recipe.dietLabels}
                cautions={recipe.recipe.cautions}
                imgUrl={recipe.recipe.image}
                setRecipe={setRecipe}
                mealType={recipe.recipe.mealType[0]}
                dishType={recipe.recipe.dishType}
                onClick={() => setRecipe(recipe.recipe)}
              />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};
