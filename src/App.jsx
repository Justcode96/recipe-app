import React, { useState } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecipeListPage } from './pages/RecipeListPage';
import { RecipePage } from './pages/RecipePage';
import './index.css';

// App component definition
export const App = () => {
// State for selected recipe and search query
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle selecting a recipe
  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  // Function to handle going back from recipe details
  const handleBackClick = () => {
    setSelectedRecipe(null);
  };

  return (
    <ChakraProvider>
      <Router>
        {/* Main app container */}  
        <Box p={4} bg="gray.100" minH="100vh">
          {/* Container for content */}
          <Box maxW="800px" mx="auto">
            <Routes>
            {/* Route for displaying recipe details or list */}
              <Route
                path="/"
                element={
                  selectedRecipe ? (
                    <RecipePage selectedRecipe={selectedRecipe} onBackClick={handleBackClick} />
                  ) : (
                    <RecipeListPage
                      onRecipeSelect={handleRecipeSelect}
                      searchQuery={searchQuery}
                      onSearchChange={setSearchQuery}
                    />
                  )
                }
              />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ChakraProvider>
  );
};
