import React from "react";
import styles from "./Hero.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiSass,
} from "react-icons/si";

const Hero = () => {
  return (
    <section className={styles.container} id="hero">
      <div className={styles.content}>
        <div className={styles.heroMain}>
          <h1>
            Full-Stack Developer{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </h1>
          <p>Hi, I'm Faye. A passionate Full-Stack Developer based in Texas.</p>
          <div className={styles.socialLinks}>
            <a
              aria-label="github"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/FayeLV"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className={styles.heroImg}></div>
      </div>
      <div className={styles.techStack}>
        <span>Tech Stack</span>
        <div className={styles.icons}>
          <SiHtml5 title="HTML5" />
          <SiCss3 title="CSS3" />
          <SiJavascript title="JavaScript" />
          <SiTypescript title="TypeScript" />
          <SiReact title="React" />
          <SiNextdotjs title="Next.js" />
          <SiTailwindcss title="Tailwind CSS" />
          <SiSass title="Sass" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
