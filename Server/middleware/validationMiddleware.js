const { body, validationResult } = require("express-validator");

// Register Validation
const registerValidation = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Enter a valid email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];

// Login Validation
const loginValidation = [
  body("email").isEmail().withMessage("Enter a valid email"),
  body("password").notEmpty().withMessage("Password is required"),
];

// Task Validation
const taskValidation = [
  body("title").notEmpty().withMessage("Task title is required"),
  body("status")
    .isIn(["Pending", "In Progress", "Completed"])
    .withMessage("Invalid task status"),
];

// Validation Result
const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  next();
};

module.exports = {
  registerValidation,
  loginValidation,
  taskValidation,
  validate,
};