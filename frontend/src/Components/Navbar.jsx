import { useRef, useState, useEffect } from "react";
import User from "../assets/Users.jpg";
import { NavLink, Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

const Navbar = () => {
  const dropdownRef = useRef(null);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showNewsMenu, setShowNewsMenu] = useState(false); // toggle news
  const [userName, setUserName] = useState("Guest");
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);





  const handleLanguageSelect = (lang) => {
    console.log(`Language selected: ${lang}`);
    setShowLanguageMenu(false);
  };

  const handleLogout = () => {
    // safely clear user data
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUserName("Guest");
    window.location.href = "/login"; // optional redirect
  };

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        if (user && user.name) setUserName(user.name);
      } catch (err) {
        console.warn("Invalid user in localStorage:", userStr);
        setUserName("Guest");
        localStorage.removeItem("user"); // cleanup
      }
    }
  }, []);




  
  const themes = ["Light", "Dark", "Blue", "Green", "Custom"];

const handleThemeSelect = (theme) => {
  console.log(`Theme selected: ${theme}`);
  setShowThemeMenu(false);
  // apply theme logic here, e.g., update context or CSS class
};

  const newsItems = ["Light:AI new", "Fridge:Low Power", "new fetures update"];

  return (
    <div className="navMain d-flex justify-content-between align-items-center px-3">
      {/* Left side */}
      <div className="d-flex align-items-center">
        <p className="mb-0 me-3">{userName}</p>
        <Link to="/settings" className="settings-link">
          <i className="bi bi-gear" style={{ cursor: "pointer" }}></i>
        </Link>
      </div>

      {/* Right side */}
      <div className="d-flex align-items-center">
        {/* News icon */}
        <div style={{ position: "relative" }}>
          <i
            className="bi bi-newspaper me-3"
            style={{ cursor: "pointer" }}
            onClick={() => setShowNewsMenu(!showNewsMenu)}
          ></i>

          {showNewsMenu && (
            <ul
              className="dropdown-menu show"
              style={{
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                marginTop: "5px",
                minWidth: "180px",
                textAlign: "center",
                fontSize: "0.8rem",
              }}
            >
              {newsItems.map((item, index) => (
                <li key={index}>
                  <a className="dropdown-item" href="#news">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Other icons */}
        <div className="dropdown me-3">
          <i
            className="bi bi-question-square"
            id="questionDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ cursor: "pointer" }}
          ></i>
          <ul
            className="dropdown-menu dropdown-menu-center"
            aria-labelledby="questionDropdown"
          >
            <li>
              <a
                className="dropdown-item"
                href="https://docs.blynk.io/en/"
                target="_blank"
              >
                Documentation
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="https://community.blynk.cc/"
                target="_blank"
              >
                Community
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#officialwebsite">
                Official Website
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#contractsupport">
                Contract Support
              </a>
            </li>
          </ul>
        </div>

        <a
          href="https://community.blynk.cc/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ cursor: "pointer" }}
        >
          <i className="bi bi-bug me-3"></i>
        </a>

        {/* User dropdown */}
        <div className="dropdown" ref={dropdownRef}>
          <img
            src={User}
            alt="User avatar"
            className="Users dropdown-toggle"
            id="userDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              width: "37px",
              height: "37px",
              borderRadius: "50%",
              cursor: "pointer",
              objectFit: "cover",
            }}
          />

          <ul
  className="dropdown-menu dropdown-menu-end"
  aria-labelledby="userDropdown"
>
  {!showLanguageMenu ? (
    <>
      <li>
        <button
          className="dropdown-item"
          onClick={() => setShowLanguageMenu(true)}
        >
          Locale
        </button>
      </li>
      <li>
        <a className="dropdown-item" href="#settings">
          Developer Mode
        </a>
      </li>
      <li>
        <NavLink className="dropdown-item" to="/Register">
          Register
        </NavLink>
      </li>
      {!showThemeMenu ? (
        <li>
          <button
            className="dropdown-item"
            onClick={() => setShowThemeMenu(true)}
          >
            Theme
          </button>
        </li>
      ) : (
        <>
          <li>
            <button
              className="dropdown-item"
              onClick={() => setShowThemeMenu(false)}
            >
              ← Back
            </button>
          </li>
          {["Light", "Dark"].map((themeOption, index) => (
            <li key={index}>
              <button
                className="dropdown-item"
                onClick={() => {
                  toggleTheme(themeOption.toLowerCase()); // use toggleTheme here
                  setShowThemeMenu(false);
                }}
              >
                {themeOption}
              </button>
            </li>
          ))}
        </>
      )}

      <li>
        <NavLink className="dropdown-item" to="/login">
          Login
        </NavLink>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li>
        <button className="dropdown-item" onClick={handleLogout}>
          Logout
        </button>
      </li>
    </>
  ) : (
    <>
      <li>
        <button
          className="dropdown-item"
          onClick={() => setShowLanguageMenu(false)}
        >
          ← Back
        </button>
      </li>
      {["English", "Spanish", "French", "German", "Hindi"].map(
        (lang, index) => (
          <li key={index}>
            <button
              className="dropdown-item"
              onClick={() => handleLanguageSelect(lang)}
            >
              {lang}
            </button>
          </li>
        )
      )}
    </>
  )}
</ul>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
