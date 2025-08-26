import { useState, useEffect } from "react";
import axios from "axios";

const MyTemplate = () => {
  const [showModal, setShowModal] = useState(false);

  // form states
  const [name, setName] = useState("");
  const [hardware, setHardware] = useState("");
  const [connection, setConnection] = useState("");
  const [description, setDescription] = useState("");
  const [templates, setTemplates] = useState([]);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Fetch templates for logged-in user
  const fetchTemplates = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const res = await axios.get("http://localhost:5000/api/templates", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTemplates(res.data || []); // ✅ backend sends array
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTemplates();
  }, []);

  // Save template
  const handleSave = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        "http://localhost:5000/api/templates",
        { name, hardware, connection, description },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Saved:", res.data);

      // ✅ refresh & close modal
      fetchTemplates();
      handleClose();

      // ✅ reset form
      setName("");
      setHardware("");
      setConnection("");
      setDescription("");
    } catch (err) {
      console.error("Save error:", err.response?.data || err.message);
    }
  };

  // Delete template
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this template?")) return;

    try {
      const token = localStorage.getItem("token");
      const res = await axios.delete(`http://localhost:5000/api/templates/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.status === 200) {
        alert("🗑️ Template deleted successfully!");
        fetchTemplates();
      }
    } catch (err) {
      console.error(err);
      alert("❌ Failed to delete template");
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-4 w-100">
      <div className="text-center p-4" style={{ maxWidth: "320px" }}>
        <h4 className="mb-3 fw-bold fs-5">Start by creating your first template</h4>
        <p className="text-muted mb-3 small">
          Template is a digital model of a physical object. It is used in the Blynk platform as a template to be assigned to devices.
        </p>
        <button
          type="button"
          onClick={handleOpen}
          className="btn btn-success d-flex align-items-center justify-content-center mx-auto px-3 py-1"
          style={{ fontSize: "0.8rem" }}
        >
          <i className="bi bi-plus me-1"></i> New Template
        </button>
      </div>

      {/* Templates List */}
      <div className="w-75 mt-4">
        <h5>Your Templates</h5>
        {templates.length === 0 ? (
          <p className="text-muted">No templates created yet.</p>
        ) : (
          <ul className="list-group">
            {templates.map((tpl, index) => (
              <li
                key={tpl._id}
                className="list-group-item d-flex justify-content-between align-items-start"
              >
                <div>
                  <strong>{index + 1}. {tpl.name}</strong><br />
                  <small>ID: {tpl._id}</small><br />
                  <small>HW: {tpl.hardware} | Conn: {tpl.connection}</small>
                  <p className="mb-0">{tpl.description}</p>
                </div>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(tpl._id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            role="document"
            style={{ maxWidth: "900px" }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create New Template</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  {/* Template Name */}
                  <div className="mb-3">
                    <label className="form-label">Template Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  {/* Hardware + Connection Type */}
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Hardware</label>
                      <select
                        className="form-select"
                        value={hardware}
                        onChange={(e) => setHardware(e.target.value)}
                      >
                        <option value="">Select hardware</option>
                        <option value="arduino">Arduino</option>
                        <option value="atim">Atim</option>
                        <option value="bbc-micro:bit">BBC Micro:bit</option>
                        <option value="esp32">ESP32</option>
                        <option value="esp8266">ESP8266</option>
                        <option value="iridium-9704-launch-pad">Iridium 9704 Launch Pad</option>
                        <option value="lantronix-fox-3">Lantronix Fox 3</option>
                        <option value="microduino">Microduino</option>
                        <option value="milesight">Milesight</option>
                        <option value="miramica">Miramica</option>
                        <option value="mokosmart">MOKOSmart</option>
                        <option value="ncd">NCD</option>
                        <option value="onion-omega">Onion Omega</option>
                        <option value="particle">Particle</option>
                        <option value="pepperl-fuchs">Pepperl Fuchs</option>
                        <option value="pycom-wipy">Pycom WiPy</option>
                        <option value="raspberry-pi">Raspberry Pi</option>
                        <option value="seeed">Seeed</option>
                        <option value="seeed-wio-terminal">Seeed Wio Terminal</option>
                        <option value="sparkfun-blynk-board">Spark Fun Blynk Board</option>
                        <option value="teensy">Teensy</option>
                        <option value="thermankan">Thermankan</option>
                        <option value="tinyduino">TinyDuino</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Connection Type</label>
                      <select
                        className="form-select"
                        value={connection}
                        onChange={(e) => setConnection(e.target.value)}
                      >
                        <option value="">Select connection</option>
                        <option value="ethernet">Ethernet</option>
                        <option value="wifi">WiFi</option>
                        <option value="gsm">GSM</option>
                        <option value="lorawan">LoRaWan</option>
                      </select>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleSave}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyTemplate;
