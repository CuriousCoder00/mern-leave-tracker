const { validationResult } = require("express-validator");
const User = require("../Schemas/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userRegistration = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    user = new User({
      name,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();
    const token = jwt.sign(
      {
        user: {
          id: user.id,
        },
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.json({
      success: true,
      token,
      user,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

const userLogin = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const token = jwt.sign(
      {
        user: {
          id: user.id,
        },
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.json({
      success: true,
      token,
      user,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

const userLogout = async (req, res) => {
  try {
    res.json({ success: true, msg: "User Logged Out" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.name = req.body.name;
    user.email = req.body.email;
    let password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    res.json({ user });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  userRegistration,
  userLogin,
  userLogout,
  updateUser
};
