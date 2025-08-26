import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import { ThemeContext } from "../Contexts/ThemeContext";

const chartData = [
  { name: "Jan", uv: 400, pv: 240 },
  { name: "Feb", uv: 300, pv: 456 },
  { name: "Mar", uv: 200, pv: 139 },
  { name: "Apr", uv: 278, pv: 390 },
  { name: "May", uv: 189, pv: 480 },
];

const Dashboards = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [widgets, setWidgets] = useState([]);
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Fetch widgets from backend using JWT token
  useEffect(() => {
  const fetchDashboard = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const res = await axios.get("http://localhost:5000/api/dashboard/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setWidgets(res.data.widgets || []);
    } catch (err) {
      console.error("Error fetching dashboard:", err);
    }
  };
  fetchDashboard();
}, []);


  const togglePanel = () => setIsCollapsed(!isCollapsed);

  const renderWidget = (widget) => {
    switch (widget.type) {
      case "Line Chart":
        return (
          <div style={{ width: "100%", height: 250 }}>
            <ResponsiveContainer>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="uv" stroke="#28a745" strokeWidth={2} />
                <Line type="monotone" dataKey="pv" stroke="#007bff" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        );
      case "Bar Chart":
        return (
          <div style={{ width: "100%", height: 250 }}>
            <ResponsiveContainer>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" fill="#28a745" />
                <Bar dataKey="pv" fill="#007bff" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        );
      case "Switch":
        return (
          <div>
            <label className="form-check-label mb-2 d-block">Toggle Switch</label>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" />
            </div>
          </div>
        );
      case "Slider":
        return (
          <div>
            <label className="form-label mb-2">Slider</label>
            <input type="range" className="form-range" min={0} max={100} />
          </div>
        );
      default:
        return <div>Unknown Widget</div>;
    }
  };

  return (
    <div className="dashboard">
      <div style={{ display: "flex", flexDirection: "row", height: "520px" }}>
        {/* Sidebar */}
        <div
          style={{
            width: isCollapsed ? "60px" : "250px",
            backgroundColor: "white",
            transition: "width 0.3s ease",
            boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            {!isCollapsed && (
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <h6 style={{ margin: 0, fontSize: "14px" }}>Dashboards</h6>
                <button
                  className="beta"
                  style={{ fontSize: "10px", padding: "2px 6px", fontWeight: "bold" }}
                >
                  Beta
                </button>
              </div>
            )}
            <i
              className="bi bi-list"
              style={{ fontSize: "20px", cursor: "pointer" }}
              onClick={togglePanel}
            ></i>
          </div>

          {!isCollapsed && (
            <>
              <div
                style={{
                  padding: "8px",
                  borderRadius: "6px",
                  marginBottom: "6px",
                  backgroundColor: "#f0f0f0",
                  fontWeight: "bold",
                  fontSize: "13px",
                  color: "rgb(36, 145, 54)",
                }}
              >
                New Dashboard
              </div>

              <div style={{ marginTop: "auto", fontSize: "12px", fontWeight: "bold" }}>
                <h6 style={{ fontSize: "13px", marginBottom: "4px" }}>
                  Add more Dashboards!
                </h6>
                <p style={{ fontSize: "12px", margin: 0 }}>
                  Сreate up to 5 dashboards and share them with users in sub-organizations.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: "15px", fontSize: "14px", fontWeight: "bold" }}>
          <h5 style={{ fontSize: "23px", fontWeight: "bold" }}>New Dashboard</h5>
          <Link to="/Editing" className="btn btn-primary mb-3">
            Edit Dashboard
          </Link>

          {widgets.length === 0 ? (
            <p>No widgets applied yet. Go edit your dashboard.</p>
          ) : (
            widgets.map((w, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: "15px",
                  backgroundColor: "white",
                  padding: "15px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                }}
              >
                {renderWidget(w)}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboards;
