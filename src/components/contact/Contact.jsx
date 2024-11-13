import React from "react";
import styles from "./Contact.module.css"; // Import your CSS Modules file for styling

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <p>contact</p>
            <h3>Feel free to reach out to me!👇</h3>
          </div>
          <div className={styles.Icons}>
            <div className={styles.iconBox}>
              <span>
                <i className="fa-solid fa-map-location-dot"></i>
              </span>
              <div className={styles.contactInfo}>
                <h3>Location</h3>
                <p>San antonio, Texas</p>
              </div>
            </div>
            <div className={styles.contactIconBox}>
              <span>
                <i className="fa-solid fa-envelope-open-text"></i>
              </span>
              <div className={styles.contactInfo}>
                <h3>Mail</h3>
                <a href="mailto:stefan.topallovic@gmail.com">
                  faye.l.tech@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
