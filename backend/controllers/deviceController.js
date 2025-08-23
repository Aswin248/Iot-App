import Device from "../models/Device.js";

// Add devices
export const addDevices = async (req, res) => {
  const { userId, devices } = req.body;
  try {
    const createdDevices = await Device.insertMany(
      devices.map((d) => ({ ...d, userId }))
    );
    res.status(201).json(createdDevices);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to add devices" });
  }
};

// Get devices for a user
export const getDevices = async (req, res) => {
  const { userId } = req.params;
  try {
    const devices = await Device.find({ userId });
    res.status(200).json(devices);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch devices" });
  }
};

// Delete a device
export const deleteDevice = async (req, res) => {
  const { userId, deviceName } = req.params;
  try {
    await Device.deleteOne({ userId, name: deviceName });
    res.status(200).json({ message: "Device removed" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete device" });
  }
};
