import React from "react";
import styles from "./Footer.module.css";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <h3>Email</h3>
        <a href="mailto:r-squared@umich.edu" className={styles.link}>
          r-squared@umich.edu
        </a>
      </div>

      <div className={styles.column}>
        <h3>Webpage</h3>
        <a
          href="https://maizepages.umich.edu/organization/r-squared"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Maize Pages
        </a>
      </div>

      <div className={styles.column}>
        <h3>Follow Us</h3>

        <div className={styles.socialIcons}>
          <a
            href="https://www.instagram.com/rsquaredatumich/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/company/r-squared-at-umich/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;