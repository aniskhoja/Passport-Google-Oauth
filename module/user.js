const mongoose =  require('mongoose')

const userSchema = new mongoose.Schema({
    displayName: String,
    googleId: String
})

const User = mongoose.model('user', userSchema)

module.exports = User