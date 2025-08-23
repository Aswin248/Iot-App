// routes/dashboardRoutes.js
const express = require("express");
const { saveDashboard, getDashboard } = require("../controllers/dashboardController");

const router = express.Router();

router.post("/", saveDashboard);
router.get("/dashboard/:userId", getDashboard);

module.exports = router;   // ✅ CommonJS export
