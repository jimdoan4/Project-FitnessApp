const mongoose = require('../db/connections.js')
const Schema = mongoose.Schema

//Recipe Schema
const Recipe = new Schema({
    recipeImg: String,
    recipeName: String,
    ingredient: String,
    recipeDescription: String,
    cookingTime: String
})

//Exporting Schemas
module.exports = {
    Recipe: mongoose.model('Recipe', Recipe)
}