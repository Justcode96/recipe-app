import React, { useState } from 'react';
import { Center, Heading, List, ListItem, Image, Button, Text, Box, Input, Flex } from '@chakra-ui/react';
import { data } from '../utils/data';

// RecipeListPage component definition
export const RecipeListPage = ({ onRecipeSelect, searchQuery, onSearchChange }) => {
  // State to manage the selected recipe
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Function to handle recipe click
  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    onRecipeSelect(recipe);
  };

  // Filter the data based on search query
  const filteredHits = data.hits.filter((hit) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const labelMatch = hit.recipe.label.toLowerCase().includes(lowerCaseQuery);
    const healthLabelMatch = hit.recipe.healthLabels.some((label) =>
      label.toLowerCase().includes(lowerCaseQuery)
    );
    return labelMatch || healthLabelMatch;
  });

  return (
    <Center py={8}>
      <Box w="100%" maxW="800px">
        <Flex flexDirection="column" alignItems="center" mb={4}>
          {/* Heading for the recipe app */}
          <Heading mt={4}>Welcome to My Recipe App</Heading>
          <Text mt={2} mb={4}>Explore delicious recipes and find your favorites!</Text>
          {/* Input for searching recipes */}
          <Input mt={6} mb={6}
            type="text"
            placeholder="Search recipes..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </Flex>
        
        {/* Conditionally render based on whether a recipe is selected */}
        {selectedRecipe ? (
          <Button onClick={() => setSelectedRecipe(null)}>Back to Recipes</Button>
        ) : (
          // Display the list of recipes
          <List>
            <div className="column">
            {/* Iterate through filtered recipes */}
            {filteredHits.map((hit) => (
                <ListItem 
                key={hit.recipe.label}
                onClick={() => handleRecipeClick(hit.recipe)}
                cursor="pointer"
                mb={4}
                display="flex"
                alignItems="center"
              >
        
                <div className="column-content">
                {/* Display recipe image */}
                <Image className='image-container' src={hit.recipe.image} alt={hit.recipe.label} />
                <Box>
                {/* Display meal type */}
                <Text className="meal-type"> {hit.recipe.mealType.join(', ')}</Text>

                {/* Display recipe label */}
                <Heading size="sm">{hit.recipe.label}</Heading>

                {/* Display health labels */}
                {hit.recipe.healthLabels.includes('Vegetarian') && (
                <Text className="health-labels">Vegetarian</Text>
                )}
                {hit.recipe.healthLabels.includes('Vegan') && (
                <Text className="health-labels">Vegan</Text>
                )}
                  
                {/* Display diet labels */}
                {hit.recipe.dietLabels.length > 0 && (
                <Text className="diet-labels"> {hit.recipe.dietLabels.join(', ')}</Text>
                )}
                {/* Display cautions */}
                {hit.recipe.cautions.length > 0 && (
                <Text className="cautions"><span className='bg-c'>Cautions:</span> {hit.recipe.cautions.join(', ')}</Text>
                )}
                  
                  {/* Display dish type */}
                  <Text className='dish-type'><span className='bg-c'>Dish Type:</span> {hit.recipe.dishType.join(', ')}</Text>
                
                </Box>
                </div>
              </ListItem>
            ))}
          </div>
          </List>
        )}
      </Box>
    </Center>
  );
};
