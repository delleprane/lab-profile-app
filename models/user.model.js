const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: String,
    password: String,
    campus: String,
    course: String,
    image: String
});

module.exports = model('User', userSchema);