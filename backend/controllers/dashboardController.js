const mongoose = require("mongoose");
const Dashboard = require("../models/Dashboard");

// Save or update dashboard
const saveDashboard = async (req, res) => {
  try {
    const { widgets } = req.body;
    const userId = req.user?.userId; // ✅ comes from JWT

    if (!userId) {
      return res.status(401).json({ error: "Unauthorized: No user ID" });
    }

    if (!Array.isArray(widgets)) {
      return res.status(400).json({ error: "Widgets must be an array" });
    }

    const dashboard = await Dashboard.findOneAndUpdate(
      { userId: new mongoose.Types.ObjectId(userId) }, // ✅ safe objectId
      { $set: { widgets } },
      { new: true, upsert: true }
    );

    res.status(200).json({
      success: true,
      message: "Dashboard saved successfully",
      dashboard,
    });
  } catch (err) {
    console.error("Dashboard save error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get dashboard
const getDashboard = async (req, res) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({ error: "Unauthorized: No user ID" });
    }

    const dashboard = await Dashboard.findOne({
      userId: new mongoose.Types.ObjectId(userId),
    });

    res.status(200).json(dashboard || { widgets: [] });
  } catch (err) {
    console.error("Dashboard fetch error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { saveDashboard, getDashboard };
