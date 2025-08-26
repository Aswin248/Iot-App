import SideBar from '../Components/SideBar';
import { useState } from 'react';

const Locations = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [locationName, setLocationName] = useState("");

  const handleCreate = () => {
    if (locationName.trim() === "") return alert("Please enter a location name");

    // 🔹 Here you can call API or update state with new location
    console.log("New Location Created:", locationName);

    // Reset + close popup
    setLocationName("");
    setShowPopup(false);
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="d-flex justify-content-center align-items-center p-4 w-100">
        <div 
          className="d-flex flex-column align-items-center justify-content-center text-center p-4 rounded shadow"
          style={{ maxWidth: "400px", minHeight: "500px" }}
        >
          <h5 className="fw-semibold mb-3">
            Use Locations to organize your devices better
          </h5>
          <p className="mb-4" style={{ fontSize: "0.9rem" }}>
            Start by creating a Location. Once created, you can assign users and devices to a Location.
          </p>
          <button
            type="button"
            className="btn btn-success d-flex align-items-center justify-content-center"
            style={{ width: "191px", height: "36px", fontSize: "0.9rem" }}
            onClick={() => setShowPopup(true)}
          >
            <i className="bi bi-plus me-2"></i> Create New Location
          </button>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="bg-white p-4 rounded shadow" style={{ width: "400px" }}>
            <h5 className="mb-3">Create Location</h5>
            <p>Create new location by filling in the form below.</p>
            <p>Name</p>
            
            <input 
              type="text" 
              className="form-control mb-3" 
              placeholder="Location Name" 
              value={locationName}
              onChange={(e) => setLocationName(e.target.value)}
            />

            <div className="d-flex justify-content-end gap-2">
              <button 
                className="btn btn-secondary"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>
              <button 
                className="btn btn-success"
                onClick={handleCreate}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Locations;
