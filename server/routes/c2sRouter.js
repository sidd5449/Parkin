import express from 'express';
import { c2sController } from '../middleware/c2sController.js'

const router = express.Router();

router.post("/", c2sController);

export default router;