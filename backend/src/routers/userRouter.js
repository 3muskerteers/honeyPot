import express from "express";
import { protect, admin,authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();
import {
  authUser,
  registerUser, 
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser,
} from "../controllers/userController.js";

// TODO: update admin routes
router.route("/").post(registerUser).get(authenticateToken,getUsers);

router.post("/logout", logoutUser);
router.post("/auth", authUser);
router
  .route("/profile")
  .get( protect,getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .delete( deleteUser)
  .get( getUserByID)
  .put( updateUser);

export default router;