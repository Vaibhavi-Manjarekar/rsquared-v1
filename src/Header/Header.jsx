import styles from "./Header.module.css";
import { FaChevronDown } from "react-icons/fa";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Welcome to
        <br />
        R-Squared!
      </h1>

      <FaChevronDown className={styles.downArrow} />
    </header>
  );
}

export default Header;