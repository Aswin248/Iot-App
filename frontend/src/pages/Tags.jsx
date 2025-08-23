const Tags = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ width: "100%", height: "100vh" }} // full viewport height
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px",
          width:"800px"
        }}
      >
        <h6 className="fw-semibold mb-2">You don't have any tags yet.</h6>
        <p className="mb-3">Start by creating a first tag</p>
        <button
          type="button"
          className="btn btn-success btn-sm d-flex justify-content-center align-items-center"
          style={{
            width: "160px",
            height: "32px",
            fontSize: "0.8rem",
          }}
        >
          <i className="bi bi-plus me-2"></i> Create a new tag
        </button>
      </div>
    </div>
  );
};

export default Tags;
