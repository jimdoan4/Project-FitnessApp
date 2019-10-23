const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

//Recipe Schema
const Recipe = new Schema({
    recipeImg: String,
    ingredient: String,
    recipeDescription: String,
    cookingTime: String
})

//Exporting Schemas
module.exports = {
    Recipe: mongoose.model('Recipe', Recipe)
}