import React from "react";
import styles from "./navbar.module.scss";
import ResumeBtn from "../ResumeBtn/ResumeBtn";
import ScrollButton from "../ScrollButton/ScrollButton";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.right_nav}>
        <ScrollButton targetId="about" buttonText="About" />
        <ScrollButton targetId="skills" buttonText="Skills" />
        <ScrollButton targetId="experience" buttonText="Experience" />
        <ScrollButton targetId="projects" buttonText="Projects" />
        <ResumeBtn />
      </div>
    </div>
  );
};

export default NavBar;
