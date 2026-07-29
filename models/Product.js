const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    image: String,
    title: String,
    description: String,
    category: String,
    brand: String,
    brandName: String,
    price: Number,
    salePrice: Number,
    discount: Number,
    totalStock: Number,
    averageReview: Number,
    reviewCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

ProductSchema.index({ price: 1 });
ProductSchema.index({ title: 1 });

// Compound indexes for filtering + sorting
ProductSchema.index({ category: 1, price: 1 });
ProductSchema.index({ brand: 1, price: 1 });

module.exports = mongoose.model("Product", ProductSchema);
