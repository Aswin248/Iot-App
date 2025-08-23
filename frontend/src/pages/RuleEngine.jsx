import { useState } from "react";

const RuleEngine = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="text-center p-4"
        style={{ width: "360px", fontSize: "0.85rem" }}
      >
        <h4 className="fw-bold mb-3">Rule Engine</h4>
        <p className="text-muted mb-3" style={{ fontSize: "0.8rem" }}>
          Define custom logic and create complex rules to control device behavior
          at scale, automating actions based on conditions and triggers.
        </p>
        <p className="text-muted mb-3" style={{ fontSize: "0.8rem" }}>
          This feature is available with{" "}
          <span className="fw-semibold">Blynk Enterprise</span> plan.
        </p>
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

export default RuleEngine;
