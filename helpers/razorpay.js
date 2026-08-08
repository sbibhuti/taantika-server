const Razorpay = require("razorpay");
const cors = require("cors");
require("dotenv").config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_API_ID,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

module.exports = razorpay;
