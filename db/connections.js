require('dotenv').config()
const mongoose = require('mongoose')

//Connecting to MongoDB 
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI)
} else {
    mongoose.connect('mongodb://localhost/project-fitnessapp')
}

//Error message will prompt if cannot connect to MongoDB
mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error: ', err)
    process.exit(-1)
})

//If connected to MongoDB, a message in console will state so.
mongoose.connection.once('open', () => {
    console.log("Mongoose has connected to MongoDB")
})

module.exports = mongoose