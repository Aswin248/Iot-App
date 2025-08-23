import { useState } from "react";

const QAuth = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="text-center p-3"
        style={{ width: "320px", fontSize: "0.75rem" }}
      >
        <h4 className="fw-bold mb-2">OAuth 2.0</h4>
        <p className="mb-2">
          Use an OAuth 2.0 token to authenticate third-party services via the
          Access Token URI, ensuring requests come from a verified and trusted
          source.
        </p>
        <p className="text-muted mb-3">This feature is available with Blynk Enterprise plan.</p>
        <button
          className="btn btn-primary d-flex align-items-center justify-content-center mx-auto"
          style={{ fontSize: "0.8rem" }}
        >
          <i className="bi bi-chat me-2"></i>
          Contact Sales
        </button>
      </div>
    </div>
  );
};

export default QAuth;
