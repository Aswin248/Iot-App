import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import '../App.css'
import blynk from "../assets/blynk icon.png";

const SideBar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <aside className="sidebar">
      <div className="d-flex align-items-center">
      <NavLink to="/" className="logo-link">
          <img className="logo" src={blynk} alt="Blynk Logo" />
      </NavLink>
      <h5 className="ms-3 fw-semibold">Blynk</h5>
      </div>
      <nav>
        
        <NavLink to="/started" className={({ isActive }) => isActive ? "active" : ""}>
    <i className="bi bi-star"></i>  Get started
        </NavLink>
        <NavLink to="/dashboards" className={({ isActive }) => isActive ? "active" : ""}>
      <i className="bi bi-dash-square-dotted">   </i> DashBoards
        </NavLink>
        <NavLink to="/DeveloperZone" className={({ isActive }) => isActive ? "active" : ""}>
       <i className="bi bi-tools"></i>    Develpoer Zone     <i className="bi bi-arrow-right-short"></i>
        </NavLink>
        <hr className="my-2" />
        <NavLink to="/Devices" className={({ isActive }) => isActive ? "active" : ""}>
         <i className="bi bi-box"></i>     Devices
        </NavLink>
        <NavLink to="/Automations" className={({ isActive }) => isActive ? "active" : ""}>
           <i className="bi bi-brightness-high"></i>Automations
        </NavLink>
        <NavLink to="/Users" className={({ isActive }) => isActive ? "active" : ""}>
      <i className="bi bi-people"></i>   Users
        </NavLink>
        <NavLink to="/Organizations" className={({ isActive }) => isActive ? "active" : ""}>
    <i className="bi bi-building-lock"></i>  Organizations
        </NavLink>
        <NavLink to="/Locations" className={({ isActive }) => isActive ? "active" : ""}>
    <i className="bi bi-geo-alt"></i>  Locations
        </NavLink>
        <hr className="my-2" />
        <NavLink to="/FleetManagement" className={({ isActive }) => isActive ? "active" : ""}>
      <i className="bi bi-truck"></i>  Fleet Management   <i class="bi bi-arrow-right"></i>
        </NavLink>
        <NavLink to="/InAppMessaging" className={({ isActive }) => isActive ? "active" : ""}>
      <i className="bi bi-phone-flip"></i>    In-App Messaging
        </NavLink>
      </nav>
    </aside>
  );
};

export default SideBar;
