const Admin = require("../models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = (req, res, next) => {
    Admin.findOne({ email: req.body.email })
        .then((admin) => {
            if (!admin) {
                return res
                    .status(404)
                    .json({ error: "Administrateur non trouvé !" });
            }
            bcrypt
                .compare(req.body.password, admin.password)
                .then((valid) => {
                    if (!valid) {
                        return res
                            .status(401)
                            .json({ error: "Mot de passe invalide !" });
                    }
                    return res.status(200).json({
                        adminId: admin._id,
                        token: jwt.sign(
                            { adminId: admin._id },
                            process.env.secretToken,
                            { expiresIn: "24h" }
                        ),
                        firstname: admin.firstname,
                    });
                })
                .catch((error) => res.status(500).json({ error }));
        })
        .catch((error) => res.status(500).json({ error }));
};
