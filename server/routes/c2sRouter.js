const express = require( 'express');
const { c2sController } = require( '../middleware/c2sController.js')

const router = express.Router();

router.post("/", c2sController);

module.exports =  router;