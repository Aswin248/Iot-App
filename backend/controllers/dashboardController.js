const mongoose = require("mongoose");
const Dashboard = require("../models/Dashboard");

// Save or update dashboard
const saveDashboard = async (req, res) => {
  try {
    const { userId } = req.params;
    const { widgets } = req.body;

    if (!Array.isArray(widgets)) {
      return res.status(400).json({ error: "Widgets must be an array" });
    }

    const dashboard = await Dashboard.findOneAndUpdate(
      { userId: mongoose.Types.ObjectId(userId) },
      { $set: { widgets } },
      { new: true, upsert: true }
    );

    res.json(dashboard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get dashboard by userId
const getDashboard = async (req, res) => {
  try {
    const { userId } = req.params;
    const dashboard = await Dashboard.findOne({ userId: mongoose.Types.ObjectId(userId) });

    if (!dashboard) return res.json({ widgets: [] });

    res.json(dashboard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { saveDashboard, getDashboard };
