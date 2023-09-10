import React from 'react';
import { Center, Heading, UnorderedList, ListItem, Image, Button, Text, Box } from '@chakra-ui/react';

// RecipePage component definition
export const RecipePage = ({ selectedRecipe, onBackClick }) => {
// Check if a recipe is selected, if not display a message
  if (!selectedRecipe) {
    // Display a message if no recipe is selected
    return <p>Please select a recipe to view its details.</p>;
  }

  // Render the recipe details when a recipe is selected
  return (
  <Box maxW="800px" mx="auto" p={4}>
  {/* Button to go back to recipe list */}
  <Button onClick={onBackClick} mb={8} colorScheme="blue">
      Back to Recipes
    </Button>

    <Center mt={4}>
    {/* Display selected recipe image */}
      <Image className="header-image"
        src={selectedRecipe.image}
        alt={selectedRecipe.label}
      />
       </Center>

      {/* Display selected recipe label */}
       <Heading mt={4} as="h2">
        {selectedRecipe.label}
      </Heading>
      {/* Display meal type, dish type, and other recipe details */}
      <Text>Meal Type: {selectedRecipe.mealType.join(', ')}</Text>
      <Text>Dish Type: {selectedRecipe.dishType.join(', ')}</Text>
      <Text>Total Cooking Time: {selectedRecipe.totalTime} minutes</Text>
      <Text>Diet Labels: {selectedRecipe.dietLabels.join(', ')}</Text>
      <Text>Health Labels: {selectedRecipe.healthLabels.join(', ')}</Text>
      <Text>Cautions: {selectedRecipe.cautions.join(', ')}</Text>
      
      {/* Display ingredient list */}
      <Heading mt={4} as="h3">
      <h3>Ingredients:</h3>
      </Heading>
      <UnorderedList>
        {selectedRecipe.ingredients.map((ingredient, index) => (
        <ListItem key={index}>
      {ingredient.quantity} {ingredient.measure} - {ingredient.text}
    </ListItem>
        ))}
      </UnorderedList>

      {/* Display servings and total nutrients */}
      <p>Servings: {selectedRecipe.yield}</p>
      <h3>Total Nutrients:</h3>
      <p>Energy: {selectedRecipe.totalNutrients.ENERC_KCAL.quantity} kcal</p>
      <p>Protein: {selectedRecipe.totalNutrients.PROCNT.quantity} g</p>
      <p>Fat: {selectedRecipe.totalNutrients.FAT.quantity} g</p>
      <p>Carbs: {selectedRecipe.totalNutrients.CHOCDF.quantity} g</p>
      <p>Cholesterol: {selectedRecipe.totalNutrients.CHOLE.quantity} mg</p>
      <p>Sodium: {selectedRecipe.totalNutrients.NA.quantity} mg</p>
    </Box>
  );
};

