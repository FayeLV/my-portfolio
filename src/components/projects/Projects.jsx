import React from "react";
import styles from "./Projects.module.css";
import Car from "../../assets/projects/car-rental-full.c58b37da333d73238fdd.webp";
import Coin from "../../assets/projects/coindom-full.c5fef9ca2f47e52897f8.png";

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
      </div>
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
);

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <div className={styles.content}>
        <span className={styles.projectTitle}>portfolio</span>
        <h3>Each project is a unique piece of development 🧩</h3>
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
            projectTitle="coindom 🪙"
            projectDesc="Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time."
            codeLink="https://github.com/stefvndev/coindom-crypto-search"
            demoLink="https://coindom-crypto-search.vercel.app/"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
