import { useState } from "react";

const BlynkAir = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="text-center p-4"
        style={{ width: "320px", fontSize: "0.8rem" }}
      >
        <h6 className="fw-bold mb-3" style={{ fontSize: "1.1rem" }}>
          Ship new firmware updates Over-The-Air
        </h6>
        <p className="text-muted mb-3" style={{ fontSize: "0.75rem" }}>
          Here you can remotely update millions of your devices with new
          firmware and track shipment progress.
        </p>
        <button
          type="button"
          className="btn btn-success d-flex align-items-center justify-content-center mx-auto"
          style={{ width: "140px", height: "30px", fontSize: "0.8rem" }}
        >
          <i className="bi bi-plus me-1"></i> New Shipping
        </button>
      </div>
    </div>
  );
};

export default BlynkAir;
