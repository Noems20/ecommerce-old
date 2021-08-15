import express from 'express';

// Middlewares
import { protect } from '../middleware/authMiddleware.js';

// Controllers
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userController.js';

const router = express.Router();

router.route('/').post(registerUser);
router.post('/login', authUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
