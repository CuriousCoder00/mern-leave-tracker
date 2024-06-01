const { validationResult } = require("express-validator");
const Leave = require("../Schemas/leaveSchema");

const applyLeave = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const { leaveType, startDate, endDate, leaveDuration, reason } = req.body;
    // calculateLeaveDuration
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(startDate);
    const secondDate = new Date(endDate);
    const calculatedLeaveDuration = Math.round(
      Math.abs((firstDate - secondDate) / oneDay)
    );
    let leave = new Leave({
      leaveType,
      startDate,
      endDate,
      leaveDuration: calculatedLeaveDuration,
      reason,
      user: req.user.id,
    });

    await leave.save();

    res.json({
      success: true,
      leave,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

const fetchAllLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find({ user: req.user.id });
    res.json({
      success: true,
      leaves,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

const deleteLeave = async (req, res) => {
  try {
    const leave = await Leave.findById(req.params.id);
    if (!leave) {
      return res.status(404).json({ msg: "Leave not found" });
    }
    if (leave.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }
    await leave.deleteOne();
    res.json({ msg: "Leave removed" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  applyLeave,
  fetchAllLeaves,
  deleteLeave,
};
