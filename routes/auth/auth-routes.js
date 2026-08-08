const express = require("express");
const {
  registerUser,
  loginUser,
  refreshUser,
  logoutUser,
  me,
} = require("../../controllers/auth/auth-controller");
const { authenticate } = require("../../helpers/auth");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/refresh", refreshUser);
router.post("/logout", logoutUser);
router.get("/me", authenticate, me);

module.exports = router;
