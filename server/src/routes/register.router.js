const express = require("express")
const router = express.Router()
const {registerController} = require("../controllers")

router.post("/",registerController.register),
router.get("/",registerController.getUserAll),

module.exports = router