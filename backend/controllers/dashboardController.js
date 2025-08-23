// controllers/dashboardController.js
const Dashboard = require("../models/Dashboard");

// Save or update dashboard
const saveDashboard = async (req, res) => {
  try {
    const { userId, widgets } = req.body;

    let dashboard = await Dashboard.findOne({ userId });
    if (dashboard) {
      dashboard.widgets = widgets;
      await dashboard.save();
    } else {
      dashboard = await Dashboard.create({ userId, widgets });
    }

    res.json(dashboard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get dashboard by user
const getDashboard = async (req, res) => {
  try {
    const { userId } = req.params;
    const dashboard = await Dashboard.findOne({ userId });
    if (!dashboard) return res.json({ widgets: [] });
    res.json(dashboard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { saveDashboard, getDashboard };
