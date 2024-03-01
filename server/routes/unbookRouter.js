import express from "express";
import {unbookController} from "../middleware/unbookController.js";

const router = express.Router();

router.patch("/:id", unbookController);

export default router;