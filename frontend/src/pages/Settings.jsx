// Settings.jsx
import { Outlet, NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Settings = () => {
  const { theme } = useContext(ThemeContext);
  const layoutStyle = {
    display: "flex",
    minHeight: "100vh",
  };

 const sidebarStyle = {
  width: "280px",
  backgroundColor: theme === "dark" ? "#1e1e1e" : "#fff",
  color: theme === "dark" ? "#f5f5f5" : "#333",
  borderRight: theme === "dark" ? "1px solid #444" : "1px solid #ddd",
  padding: "15px",
  boxShadow: theme === "dark" ? "2px 0 8px rgba(0,0,0,0.8)" : "2px 0 8px rgba(0,0,0,0.05)",
};

const contentStyle = {
  flex: 1,
  padding: "20px",
  backgroundColor: theme === "dark" ? "#121212" : "#f9f9f9",
  color: theme === "dark" ? "#f5f5f5" : "#111",
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
    transition: "background-color 0.2s ease",
  };

  const activeStyle = {
    ...linkStyle,
    backgroundColor: "#f0f0f0",
    color: "rgb(36,145,54)",
    fontWeight: "bold",
  };

  return (
    <div style={layoutStyle}>
      {/* Sidebar */}
      <div style={sidebarStyle}>
        <h6 style={{ marginBottom: "15px" }}>Organization Settings</h6>

        {[
          { to: "General", icon: "bi bi-grid-3x2-gap", label: "General" },
          { to: "Usersn", icon: "bi bi-map", label: "Users" },
          { to: "RolesAndPermission", icon: "bi bi-send", label: "Roles and permissions" },
          { to: "Billing", icon: "bi bi-hdd-stack", label: "Billing" },
          { to: "Tags", icon: "bi bi-arrow-left-right", label: "Tags" },
          { to: "Webhookn", icon: "bi bi-house-down", label: "Webhooks" },
          { to: "UserActionLog", icon: "bi bi-arrow-up-circle", label: "User action log" },
        ].map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
            className="sidebar-link"
          >
            <i className={icon}></i> {label}
          </NavLink>
        ))}
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: "20px", backgroundColor: "#f9f9f9" }}>
        <Outlet />
      </div>

      {/* Hover effect */}
      <style>
        {`
          .sidebar-link:hover {
            background-color: #e0f2ff;
          }
        `}
      </style>
    </div>
  );
};

export default Settings;
