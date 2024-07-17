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
            As a Full-stack Developer with a B.S. in Computer Science, I possess
            a comprehensive set of skills in HTML, CSS, JavaScript, React, Java,
            Python, Spring Boot, SQL, and Git. I excel in designing and
            maintaining responsive websites that offer a seamless user
            experience. My expertise lies in crafting dynamic and engaging
            interfaces through writing clean, optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives on collaborating with cross-functional teams to
            produce outstanding applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
