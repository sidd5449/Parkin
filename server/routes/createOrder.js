import express from "express";
import { orderController } from "../middleware/orderController.js";
const router = express.Router();
router.post("/", orderController);

export default router;
