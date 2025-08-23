import { useState } from "react";

const Integrations = () => {
  return (
    <div className="container mt-4">
      <h5 className="fw-bold mb-3">Integrations</h5>
      <div className="row row-cols-1 row-cols-md-3 g-3">

        {/* Card 1 */}
        <div className="col">
          <div className="card h-100 border-0 shadow-sm-hover">
            <div className="card-body d-flex flex-column" style={{ fontSize: "0.8rem" }}>
              <h6 className="card-title fw-semibold">Blues</h6>
              <p className="card-text flex-grow-1">Connect Blues Project to Blynk</p>
              <button className="btn btn-sm bg-secondary text-white border-0 px-3 mt-auto align-self-start">
                Not Connected
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col">
          <div className="card h-100 border-0 shadow-sm-hover">
            <div className="card-body d-flex flex-column" style={{ fontSize: "0.8rem" }}>
              <h6 className="card-title fw-semibold">The Things Stack</h6>
              <p className="card-text flex-grow-1">Connect The Things Stack to Blynk</p>
              {/* no button, but layout stays aligned */}
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col">
          <div className="card h-100 border-0 shadow-sm-hover">
            <div className="card-body d-flex flex-column" style={{ fontSize: "0.8rem" }}>
              <h6 className="card-title fw-semibold">AWS IoT Core</h6>
              <p className="card-text flex-grow-1">Connect AWS to Blynk</p>
              <button className="btn btn-sm bg-secondary text-white border-0 px-3 mt-auto align-self-start">
                Not Connected
              </button>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col">
          <div className="card h-100 border-0 shadow-sm-hover">
            <div className="card-body d-flex flex-column" style={{ fontSize: "0.8rem" }}>
              <h6 className="card-title fw-semibold">Myriota</h6>
              <p className="card-text flex-grow-1">Connect Myriota to Blynk</p>
              <button className="btn btn-sm bg-secondary text-white border-0 px-3 mt-auto align-self-start">
                Not Connected
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Custom CSS */}
      <style>
        {`
          .shadow-sm-hover {
            transition: box-shadow 0.2s ease-in-out;
          }
          .shadow-sm-hover:hover {
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          }
        `}
      </style>
    </div>
  );
};

export default Integrations;
