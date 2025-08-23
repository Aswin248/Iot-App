// models/Dashboard.js
const mongoose = require("mongoose");

const widgetSchema = new mongoose.Schema({
  type: { type: String, required: true },
});

const dashboardSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true }, // could come from auth
    widgets: [widgetSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dashboard", dashboardSchema);
