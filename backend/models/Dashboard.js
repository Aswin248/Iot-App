const mongoose = require("mongoose");

const WidgetSchema = new mongoose.Schema({
  type: { type: String, required: true },
  data: { type: mongoose.Schema.Types.Mixed, default: {} },
});

const DashboardSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  widgets: { type: [WidgetSchema], default: [] },
}, { timestamps: true });

module.exports = mongoose.model("Dashboard", DashboardSchema);
