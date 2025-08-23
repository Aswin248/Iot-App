import SideBar from '../Components/SideBar';

const Locations = () => {
  

  return (
    <div className="d-flex justify-content-center align-items-center p-4 w-100">
      <div 
        className="d-flex flex-column align-items-center justify-content-center text-center p-4 rounded"
        style={{ width: "400px", height: "500px" }}
      >
        <h5 className="fw-semibold mb-3">Use Locations to organize your devices better</h5>
        <p className="mb-4" style={{ fontSize: "0.9rem" }}>
          Start by creating a Location. Once created, you can assign users and devices to a Location.
        </p>
        <button
          type="button"
          className="btn btn-success d-flex align-items-center justify-content-center"
          style={{ width: "191px", height: "36px", fontSize: "0.9rem" }}
        >
          <i className="bi bi-plus me-2"></i> Create New Location
        </button>
      </div>
    </div>
  );
};

export default Locations;
