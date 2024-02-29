import express from "express";
import {bookController} from "../middleware/bookController.js";

const router = express.Router();

router.patch("/:id", bookController);

export default router;