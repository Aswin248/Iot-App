const mongoose = require("mongoose");

const DashboardSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  widgets: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("Dashboard", DashboardSchema);
