// verify if user role is admin
const User = require("../Schemas/userSchema");

const verifyAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (user.role !== "admin") {
      return res.status(401).json({ msg: "Not Authorized" });
    }
    next();
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  verifyAdmin,
};
