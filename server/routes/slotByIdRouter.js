import express from "express";
import { slotByIdController } from "../middleware/slotByIdController.js";

const router = express.Router();

router.get("/:id",slotByIdController);

export default router;