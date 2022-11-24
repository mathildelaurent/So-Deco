const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const bcrypt = require("bcrypt");

const adminRoutes = require("./routes/admin");
const tableauxRoutes = require("./routes/tableaux");
const Admin = require("./models/admin");

const app = express();

mongoose
    .connect(process.env.connexionMongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-requested-With, Accept, Content, Content-type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    );
    res.setHeader("Cross-Origin-Resource-Policy", "same-site");
    next();
});

app.use("/api/auth", adminRoutes);
app.use("/api/tableaux", tableauxRoutes);

Admin.findOne({ email: "admin-soDeco@soDeco.com" }).then((admin) => {
    if (!admin) {
        var hash = bcrypt.hashSync("@Dministrateur01", 10);
        const admin = new Admin({
            lastname: "Carlier",
            firstname: "Cécile",
            email: "admin-soDeco@soDeco.com",
            password: hash,
            isAdmin: 1,
        });
        admin.save();
    }
});

module.exports = app;
