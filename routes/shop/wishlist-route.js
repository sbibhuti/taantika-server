const express = require("express");
const {
  getWishlist,
  wishlistAdd,
  wishlistDelete,
  clearWishlist,
} = require("../../controllers/shop/wishlist-controller");

const router = express.Router();

router.get("/get", getWishlist);
router.post("/add", wishlistAdd);
router.patch("/remove", wishlistDelete);
router.delete("/delete/:userId", clearWishlist);

module.exports = router;
