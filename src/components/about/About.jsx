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
            Full-stack Developer with a B.S. in Computer Science, specializing
            in frontend development. Experienced in creating responsive and
            user-friendly web applications using React, HTML, CSS, and
            JavaScript. With a background in graphic design, I excel at
            designing intuitive and visually appealing user interfaces. Also
            proficient in backend development with Java and Spring Boot,
            allowing me to build complete and scalable applications. Certified
            in ITIL® Foundation and Linux Essentials, skilled in improving
            system performance and setting up CI/CD pipelines. A strong team
            player who thrives in Agile environments, continuously learning and
            applying new technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
