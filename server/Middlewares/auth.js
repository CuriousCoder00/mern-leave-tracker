const jwt = require("jsonwebtoken");
require("dotenv").config();

// verify token
const verifyToken = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).json({ msg: "Access denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};


module.exports = {verifyToken}