import express from 'express';

import { getProfile, updateProfile } from "../controllers/profile_controller.js"
import auth from '../middlewares/auth_middleware.js';

const router = express.Router();

router.get('/:id', auth, getProfile);
router.patch('/:id', auth, updateProfile);

export default router;