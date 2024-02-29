const express = require("express");
const {unbookController} = require("../middleware/unbookController.js");

const router = express.Router();

router.patch("/:id", unbookController);

module.exports =  router;