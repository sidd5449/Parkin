import express from 'express';
import { fillSlot } from '../postController.js';

const router = express.Router();
router.patch('/:id', fillSlot);

export default router;