// const paypal = require("paypal-rest-sdk");
const paypal = {
  configure: (config) => {
    console.log("PayPal configured with:", config);
  },
  payment: {
    create: (data, callback) => {
      console.log("Mock Payment Created:", data);
      // Simulate a successful response
      callback(null, { id: "PAYID-DEMO123456789", state: "created" });
    },
    execute: (id, data, callback) => {
      console.log(`Mock Executing Payment: ${id}`);
      callback(null, { state: "approved" });
    },
  },
};

paypal.configure({
  mode: "",
  client_id: "",
  client_secret: "",
});

module.exports = paypal;
