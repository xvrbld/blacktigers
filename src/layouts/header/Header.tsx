import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Logo from "assets/logo.png"

const Header = () => {
  const [displayFootballDropdown, setDisplayFootballDropdown] = useState(false);
  const [displayFlagDropdown, setDisplayFlagDropdown] = useState(false);

  return (
    <div className={styles.header}>
      <Link to="/">
        <img src={Logo} alt="Logo" className={styles.logo} />
      </Link>
      <Link to="/news">News</Link>
      <div className={styles.dropdownContainer}>
        <div
          className={styles.dropdownButton}
          onClick={() => setDisplayFootballDropdown(!displayFootballDropdown)}
        >
          Football
        </div>
        {displayFootballDropdown && (
          <div className={styles.dropdown}>
            <Link to="/football-team">Team</Link>
            <Link to="/football-enrollment">Enrollment</Link>
          </div>
        )}
      </div>
      <div className={styles.dropdownContainer}>
        <div
          className={styles.dropdownButton}
          onClick={() => setDisplayFlagDropdown(!displayFlagDropdown)}
        >
          Flag
        </div>
        {displayFlagDropdown && (
          <div className={styles.dropdown}>
            <Link to="/flag-team">Team</Link>
            <Link to="/flag-enrollment">Enrollment</Link>
          </div>
        )}
      </div>
      <Link to="/background">Background</Link>
      <Link to="/shop">Shop</Link>
    </div>
  );
};

export default Header;