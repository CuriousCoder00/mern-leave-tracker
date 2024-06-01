const {
  userRegistration,
  userLogin,
  userLogout,
} = require("../Controllers/userControllers");
const express = require("express");
const {
  userRegistrationValidation,
  userLoginValidation,
} = require("../Validations/authValidation");
const { verifyToken } = require("../Middlewares/auth");
const { applyLeave, fetchAllLeaves, deleteLeave } = require("../Controllers/leaveControllers");
const router = express.Router();

router.post("/register", userRegistrationValidation, userRegistration);
router.post("/login", userLoginValidation, userLogin);
router.post("/logout", userLogout);
router.post("/apply-leave", verifyToken, applyLeave);
router.get("/get-all-leaves/:id", verifyToken, fetchAllLeaves)
router.delete("/delete-leave/:id", verifyToken, deleteLeave)

module.exports = router;
