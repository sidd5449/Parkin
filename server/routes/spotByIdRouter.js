import express from "express";
import { spotByIdController } from "../middleware/spotByIdController.js";

const router = express.Router();
router.get("/:id", spotByIdController);

export default router;
