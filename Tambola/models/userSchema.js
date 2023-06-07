const mongoose = require('mongoose');

const mongooseDbSchema = {
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}

const userSchema = new mongoose.Schema(mongooseDbSchema);

const collectionName = "user";
const User = mongoose.model(`${collectionName}`, userSchema);


module.exports = User;