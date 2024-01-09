import express from "express";
import { protect, admin } from "../middlewares/authMiddleware.js";

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


router.route("/").post(registerUser).get(getUsers);

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