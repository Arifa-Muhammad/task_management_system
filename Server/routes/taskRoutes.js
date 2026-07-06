const {
  taskValidation,
  validate,
} = require("../middleware/validationMiddleware");
const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

// Create Task
router.post("/", protect, taskValidation, validate, createTask);

// Get All Tasks (for logged-in user)
router.get("/", protect, getTasks);

// Update Task
router.put("/:id", protect, updateTask);

// Delete Task
router.delete("/:id", protect, deleteTask);

module.exports = router;