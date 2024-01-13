"use client";
import React from "react";
import styles from "./scrollbutton.module.scss";

interface Props {
  targetId: string;
  buttonText: string;
}

const ScrollButton: React.FC<Props> = ({ targetId, buttonText }) => {
  const scrollToSection = () => {
    const section = document.getElementById(targetId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button className={styles.scroll_button} onClick={scrollToSection}>
      {buttonText}
    </button>
  );
};

export default ScrollButton;
