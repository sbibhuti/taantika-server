const express = require("express");

const {
  createOrder,
  getAllOrdersByUser,
  getOrderDetails,
  verifyPayment,
  paymentDetails,
} = require("../../controllers/shop/order-controller");

const router = express.Router();

router.post("/create", createOrder);
router.post("/verify", verifyPayment);
router.get("/payment/:id", paymentDetails);
router.get("/list/:userId", getAllOrdersByUser);
router.get("/details/:id", getOrderDetails);

module.exports = router;
