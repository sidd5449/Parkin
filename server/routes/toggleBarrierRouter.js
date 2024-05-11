import express from "express";
import {toggleBarrierController} from "../middleware/toggleBarrierController.js";

const router = express.Router();

router.post("/", toggleBarrierController);

export default router;