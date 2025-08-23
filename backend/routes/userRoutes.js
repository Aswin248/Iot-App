const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

// Get all users (protected)
router.get("/", authMiddleware, userController.getAllUsers);

// Get single user by ID (optional)
router.get("/", authMiddleware, userController.getUserById);

module.exports = router;
