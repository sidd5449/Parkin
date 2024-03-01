import express from "express";
import { getSlotsController } from "../middleware/getSlotsController.js";

const router = express.Router();

router.get("/",getSlotsController);

export default router;