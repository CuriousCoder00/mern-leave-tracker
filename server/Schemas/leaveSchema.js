const mongoose = require("mongoose");

const Leave = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    leaveType: {
      type: String,
      required: true,
      enum: ["sick", "casual", "earned"],
    },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    leaveDuration: {
      type: Number,
    },
    reason: { type: String, required: true },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "approved", "rejected"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("leave", Leave);