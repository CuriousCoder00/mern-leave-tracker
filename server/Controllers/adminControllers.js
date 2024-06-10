const User = require("../Schemas/userSchema");
const Leave = require("../Schemas/leaveSchema");

// get all users
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

// get a single user
const getUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.json({ user });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

const getLeaves = async (req, res, next) => {
  try {
    const leaves = await Leave.find();
    res.json({ leaves });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

const getAdmins = async (req, res, next) => {
  try {
    const admins = await User.find({ role: "admin" });
    res.json({ admins });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

const makeAdmin = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    user.role = "admin";
    await user.save();
    res.json({ user });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    await user.deleteOne();
    res.json({ user });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

const updateLeaveStatus = async (req, res, next) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const leave = await Leave.findById(id);
        leave.status = status;
        await leave.save();
        res.json({ leave });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
    
}

const getLeavesOfAUser = async (req, res, next) => {
    const { id } = req.params;
    try {
        const leaves = await Leave.find({ user: id });
        res.json({ leaves });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }

}

module.exports = {
  getAllUsers,
  getUser,
  getAdmins,
  getLeaves,
  makeAdmin,
  deleteUser,
  updateLeaveStatus,
  getLeavesOfAUser
};
