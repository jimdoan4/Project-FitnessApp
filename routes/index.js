const express = require('express')
const router = express.Router()

const exerciseController = require('../controllers/exerciseController.js')
const reviewController = require('../controllers/reviewController.js')
const recipeController = require('../controllers/recipeController.js')

//Displays all of the Exercise Information
router.get('/', exerciseController.index)

//Displays the individual ID
router.get('/:id', exerciseController.show)

//Creates a New Exercise Information Card
router.post('/', exerciseController.create)

//Updates a Single Exercise Information
router.put('/:id', exerciseController.update)

//Delete a Single Exercise Information
router.delete('/:id', exerciseController.delete)

//Review Exercise
//router.get('/:id/review/:reviewId', reviewController.show)
router.get('/:id/review', reviewController.index)

router.get('/:id/review/:reviewId', reviewController.show)

//router.post('/:id/review/:reviewId', reviewController.create)
router.post('/:id/review', reviewController.create)

router.delete('/:id/review/:reviewId', reviewController.delete)


//Displays all of the Recipe Information
router.get('/', recipeController.index)

//Displays the individual ID
router.get('/:id', recipeController.show)

//Creates a New Recipe Information Card
router.post('/', recipeController.create)

//Updates a Single Recipe Information
router.put('/:id', recipeController.update)

//Delete a Single Recipe Information
router.delete('/:id', recipeController.delete)

module.exports = router