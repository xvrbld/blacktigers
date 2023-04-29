import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import Logo from "assets/logo.png";

function Header() {
  const [displayFootballDropdown, setDisplayFootballDropdown] = useState(false);
  const [displayFlagDropdown, setDisplayFlagDropdown] = useState(false);
  const footballDropdownRef = useRef<HTMLDivElement>(null);
  const flagDropdownRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      footballDropdownRef.current &&
      !footballDropdownRef.current.contains(event.target as Node)
    ) {
      setDisplayFootballDropdown(false);
    }

    if (
      flagDropdownRef.current &&
      !flagDropdownRef.current.contains(event.target as Node)
    ) {
      setDisplayFlagDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className={styles.header}>
      <NavLink to="/">
        <img src={Logo} alt="Logo" className={styles.logo} />
      </NavLink>
      <NavLink
        to="/news"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "underline" : "",
          };
        }}
      >
        News
      </NavLink>
      <div className={styles.dropdownContainer}>
        <div
          className={styles.dropdownButton}
          onClick={() => setDisplayFootballDropdown(!displayFootballDropdown)}
          onMouseEnter={() => setDisplayFootballDropdown(true)}
          onMouseLeave={() => setDisplayFootballDropdown(true)}
        >
          Football
        </div>
        {displayFootballDropdown && (
          <div
            ref={footballDropdownRef}
            className={styles.dropdown}
            onMouseLeave={() => setDisplayFootballDropdown(false)}
          >
            <NavLink
              to="/football-team"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "",
                };
              }}
            >
              Équipe
            </NavLink>
            <NavLink
              to="/football-enrollment"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "",
                };
              }}
            >
              Inscription
            </NavLink>
          </div>
        )}
      </div>
      <div className={styles.dropdownContainer}>
        <div
          className={styles.dropdownButton}
          onClick={() => setDisplayFlagDropdown(!displayFlagDropdown)}
          onMouseEnter={() => setDisplayFlagDropdown(true)}
          onMouseLeave={() => setDisplayFlagDropdown(true)}
        >
          Flag
        </div>
        {displayFlagDropdown && (
          <div
            ref={flagDropdownRef}
            className={styles.dropdown}
            onMouseLeave={() => setDisplayFlagDropdown(false)}
          >
            <NavLink
              to="/flag-team"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "",
                };
              }}
            >
              Équipe
            </NavLink>
            <NavLink
              to="/flag-enrollment"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "",
                };
              }}
            >
              Inscription
            </NavLink>
          </div>
        )}
      </div>
      <NavLink
        to="/background"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "underline" : "",
          };
        }}
      >
        Historique
      </NavLink>
      <NavLink
        to="/shop"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "underline" : "",
          };
        }}
      >
        Boutique
      </NavLink>
    </div>
  );
}

export default Header;
