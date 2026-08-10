const Wishlist = require("../../models/Wishlist");

const getWishlist = async (req, res) => {
  try {
    let { userId, page, limit } = req.query;

    page = Number(page) || 1;
    limit = Number(limit) || 10;

    const skip = (page - 1) * limit;

    const wishlist = await Wishlist.findOne({ userId }).populate("products");

    if (!wishlist || !wishlist.products || wishlist.products.length === 0) {
      return res.status(200).json({
        success: true,
        products: [],
        pagination: { page, limit, total: 0, pages: 0 },
      });
    }

    const total = wishlist.products.length;
    const paginatedProducts = wishlist.products.slice(skip, skip + limit);

    res.status(200).json({
      success: true,
      products: paginatedProducts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const wishlistAdd = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const wishlist = await Wishlist.findOneAndUpdate(
      { userId },
      { $addToSet: { products: productId } },
      { new: true, upsert: true },
    );

    res
      .status(200)
      .json({ success: true, message: "Added to wishlist", wishlist });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const wishlistDelete = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const wishlist = await Wishlist.findOneAndUpdate(
      { userId },
      { $pull: { products: productId } },
      { new: true },
    );

    if (!wishlist) {
      return res
        .status(404)
        .json({ success: false, message: "Wishlist not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Removed from wishlist", wishlist });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const clearWishlist = async (req, res) => {
  try {
    const { userId } = req.params;

    const wishlist = await Wishlist.findOneAndUpdate(
      { userId },
      { $set: { products: [] } },
      { new: true },
    );

    if (!wishlist) {
      return res.status(404).json({
        success: false,
        message: "Wishlist not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Wishlist cleared successfully",
      wishlist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { getWishlist, wishlistAdd, wishlistDelete, clearWishlist };
