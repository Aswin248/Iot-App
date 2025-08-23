// DeveloperZoneLayout.jsx
import { Outlet, NavLink } from "react-router-dom";
import { ThemeContext } from "../Contexts/ThemeContext";
import { useContext } from "react";

const DeveloperZoneLayout = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const layoutStyle = {
    display: "flex",
    minHeight: "100vh", // full viewport height
  };

  const sidebarStyle = {
    width: "220px",
    backgroundColor: "#fff",
    borderRight: "1px solid #ddd",
    padding: "15px",
    boxShadow: "2px 0 8px rgba(0,0,0,0.05)",
  };

  const linkStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 12px",
    textDecoration: "none",
    color: "#333",
    fontSize: "14px",
    fontWeight: "500",
    borderRadius: "4px",
    marginBottom: "5px",
    transition: "all 0.2s ease", // smooth hover transition
  };

  const activeStyle = {
    ...linkStyle,
    backgroundColor: "#f0f0f0",
    color: "rgb(36,145,54)",
    fontWeight: "bold",
  };

  const hoverStyle = {
    backgroundColor: "#e0f2ff", // light blue background on hover
    color: "#007bff",
  };

  return (
    <div className="developerZone">
    <div style={layoutStyle}>
      {/* Developer Zone Sidebar */}
      <div style={sidebarStyle}>
        <h6 style={{ marginBottom: "15px" }}>Developer Zone</h6>

        {[
          { to: "MyTemplate", icon: "bi bi-grid-3x2-gap", label: "My Templates" },
          { to: "BluePrints", icon: "bi bi-map", label: "Blueprints" },
          { to: "BlynkAir", icon: "bi bi-send", label: "Blynk.Air (OTA)" },
          { to: "StaticTokens", icon: "bi bi-hdd-stack", label: "Static Tokens" },
          { to: "RuleEngine", icon: "bi bi-arrow-left-right", label: "Rule Engine" },
          { to: "QAuth", icon: "bi bi-key", label: "OAuth 2.0" },
          { to: "Webhooks", icon: "bi bi-house-down", label: "Webhooks" },
          { to: "Integrations", icon: "bi bi-arrow-up-circle", label: "Integrations" },
        ].map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            style={({ isActive }) => ({
              ...linkStyle,
              ...(isActive ? activeStyle : {}),
            })}
            className="sidebar-link"
          >
            <i className={icon}></i> {label}
          </NavLink>
        ))}
      </div>

      {/* Developer Zone Content */}
      <div style={{ flex: 1, padding: "20px", backgroundColor: "#f9f9f9" }}>
        <Outlet />
      </div>

      {/* Hover effect using inline <style> */}
      <style>
        {`
          .sidebar-link:hover {
            background-color: #e0f2ff;
            color: #007bff;
          }
        `}
      </style>
    </div>
    </div>
  );
};

export default DeveloperZoneLayout;
