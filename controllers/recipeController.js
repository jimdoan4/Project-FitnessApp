const Recipe = require('../models/Recipe.js')


const recipeController = {
    index: (req, res) => {
        Recipe.find().then((recipes) => { // Find all of the events from the database
            res.json(recipes) // send the events back to the client
        }).catch((err) => { 
            console.log("You messed up!", err) // If there is any error, tell the client something went wrong on the server
        })
    },
     //Show the Recipe on to the page
    show: (req, res) => {
        Recipe.findById(req.params.id).then(recipe => { // Show the information requested
            res.json(recipe) // send the recipes back to the client
        })
    },
    //Creates a New Recipe
    create: (req, res) => {
        Recipe.create(req.body).then(recipe => {
            res.json(recipe) // send the recipes back to the client
        })
    },
     //Update the current Recipe
    update: async(req, res) => {
        Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(recipe => {
            res.json(recipe)
        })
    },
     //Delete the current Recipe
    delete: (req, res) => {
        Recipe.findByIdAndDelete(req.params.id).then(recipe => {
            res.json(recipe) // Send back a status tell the client that the delete was successful
        })
    }
}

module.exports = recipeController