import React from "react";
import styles from "./about.module.scss";

const About = () => {
  return (
    <div className={styles.about_container}>
      <h1>
        <u>About</u>
      </h1>
      <p className={styles.about_item}>
        Hello! I&apos;m a passionate Associate Software Engineer at Zscaler,
        dedicated to pushing the boundaries of innovation in full-stack
        development. My expertise spans languages like{" "}
        <b>Python, JavaScript, and TypeScript,</b> allowing me to create robust
        and efficient solutions that bring ideas to life.
      </p>
      <p className={styles.about_item}>
        My journey involves hands-on experience with{" "}
        <b>Next JS, React JS, Express JS and Django</b> by contributing to Full
        Stack projects.sca
      </p>
      <p className={styles.about_item}>
        Beyond the lines of code, I am deeply immersed in exploring the
        intersections of technology and user experience. My approach to software
        engineering extends beyond functionality; it&apos;s about crafting
        solutions that seamlessly integrate into the user&apos;s journey.
      </p>
      <p className={styles.about_item} style={{ color: "black" }}>
        {"< "}Join me on this exciting journey of technology and innovation.
        Let&apos;s create experiences that leave a lasting impact!{" >"}
      </p>
    </div>
  );
};

export default About;
