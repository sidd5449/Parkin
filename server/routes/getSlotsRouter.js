const express = require( "express");
const { getSlotsController } = require( "../middleware/getSlotsController.js");

const router = express.Router();

router.get("/",getSlotsController);

module.exports =  router;