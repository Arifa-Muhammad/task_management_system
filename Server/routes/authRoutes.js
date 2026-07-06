const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");
const User = require("../models/User");

const {
  registerValidation,
  loginValidation,
  validate,
} = require("../middleware/validationMiddleware");

router.post("/register", registerValidation, validate, register);

router.post("/login", loginValidation, validate, login);

router.get("/profile", protect, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});

module.exports = router;