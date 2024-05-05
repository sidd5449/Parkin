import express from "express";
import { spotController } from "../middleware/spotController.js";

const router = express.Router();
router.get("/", spotController);

export default router;
