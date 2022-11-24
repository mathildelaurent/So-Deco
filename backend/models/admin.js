const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    lastname: { type: String, required: true },
    firstname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: 0,
});

module.exports = mongoose.model("Admin", adminSchema);
