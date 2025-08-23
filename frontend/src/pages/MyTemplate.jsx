import { useState } from "react";

const MyTemplate = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="text-center p-4"
        style={{ width: "300px", height: "400px", fontSize: "0.8rem" }}
      >
        <h4 className="mb-3 fw-bold" style={{ fontSize: "1.25rem" }}>
          Start by creating your first template
        </h4>
        <p
          className="text-muted mb-3"
          style={{ fontSize: "0.75rem" }}
        >
          Template is a digital model of a physical object. It is used in the
          Blynk platform as a template to be assigned to devices.
        </p>
        <button
          type="button"
          className="btn btn-success d-flex align-items-center justify-content-center mx-auto"
          style={{ width: "130px", height: "28px", fontSize: "0.75rem" }}
        >
          <i className="bi bi-plus me-1"></i> New Template
        </button>
      </div>
    </div>
  );
};

export default MyTemplate;
