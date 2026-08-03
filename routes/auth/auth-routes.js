const express = require("express");
const {
  registerUser,
  loginUser,
  refreshUser,
  logoutUser,
  me,
  // authMiddleware,
} = require("../../controllers/auth/auth-controller");
const { authenticate } = require("../../helpers/auth");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/refresh", refreshUser);
router.post("/logout", logoutUser);
router.get("/me", authenticate, me);
// router.get("/check-auth", authMiddleware, (req, res) => {
//   const user = req.user;
//   res.status(200).json({
//     success: true,
//     message: "Authenticated user!",
//     user,
//   });
// });

module.exports = router;
