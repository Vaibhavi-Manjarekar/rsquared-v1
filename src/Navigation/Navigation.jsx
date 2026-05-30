import styles from "./Navigation.module.css";
import logo from "../assets/r-squared logo.jpg";
import { Link } from "react-router-dom";

function Navigation({ isDark }) {
  return (
    <nav
      className={`${styles.navbar} ${
        isDark ? styles.navDark : styles.navLight
      }`}
    >
      <img src={logo} alt="Logo" className={styles.logo} />

      <ul className={styles.navLinks}>
        <li>
          <Link to="/projects">projects.</Link>
        </li>

        <li>
          <Link to="/about">about.</Link>
        </li>

        <li>
          <a
            href="https://maizepages.umich.edu/organization/r-squared"
            target="_blank"
            rel="noopener noreferrer"
          >
            contact.
          </a>
        </li>

        <li>
          <Link to="/events">events.</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;