require('dotenv').config()
const mongoose = require('mongoose')

//Connecting to MongoDB 
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI)
} else {
    mongoose.connect('mongodb://localhost/project-fitnessapp', { useNewUrlParser: true })
}

//Error message will prompt if cannot connect to MongoDB
mongoose.connection.once('open', () => {
	console.log(`Mongoose has connected to MongoDB`);
});

// If the connection throws an error
mongoose.connection.on('error', (error) => {
	console.error(`MongoDB connection error!!! ${error}`);
	process.exit(-1);
});

module.exports = mongoose;