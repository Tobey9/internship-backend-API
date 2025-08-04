const { body } = require("express-validator");

const userRoles = ["Admin", "Volunteer", "Intern"];

module.exports.registerValidator = [
  body("userName")
    .notEmpty()
    .withMessage("Username is required")
    .isLength({ min: 2 })
    .withMessage("Username must be at least 2 characters"),

  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Must be a valid email"),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6, max: 30 })
    .withMessage("Password must be 6-30 characters long"),

  body("role")
    .optional()
    .isIn(userRoles)
    .withMessage(`Role must be one of: ${userRoles.join(", ")}`),
];

module.exports.loginUserValidator = [
  body("email")
    .isEmail()
    .withMessage("Valid email is required")
    .normalizeEmail(),
  body("password").notEmpty().withMessage("password is required"),
];
