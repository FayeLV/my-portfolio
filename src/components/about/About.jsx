import React from "react";
import styles from "./About.module.css";
import Hero from "../../assets/hero/work1.jpg";

const About = () => {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imgSide}>
          <img src={Hero} alt="Hero image of me" />
        </div>
        <div className={styles.textSide}>
          <h3>About me</h3>
          <h4>A dedicated Front-end Developer</h4>
          <p>
            Motivated Full-Stack Developer with hands-on experience in both frontend and backend development, specializing in 
            React, Javascript, Java, and Spring Boot Python. Skilled in building responsive web applications and backend services. Strong team 
            player with experience in Agile environments, committed to continuous improvement and learning. Certified in ITIL® 
            Foundation and Linux Essentials.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
