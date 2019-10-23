const Exercise = require('../models/Exercise.js');

const exerciseController = {
	index: (req, res) => {
		Exercise.find()
			.then((exercises) => {  // Find all of the exercises from the database
				console.log(exercises);
				res.json(exercises);
			})
			.catch((err) => {
				console.log(err);  // If there is any error, tell the client something went wrong on the server
			});
	},
	create: async (req, res) => {
		try {
			const newExercise = req.body;  // create a new Exercise, let Mongoose give the default values
			const savedExercise = await Exercise.create(newExercise);
			res.json(savedExercise);
		} catch (err) {
			console.log(err);
			res.status(500).json(err);  // If there is any error, tell the client something went wrong on the server
		}
	},
	show: async (req, res) => {
		try {
			const exerciseId = req.params.exerciseId;
			const exercise = await Exercise.findById(exerciseId);
			res.json(exercise);  // Show the information requested
		} catch (err) {
			console.log(err);
			res.json(err);  // If there is any error, tell the client something went wrong on the server
		}
	},
	update: async (req, res) => {
		try {
			const exerciseId = req.params.exerciseId;
			const updatedExercise = req.body;
			const savedExercise = await Exercise.findByIdAndUpdate(exerciseId, updatedExercise);
			res.json(savedExercise);  // Send the updated information back to the client
		} catch (err) {
			console.log(err);
			res.status(500).json(err);  // If there is any error, tell the client something went wrong on the server
		}
	},
	delete: async (req, res) => {
		try {
			const exerciseId = req.params.exerciseId;
			await Exercise.findByIdAndRemove(exerciseId); // Delete the information from the database
			res.json({
				msg: `Successfully Deleted ${exerciseId}`
			});
		} catch (err) {
			console.log(err);
			res.status(500).json(err);  // If there is any error, tell the client something went wrong on the server
		}
	}
};


module.exports = exerciseController