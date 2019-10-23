const Recipe = require('../models/Recipe.js');

const recipeController = {
	index: (req, res) => {
		Recipe.find()
			.then((recipes) => {  // Find all of the users from the database
				console.log(recipes);
				res.json(recipes);
			})
			.catch((err) => {
				console.log(err);  // If there is any error, tell the client something went wrong on the server
			});
	},
	create: async (req, res) => {
		try {
			const newRecipe = req.body;  // create a new User, let Mongoose give the default values
			const savedRecipe = await Recipe.create(newRecipe);
			res.json(savedRecipe);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);  // If there is any error, tell the client something went wrong on the server
		}
	},
	show: async (req, res) => {
		try {
			const recipeId = req.params.recipeId;
			const recipe = await Recipe.findById(recipeId);
			res.json(recipe);  // Show the information requested
		} catch (err) {
			console.log(err);
			res.json(err);  // If there is any error, tell the client something went wrong on the server
		}
	},
	update: async (req, res) => {
		try {
			const recipeId = req.params.recipeId;
			const updatedRecipe = req.body;
			const savedRecipe = await Recipe.findByIdAndUpdate(recipeId, updatedRecipe);
			res.json(savedRecipe);  // Send the updated information back to the client
		} catch (err) {
			console.log(err);
			res.status(500).json(err);  // If there is any error, tell the client something went wrong on the server
		}
	},
	delete: async (req, res) => {
		try {
			const recipeId = req.params.recipeId;
			await Recipe.findByIdAndRemove(recipeId); // Delete the information from the database
			res.json({
				msg: `Successfully Deleted ${recipeId}`
			});
		} catch (err) {
			console.log(err);
			res.status(500).json(err);  // If there is any error, tell the client something went wrong on the server
		}
	}
};

module.exports = recipeController;