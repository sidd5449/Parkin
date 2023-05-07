import express from 'express';
import { getSpecific } from '../controller.js';

const router = express.Router();

router.get('/:id', getSpecific);
export default router;