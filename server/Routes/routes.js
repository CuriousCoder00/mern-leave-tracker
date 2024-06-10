const {
  userRegistration,
  userLogin,
  userLogout,
  updateUser,
} = require("../Controllers/userControllers");
const express = require("express");
const {
  userRegistrationValidation,
  userLoginValidation,
} = require("../Validations/authValidation");
const { verifyToken } = require("../Middlewares/auth");
const {
  applyLeave,
  fetchAllLeaves,
  deleteLeave,
} = require("../Controllers/leaveControllers");
const {
  getAllUsers,
  getAdmins,
  getUser,
  getLeavesOfAUser,
  makeAdmin,
  deleteUser,
  updateLeaveStatus,
  getLeaves,
} = require("../Controllers/adminControllers");
const router = express.Router();

// user routes
router.post("/register", userRegistrationValidation, userRegistration);
router.post("/login", userLoginValidation, userLogin);
router.post("/logout", userLogout);
router.post("/apply-leave", verifyToken, applyLeave);
router.get("/get-all-leaves/:id", verifyToken, fetchAllLeaves);
router.delete("/delete-leave/:id", verifyToken, deleteLeave);
router.put("/update/user", verifyToken, updateUser);

// admin routes
router.get("/users", verifyToken, getAllUsers);
router.get("/admins", verifyToken, getAdmins);
router.get("/leaves", verifyToken, getLeaves);

// get user by id
router.get("/user/:id", verifyToken, getUser);

// get leaves of a user by user id without token with admin role
router.get("/get-leaves/:id", getLeavesOfAUser);

// make a user admin
router.put("/make-admin/:id", verifyToken, makeAdmin);

// delete a user
router.delete("/delete-user/:id", verifyToken, deleteUser);

// update leave status
router.put("/update-leave-status/:id", verifyToken, updateLeaveStatus);

module.exports = router;
