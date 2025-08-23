const express = require("express");
const { addDevices, getDevices, deleteDevice } = require("../controllers/deviceController");

const router = express.Router();

router.post("/", addDevices);
router.get("/:userId", getDevices);
router.delete("/:userId/:deviceName", deleteDevice);

module.exports = router;
