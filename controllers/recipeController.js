const Recipe = require('../models/recipeModel');

// Create a new recipe
exports.createRecipe = async (req, res) => {
  try {
    const { name, ingredients, instructions, preparationTime } = req.body;
    const newRecipe = new Recipe({ name, ingredients, instructions, preparationTime });
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(400).json({ message: 'Error creating recipe', error: err.message });
  }
};

// Get all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching recipes', error: err.message });
  }
};

// Get a recipe by ID
exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json(recipe);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching recipe', error: err.message });
  }
};

// Update a recipe by ID
exports.updateRecipe = async (req, res) => {
  try {
    const { name, ingredients, instructions, preparationTime } = req.body;
    const recipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      { name, ingredients, instructions, preparationTime },
      { new: true }
    );
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json(recipe);
  } catch (err) {
    res.status(400).json({ message: 'Error updating recipe', error: err.message });
  }
};

// Delete a recipe by ID
exports.deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json({ message: 'Recipe deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error deleting recipe', error: err.message });
  }
};
