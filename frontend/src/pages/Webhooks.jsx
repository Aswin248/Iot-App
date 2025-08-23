import { useState } from "react";

const Webhooks = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="text-center p-3"
        style={{ width: "340px", fontSize: "0.8rem" }}
      >
        <h4 className="fw-bold mb-2">Webhooks</h4>
        <p className="mb-3">
          Webhooks let you connect Blynk events to other services on the Internet. 
          Start by creating your first one. Full documentation can be found here.
        </p>
        <button
          type="button"
          className="btn btn-success btn-sm d-flex align-items-center justify-content-center mx-auto"
          style={{ fontSize: "0.7rem", padding: "4px 12px" }}
        >
          <i className="bi bi-plus me-1"></i>
          Create Webhook
        </button>
      </div>
    </div>
  );
};

export default Webhooks;
