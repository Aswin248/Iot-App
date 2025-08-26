const express = require("express");
const router = express.Router();
const { saveDashboard, getDashboard } = require("../controllers/dashboardController");
const authMiddleware = require("../middleware/authMiddleware");

// JWT protected routes
router.get("/", authMiddleware, getDashboard);
router.post("/", authMiddleware, saveDashboard);

module.exports = router;
