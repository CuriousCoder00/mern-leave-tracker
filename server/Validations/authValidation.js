const { body } = require("express-validator");

const userRegistrationValidation = [
  body("name", "Name shouldn't be empty. Please enter valid name.")
    .notEmpty()
    .isString()
    .withMessage("name should be String"),
  body("email", "Please enter a valid email.")
    .isEmail()
    .withMessage("Please provide valid email"),
  body("password", "Password must be at least of 5 characters.")
    .notEmpty()
    .isString()
    .withMessage("password should be string")
    .isLength({
      min: 5,
    })
    .withMessage("password should be at least 5 characters"),
];

const userLoginValidation = [
  body("email", "Please enter a valid email.")
    .isEmail()
    .withMessage("Please provide valid email"),
  body("password", "Password must be at least of 5 characters.")
    .notEmpty()
    .isString()
    .withMessage("password should be string")
    .isLength({
      min: 5,
    })
    .withMessage("password should be at least 5 characters"),
];

module.exports = {
  userRegistrationValidation, userLoginValidation
};
