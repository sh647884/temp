const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, required: true, unique: true },
    password: String
});

const UserModel = mongoose.model('Users', userSchema);
module.exports = UserModel;