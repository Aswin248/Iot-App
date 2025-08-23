import { useState, useEffect } from "react";
import axios from "axios";
import Locker from "../assets/Locker.jpg";
import DevicesImg from "../assets/Devices.png";
import NoC from "../assets/NoCo.jpg";
import { ThemeContext } from "../Contexts/ThemeContext";
import { useContext } from "react";

const Started = () => {
  const [addedDevices, setAddedDevices] = useState([]);
  const userId = "101";
    const { theme, toggleTheme } = useContext(ThemeContext);


    useEffect(() => {
    const fetchDevices = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/devices/${userId}`);
        setAddedDevices(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchDevices();
  }, []);

  const handleClickDocs = () => {
    window.open(
      "https://docs.blynk.io/en/getting-started/supported-boards",
      "_blank"
    );
  };

  const handleClickVideo = () => {
    window.location.href =
      "https://www.youtube.com/watch?time_continue=13&v=81QxLLhxs6I";
  };

  return (
    <>
    <div className="start">
      <h2 style={{ fontSize: "1.5rem",marginBottom: "0.5rem",fontWeight: 700}}>
  Get Started With Blynk  🚀
</h2>

      <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>Your Plan Details</p>
 <div style={{ width: "600px" }}>
  <table className="table table-borderless" style={{ fontSize: "0.88rem", lineHeight: "1.1" }}>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>{addedDevices.length}/10</td>
        <td>0/30000</td>
        <td>0/10</td>
        <td>1/1</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Devices</td>
        <td>Device Messages</td>
        <td>Templates Created</td>
        <td>Team Members</td>
      </tr>
    </tbody>
  </table>
</div>



      <p className="mt-4 fw-bold" style={{ fontSize: "0.95rem" }}>
        Suggested For You
      </p>

<div className="d-flex gap-3 flex-wrap m-3">
  {/* First card */}
  <div
    className="card flex-grow-0"
    style={{ cursor: "pointer", width: "220px" }}
    onClick={handleClickVideo}
  >
    <img
      src={DevicesImg}
      alt=""
      className="card-img-top"
      style={{ height: "140px", objectFit: "cover" }} // smaller image
    />
    <div className="card-body p-2">
      <h6 className="card-title mb-1" style={{ fontSize: "0.8rem" }}>
        How to connect a device to app
      </h6>
      <p className="card-text mb-1" style={{ fontSize: "0.7rem" }}>
        Learn how to set up your device with step-by-step guides.
      </p>
      <p className="text-success fw-bold mb-0" style={{ fontSize: "0.75rem" }}>
        Watch
      </p>
    </div>
  </div>

  {/* Second card */}
  <div className="card flex-grow-0" style={{ width: "220px" }}>
    <img
      src={NoC}
      alt="No Card"
      className="card-img-top"
      style={{ height: "130px", objectFit: "cover" }}
    />
    <div className="card-body p-2">
      <h6 className="card-title mb-1" style={{ fontSize: "0.8rem" }}>
        No card Automations
      </h6>
      <p className="card-text mb-1" style={{ fontSize: "0.7rem" }}>
        Automate Device Actions
      </p>
      <p className="text-success fw-bold mb-0" style={{ fontSize: "0.75rem" }}>
        Try Now
      </p>
    </div>
  </div>

  {/* Third card */}
  <div className="card flex-grow-0" style={{ width: "220px" }}>
    <img
      src={Locker}
      alt="Locker"
      className="card-img-top"
      style={{ height: "130px", objectFit: "cover" }}
    />
    <div className="card-body p-2">
      <h6 className="card-title mb-1" style={{ fontSize: "0.8rem" }}>
        Customize your app's lock
      </h6>
      <p className="card-text mb-1" style={{ fontSize: "0.7rem" }}>
        Skip the time-consuming app review process.
      </p>
      <p className="text-success fw-bold mb-0" style={{ fontSize: "0.75rem" }}>
        Learn More
      </p>
    </div>
  </div>
</div>


      <div className="row row-cols-1 row-cols-md-2 g-4 m-2">
        {/* First column */}
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title fw-semibold" style={{ fontSize: "0.95rem" }}>
                 <i class="bi bi-box"></i>   Activate your devices in Blynk
              </h5>
              <p className="card-text ms-3" style={{ fontSize: "0.85rem" }}>
                Connect via Blynk.Edgent, Blynk.NCP, MQTT, HTTPs API, LoRaWAN,
                the Blynk Library, or import from third-party cloud services.
              </p>
              <button
                type="button"
                className="btn btn-success"
                style={{
                  width: "116px",
                  height: "29px",
                  fontSize: "0.75rem",
                  padding: "5px 10px",
                }}
              >
                Connect a device
              </button>
              <a
                className="m-2"
                onClick={handleClickDocs}
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#1e641eff",
                  fontSize: "13px",
                }}
              >
                View Compatibility Devices
              </a>
            </div>
          </div>
        </div>

        {/* Other columns remain unchanged */}
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title fw-semibold" style={{ fontSize: "0.95rem" }}>
                 <i class="bi bi-key"></i>  What is Authentication Token?
              </h5>
              <p className="card-text ms-3" style={{ fontSize: "0.85rem" }}>
                Devices need an Auth Token to connect to Blynk. Copy it
                manually from Developer Tools or skip with Blynk.Edgent.
              </p>
              <a
                className="m-2"
                href="https://docs.blynk.io/en/getting-started/activating-devices/manual-device-activation#getting-auth-token"
                target="_blank"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#1e641eff",
                  fontSize: "13px",
                }}
              >
                How To Access Auth Token
              </a>
              <a
                className="m-2"
                href="https://docs.blynk.io/en/blynk.edgent/overview"
                target="_blank"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#1e641eff",
                  fontSize: "13px",
                }}
              >
                Skip With Blynk.Edgent
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title fw-semibold" style={{ fontSize: "0.95rem" }}>
                 <i class="bi bi-chat-square"></i>  Message Limit
              </h5>
              <p className="card-text ms-3" style={{ fontSize: "0.85rem" }}>
                If you exceed the monthly message limit on the Free plan, your
                devices will stop communicating. Optimize usage or upgrade to
                keep everything running smoothly.
              </p>
              <a
                className="m-2"
                href="https://docs.blynk.io/en/message-usage"
                target="_blank"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#1e641eff",
                  fontSize: "13px",
                }}
              >
                Optimize Message Usage
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title fw-semibold" style={{ fontSize: "0.95rem" }}>
                 <i class="bi bi-brightness-high"></i>  Automations
              </h5>
              <p className="card-text ms-3" style={{ fontSize: "0.85rem" }}>
                Use schedules, device states, or events to trigger automated actions across your devices.
              </p>
              <a
                className="m-2"
                href="Automations"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#1e641eff",
                  fontSize: "13px",
                }}
              >
                Add Automation
              </a>
              
              
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title fw-semibold" style={{ fontSize: "0.95rem" }}>
                
                         <i class="bi bi-arrow-down-left-circle"></i>      Integrations
              </h5>
              <p className="card-text ms-3" style={{ fontSize: "0.85rem" }}>
                Connect Blynk to external platforms like AWS, The Things Stack, and others to onboard devices and enable two-way data exchange.
              </p>
              <a
                className="m-2"
                href="https://docs.blynk.io/en/message-usage"
                target="_blank"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#1e641eff",
                  fontSize: "13px",
                }}
              >
                Set Up An Itegeration
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title fw-semibold" style={{ fontSize: "0.95rem" }}>
                 <i class="bi bi-server"></i> Webhooks
              </h5>
              <p className="card-text ms-3" style={{ fontSize: "0.85rem" }}>
                Trigger external actions when specific device or template events occur—perfect for notifications, logging, or custom workflows.
              </p>
              <a
                className="m-2"
                href="https://docs.blynk.io/en/blynk.console/settings/developers/webhooks"
                target="_blank"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#1e641eff",
                  fontSize: "13px",
                }}
              >
                Explore Webhooks
              </a>
              <button className="btn btn-success" 
              style={{width: "116px",
                  height: "29px",
                  fontSize: "0.75rem",
                  padding: "5px 10px",}}>Create Webhook</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title fw-semibold" style={{ fontSize: "0.95rem" }}>
                   <i class="bi bi-people"></i>   Organizations / Multi-Tenancy
              </h5>
              <p className="card-text ms-3" style={{ fontSize: "0.85rem" }}>
                Use Organizations to manage access and device visibility for clients, partners, or internal teams. Keep projects separate, control permissions, and scale with ease.
              </p>
              <a
                className="m-2"
                href="https://docs.blynk.io/en/concepts/organizations"
                target="_blank"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#1e641eff",
                  fontSize: "13px",
                }}
              >
                How Organization Work
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title fw-semibold" style={{ fontSize: "0.95rem" }}>
                 <i class="bi bi-dash-square-dotted"></i>   Dashboards
              </h5>
              <p className="card-text ms-3" style={{ fontSize: "0.85rem" }}>
                Dashboards let you track multiple devices and data points in real time. Create a full operational views using charts, controls, and status indicators.
              </p>
              <button
                type="button"
                className="btn btn-success"
                style={{
                  width: "116px",
                  height: "29px",
                  fontSize: "0.75rem",
                  padding: "5px 10px",
                }}
              >
                Go To Dashboard
              </button>
              <a
                className="m-2"
                href="https://docs.blynk.io/en/blynk.console/dashboards"
                target="_blank"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#1e641eff",
                  fontSize: "13px",
                }}
              >
                Dashboards Guide
              </a>
              
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title fw-semibold" style={{ fontSize: "0.95rem" }}>
                   <i class="bi bi-motherboard"></i>    Device Templates
              </h5>
              <p className="card-text ms-3" style={{ fontSize: "0.85rem" }}>
                With a template, you define key parameters, data streams, and UI elements once—then apply them across multiple devices instantly.
              </p>
              <button
                type="button"
                className="btn btn-success"
                style={{
                  width: "124px",
                  height: "29px",
                  fontSize: "0.75rem",
                  padding: "5px 10px",
                }}
              >
                Create A Template
              </button>
              
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title fw-semibold" style={{ fontSize: "0.95rem" }}>
                     <i class="bi bi-database"></i>     Datastreams
              </h5>
              <p className="card-text ms-3" style={{ fontSize: "0.85rem" }}>
                Datastreams are the backbone of device communication in Blynk, acting as channels that transmit data between your hardware and the platform.
              </p>
              <a
                className="m-2"
                href="https://docs.blynk.io/en/blynk.console/templates/datastreams"
                target="_blank"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#1e641eff",
                  fontSize: "13px",
                }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Add remaining columns as you have them */}
      </div>
      </div>
    </>
  );
};

export default Started;
