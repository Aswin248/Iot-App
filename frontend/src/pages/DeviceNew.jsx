import { useState, useEffect } from "react";
import axios from "axios";

const DeviceNew = () => {
  const userId = "101"; // Example user ID
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDevices, setSelectedDevices] = useState([]);
  const [addedDevices, setAddedDevices] = useState([]);

  // List of available devices
  const devices = [
    { name: "Fridge", icon: "bi-box-seam" },
    { name: "AC", icon: "bi-fan" },
    { name: "Light", icon: "bi-lightbulb" },
    { name: "TV", icon: "bi-tv" },
    { name: "Speaker", icon: "bi-speaker" },
  ];

  // Filter devices based on search
  const filteredDevices = devices.filter((d) =>
    d.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle device selection
  const handleSelectDevice = (device) => {
    if (selectedDevices.find((d) => d.name === device.name)) {
      setSelectedDevices(selectedDevices.filter((d) => d.name !== device.name));
    } else {
      setSelectedDevices([...selectedDevices, device]);
    }
  };

  // Add selected devices
  const handleAddDevices = async () => {
    const newDevices = selectedDevices.filter(
      (d) => !addedDevices.find((ad) => ad.name === d.name)
    );
    if (newDevices.length === 0) return;

    try {
      await axios.post("http://localhost:5000/api/devices", {
        userId,
        devices: newDevices,
      });
      setAddedDevices([...addedDevices, ...newDevices]);
      setSelectedDevices([]);
    } catch (err) {
      console.error(err);
      alert("Failed to save devices!");
    }
  };

  // Remove device
  const handleRemoveDevice = async (deviceName) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/devices/${userId}/${deviceName}`
      );
      setAddedDevices(addedDevices.filter((d) => d.name !== deviceName));
    } catch (err) {
      console.error(err);
      alert("Failed to remove device!");
    }
  };

  // Fetch added devices on mount
  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/devices/${userId}`
        );
        setAddedDevices(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchDevices();
  }, []);

  return (
    <div
      className="devices"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        gap: "20px",
      }}
    >
      <h5 className="createDevice">Create New Device</h5>
      <h6>Select devices and click “Add Device”</h6>

      {/* Search */}
      <input
        className="searchDevice form-control"
        type="text"
        placeholder="Search device..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: "250px" }}
      />

      {/* Device selection */}
      <div
        className="deviceOptions"
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {filteredDevices.map((device, idx) => {
          const isSelected = selectedDevices.find((d) => d.name === device.name);
          return (
            <div
              key={idx}
              onClick={() => handleSelectDevice(device)}
              style={{
                cursor: "pointer",
                width: "100px",
                height: "100px",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: isSelected
                  ? "0 0 10px #198754"
                  : "0 2px 5px rgba(0,0,0,0.15)",
                backgroundColor: isSelected ? "#d1e7dd" : "#fff",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <i
                className={`bi ${device.icon}`}
                style={{ fontSize: "1.5rem", marginBottom: "10px" }}
              ></i>
              <span>{device.name}</span>
            </div>
          );
        })}
      </div>

      {/* Add button */}
      {selectedDevices.length > 0 && (
        <button
          onClick={handleAddDevices}
          className="btn btn-success"
          style={{ marginTop: "10px" }}
        >
          Add Device ({selectedDevices.length})
        </button>
      )}

      {/* Added devices */}
      {addedDevices.length > 0 && (
        <div style={{ marginTop: "20px", width: "100%", textAlign: "center" }}>
          <h6>Added Devices:</h6>
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {addedDevices.map((device, idx) => (
              <div
                key={idx}
                style={{
                  padding: "10px 15px",
                  backgroundColor: "#0d6efd",
                  color: "#fff",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <i className={`bi ${device.icon}`}></i>
                <span>{device.name}</span>
                <button
                  onClick={() => handleRemoveDevice(device.name)}
                  style={{
                    marginLeft: "5px",
                    border: "none",
                    background: "transparent",
                    color: "#fff",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DeviceNew;
