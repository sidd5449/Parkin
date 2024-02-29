const express =require( "express");
const {bookController} =require ("../middleware/bookController.js");

const router = express.Router();

router.patch("/:id", bookController);

module.exports =  router;