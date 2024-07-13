import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3>© 2023. All rights reserved.</h3>
          <div className={styles.socialLinks}>
            <div className={styles.socialIcons}>
              <a
                aria-label="LinkedIn"
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/faye-lyu-79a822147/"
              >
                <FaLinkedin className={styles.icon} />
              </a>
              <a
                aria-label="GitHub"
                rel="noreferrer"
                target="_blank"
                href="https://github.com/FayeLV"
              >
                <FaGithub className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
