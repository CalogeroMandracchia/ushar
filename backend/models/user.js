const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true},
    address: { type: String},
    hash: String,
    salt: String
});

mongoose.model('User', userSchema);