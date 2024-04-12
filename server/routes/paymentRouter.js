import express from "express";
import { paymentController } from "../middleware/paymentController.js";
const router = express.Router();

router.post("/", paymentController);
export default router;
