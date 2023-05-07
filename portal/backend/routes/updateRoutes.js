import express from 'express';
import { updateStat } from '../controller.js';

const router = express.Router();
router.patch('/:id', updateStat);

export default router;