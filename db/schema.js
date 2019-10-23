const mongoose = require('../db/connections.js')
const Schema = mongoose.Schema

//Recipe Schema
const RecipeSchema = new Schema({
    recipeImg: String,
    recipeName: String,
    ingredient: String,
    recipeDescription: String,
    cookingTime: String
})


const ExerciseSchema = new Schema({
    fitnessImg: String,
    type: String,
    equipment: String,
    difficulty: String,
    instruction: String,
 
})

//Exporting Schemas
module.exports = {
	RecipeSchema: RecipeSchema,
	ExerciseSchema: ExerciseSchema,

};