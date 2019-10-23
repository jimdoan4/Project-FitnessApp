require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

//Requiring Models
const { Exercise } = require('../models/Exercise.js')
const { Review } = require('../models/Exercise.js')
const { Recipe} = require('../models/Recipe.js')

//Review information to seed to MongoDB
const roughStart = new Review({
    username: "Jim Doan",
    date: "10/23/19",
    reviewDescription: "Test Example"
})

//Exercise information to seed to MongoDB
const pushUp = new Exercise({
    fitnessImg: "https://cdn-ami-drupal.heartyhosting.com/sites/muscleandfitness.com/files/styles/full_node_image_1090x614/public/media/1109-feet-elevated-pushup.jpg?itok=urXPS8Lq",
    type: 'Push Up',
    equipment: 'No Equipment',
    difficulty: 'Intermediate',
    instruction: "Starting Position: Kneel on an exercise mat or floor and bring your feet together behind you.",
    additionalReview: [roughStart]
})

//Recipe information to seed to MongoDB
const bakedChicken = new Recipe({
    recipeImg: "http://www.gimmesomeoven.com/wp-content/uploads/2015/05/Oven-Baked-Chicken-Breast-Recipe-3.jpg",
    ingredient: "4 boneless skinless chicken breasts, pounded to even thickness and brined in saltwater (*see easy instructions below)",
    recipeDescription: "None for now",
    cookingTime: "30 Minutes"
})


Recipe.remove({})
    .then(() => Recipe.create([bakedChicken]))
Exercise.remove({})
    .then(() => Exercise.create([pushUp]))
Review.remove({})
    .then(() => Review.create([roughStart]))
    .then(() => {
        console.log("seeded successfully");
        mongoose.connection.close();
    })
    .catch(err => console.log(err, "error!"));