import express from 'express';
import { releaseSlot } from '../postController.js';

const router = express.Router();
router.patch('/:id', releaseSlot);

export default router;