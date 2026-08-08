const express = require("express");
const {
  userDetails,
  updateUser,
} = require("../../controllers/shop/account-controller");

const router = express.Router();

router.get("/user/:userId", userDetails);
router.put("/user/update/:userId", updateUser);

module.exports = router;
