import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.whiteBox}>
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
            https://maizepages.umich.edu/organization/r-squared
          </a>
        </div>
        <div className={styles.column}>
          <h3>Social</h3>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer