import express from 'express';
import { getSensData, updateStat } from '../controller.js';

const router = express.Router();

router.get('/', getSensData);
export default router;