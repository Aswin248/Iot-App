import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  icon: { type: String },
});

const Device = mongoose.model("Device", deviceSchema);

export default Device;
