import { useState } from "react";

const StaticTokens = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="text-center p-4"
        style={{ width: "340px", fontSize: "0.85rem" }}
      >
        <h4 className="fw-bold mb-3" style={{ fontSize: "1.25rem" }}>
          Static Tokens
        </h4>
        <p className="text-muted mb-2" style={{ fontSize: "0.8rem" }}>
          Generate AuthTokens and QR-codes to easily connect large fleets of
          devices via Static Token flow.
        </p>
        <p className="text-muted" style={{ fontSize: "0.8rem" }}>
          This feature is available with <span className="fw-semibold">Blynk PRO</span> plan.
        </p>
      </div>
    </div>
  );
};

export default StaticTokens;
