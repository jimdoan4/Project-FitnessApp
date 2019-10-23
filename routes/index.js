const express = require('express')
const router = express.Router()
const exerciseController = require('../controllers/exerciseController.js')
const recipeController = require('../controllers/recipeController.js')
const appController = require('../controllers/appController.js');


router.get('/', appController.index);
//Displays all of the Recipe Information
router.get('/recipes/', recipeController.index)

//Displays the individual ID
router.get('/recipes/:recipeId/', recipeController.show)

//Creates a New Recipe Information Card
router.post('/recipes/', recipeController.create)

//Updates a Single Recipe Information
router.put('/recipes/:recipeId/', recipeController.update)

//Delete a Single Recipe Information
router.delete('/recipes/:recipeId/', recipeController.delete)



//Displays all of the Exercise Information
router.get('/exercises/', exerciseController.index)

//Displays the individual ID
router.get('/exercises/:exerciseId/', exerciseController.show)

//Creates a New Exercise Information Card
router.post('/exercises/', exerciseController.create)

//Updates a Single Exercise Information
router.put('/exercises/:exerciseId/', exerciseController.update)

//Delete a Single Exercise Information
router.delete('/exercises/:exerciseId/', exerciseController.delete)



module.exports = router;