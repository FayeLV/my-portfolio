import React from "react";
import styles from "./Projects.module.css";
import Car from "../../assets/projects/car-rental-full.c58b37da333d73238fdd.webp";
import Coin from "../../assets/projects/coindom-full.c5fef9ca2f47e52897f8.png";
import Video from '../../assets/video/Doctors-Appoinment-Demo.mp4'

const ProjectItem = ({
  imgSrc,
  imgAlt,
  projectTitle,
  projectDesc,
  codeLink,
  demoLink,
}) => (
  <div className={styles.projectItems}>
    <div className={styles.itemsImg}>
      <a
        target="_blank"
        href={demoLink}
        rel="noreferrer"
        aria-label={projectTitle}
      >
        <img className={styles.projectImage} src={imgSrc} alt={imgAlt} />
      </a>
    </div>
    <div className={styles.itemsText}>
      <div className={styles.itemTextBox}>
        <h3>{projectTitle}</h3>
        <p>{projectDesc}</p>
        <div className={styles.linksBox}>
          <div className={styles.links}>
            <a target="_blank" href={codeLink} rel="noreferrer">
              Code <i className="fa-brands fa-github"></i>
            </a>
            <a target="_blank" href={demoLink} rel="noreferrer">
              Live Demo{" "}
              <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <div className={styles.content}>
        <span className={styles.projectTitle}>portfolio</span>
        <h3>Each project is a unique piece of development</h3>
        <div className={styles.projects}>
          <ProjectItem
            imgSrc={Car}
            imgAlt="Car Rental Website"
            projectTitle="Car Rental 🚗"
            projectDesc="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
            codeLink="https://github.com/FayeLV/car-rental"
            demoLink="https://fayelv.github.io/car-rental/"
          />
          <ProjectItem
            imgSrc={Coin}
            imgAlt="Coindom Crypto Search"
            projectTitle="Coindom 🪙"
            projectDesc="Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time."
            codeLink="https://github.com/FayeLV/new-coin-hub?tab=readme-ov-file"
            demoLink="https://fayelv.github.io/new-coin-hub/"
          />

        </div>
      </div>
      <h1 className={styles.newProject}>New projects coming soon.. </h1>
    <video
      src={Video}
      controls
      style={{
        width: "100%",
        height: "auto",
        marginTop: "20px",
        borderRadius: "8px",
      }}
    >
      Your browser does not support the video tag.
    </video>
    <div className={styles.itemsText}>
      <div className={styles.itemTextBox}>
        <h3>Doctor Appointment App 🩺</h3>
        <span>
          A doctor appointment web application that allows users to book
          appointments with doctors easily and efficiently.
        </span>
        <div className={styles.linksBox}>
          <div className={styles.links}>
            <a
              target="_blank"
              href="https://github.com/FayeLV/doctors-appointment-app"
              rel="noreferrer"
            >
              Code <i className="fa-brands fa-github"></i>
            </a>
            {/* <a
              target="_blank"
              href="https://fayelv.github.io/doctor-appointment-app/"
              rel="noreferrer"
            >
              Live Demo{" "}
              <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i>
            </a> */}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Projects;
