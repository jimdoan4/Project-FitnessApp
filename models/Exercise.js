const mongoose = require('../db/connections.js')
const Schema = mongoose.Schema

//Review Schema
// const Review = new Schema({
//     username: String,
//     date: String,
//     reviewDescription: String,
//     review: Array
// })

//Exercise Schema
const Exercise = new Schema({
    fitnessImg: String,
    type: String,
    equipment: String,
    difficulty: String,
    instruction: String,
    info: Array
})


//Exporting Schemas
module.exports = {
    Exercise: mongoose.model('Exercise', Exercise)
}