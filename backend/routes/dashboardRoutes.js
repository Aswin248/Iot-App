const express = require("express");
const router = express.Router();
const { saveDashboard, getDashboard } = require("../controllers/dashboardController");

router.get("/:userId", getDashboard);
router.post("/:userId", saveDashboard);

module.exports = router;
