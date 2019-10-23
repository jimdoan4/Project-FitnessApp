const { Exercise } = require('../models/Exercise.js')


const exerciseController = {
    index: (req, res) => {
        Exercise.find().then((exercises) => { // Find all of the exercises from the database
            res.json(exercises) // send the exercises back to the client
        }).catch((err) => { 
            console.log("You messed up!", err) // If there is any error, tell the client something went wrong on the server
        })
    },
     //Show the exercise on to the page
    show: (req, res) => {
        Exercise.findById(req.params.id).then(exercise => { // Show the information requested
            res.json(exercise) // send the exercises back to the client
        })
    },
    //Creates a New exercise
    create: (req, res) => {
        Exercise.create(req.body).then(exercise => {
            res.json(exercise) // send the exercises back to the client
        })
    },
     //Update the current exercise
    update: async(req, res) => {
        Exercise.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(exercise => {
            res.json(exercise)
        })
    },
     //Delete the current exercise
    delete: (req, res) => {
        Exercise.findByIdAndDelete(req.params.id).then(exercise => {
            res.json(exercise) // Send back a status tell the client that the delete was successful
        })
    }
}

module.exports = exerciseController