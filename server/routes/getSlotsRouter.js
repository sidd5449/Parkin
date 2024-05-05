import express from "express";
import { getSlotsController } from "../middleware/getSlotsController.js";

const router = express.Router();

router.get("/:id", getSlotsController);

export default router;
