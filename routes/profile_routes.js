import express from 'express';

import { getProfile, updateProfile } from "../controllers/profile_controller.js"

const router = express.Router();

router.get('/:id', getProfile);
router.patch('/:id', updateProfile);

export default router;