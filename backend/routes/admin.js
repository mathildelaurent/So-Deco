const adminCtrl = require("../controllers/admin");
const express = require("express");
const router = express.Router();

router.post("login", adminCtrl.login);

module.exports = router;
