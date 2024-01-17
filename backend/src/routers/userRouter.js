import express from 'express';
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser,
} from '../controllers/userController.js';
import { admin, authenticateToken } from '../middlewares/authMiddleware.js';
const router = express.Router();

router.route('/').post(registerUser).get(authenticateToken, getUsers);

router.post('/logout', logoutUser);
router.post('/auth', authUser);
router
  .route('/profile')
  .get(authenticateToken, getUserProfile) // use the middleware here
  .put(authenticateToken, updateUserProfile); // and here
router
  .route('/:id')
  .delete(authenticateToken, deleteUser) // and here
  .get(authenticateToken, getUserByID) // and here
  .put(authenticateToken, updateUser); // and here

export default router;