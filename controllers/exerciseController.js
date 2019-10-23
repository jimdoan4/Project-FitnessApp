const { Exercise, Review } = require("../models/Exercise.js");

const exerciseController = {
  index: (req, res) => { //Find all of the exercises from the database
    Exercise.findById(req.params.id)
      .then(exercise => {
        exercise.additionalInfo;
        res.json(exercise.additionalInfo);
      })
      .catch(err => {
        console.log("Go back!"); // If there is any error, tell the client something went wrong on the server
      });
  },

   //Show the current exercise
  show: (req, res) => { // Show the information requested
    let { id, reviewId } = req.params;
    console.log("reviewId: ", reviewId);
    Review.findById(reviewId).then(review => {
      res.json(review); // send the reviews back to the client
    });
  },

   //Create a new exercise 
  create: (req, res) => {
    Exercise.findById(req.params.id).then(uExercise => {
      Review.create(req.body).then(review => {
        uExercise.additionalInfo.push(review);
        uExercise.save();
        res.send(uExercise); // send the reviews back to the client
      });
    });
  },

   //Delete the current Exercise
  delete: (req, res) => {
    Exercise.findById(req.params.id).then(findexercise => {
      const newReview = findexercise.additionalInfo.filter(
        review => review._id.toString() !== req.params.reviewId
      );
      findexercise.additionalInfo = newReview;
      findexercise.save().then(() => {
        Review.findByIdAndDelete(req.params.reviewId).then(deletedExercise => {
          res.json(deletedExercise); // Send back a status tell the client that the delete was successful
        });
      });
    });
  }
};

module.exports = exerciseController;
