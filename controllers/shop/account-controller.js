const User = require("../../models/User");

const userDetails = async (req, res) => {
  const { userId } = req.params;
  const SelectedUser = await User.findById(userId);
  res.status(200).json({
    success: true,
    user: {
      name: SelectedUser.userName,
      email: SelectedUser.email,
      mobile: SelectedUser.mobile,
      gender: SelectedUser.gender,
    },
  });
};

const updateUser = async (req, res) => {
  const { userId } = req.params;
  const { name, email, mobile, gender } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        userName: name,
        email,
        mobile,
        gender,
      },
      { new: true },
    );

    res.status(200).json({
      success: true,
      user: {
        name: updatedUser.userName,
        email: updatedUser.email,
        mobile: updatedUser.mobile,
        gender: updatedUser.gender,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};

module.exports = {
  userDetails,
  updateUser,
};
