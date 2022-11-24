const tableauxCtrl = require("../controllers/tableaux");
const express = require("express");
const router = express.Router();
const multer = require("../middlewares/multer-config");

router.post("/", multer, tableauxCtrl.createTableau);
router.get("/", tableauxCtrl.getAllTableaux);
router.get("/:id", multer, tableauxCtrl.getOneTableau);
router.put("/:id", multer, tableauxCtrl.modifyTableau);
router.delete("/:id", multer, tableauxCtrl.deleteTableau);

module.exports = router;
