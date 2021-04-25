const mongoose = require('mongoose')

//making the basic model schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        require: true,
        default: false,
    },
}, {
    timestamps: true
})

//make the user model
const User = mongoose.model('User', userSchema)

module.exports = User