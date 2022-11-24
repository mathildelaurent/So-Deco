const mongoose = require("mongoose");

const tableauxSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
});

module.exports = mongoose.model("Tableaux", tableauxSchema);
