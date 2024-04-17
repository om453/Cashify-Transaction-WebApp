// backend/db.js
const mongoose = require('mongoose');

// mIZMsmFgVChlWZyO
// mongodb+srv://om123:<password>@cluster0.o6azof0.mongodb.net/
mongoose.connect("mongodb+srv://om123:mIZMsmFgVChlWZyO@cluster0.o6azof0.mongodb.net/Cashify")

// Create a Schema for Users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});


const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})


// Create a model from the schema
const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model('User', userSchema);


module.exports = {
	User,
    Account
};