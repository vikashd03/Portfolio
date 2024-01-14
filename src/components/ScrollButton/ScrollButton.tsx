"use client";
import React from "react";
import styles from "./scrollbutton.module.scss";

interface Props {
  children?: React.ReactNode;
  targetId: string;
  buttonText?: string;
}

const ScrollButton: React.FC<Props> = ({ targetId, buttonText, children }) => {
  const scrollToSection = () => {
    const section = document.getElementById(targetId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <button className={styles.scroll_button} onClick={scrollToSection}>
      {buttonText && buttonText}
      {children && children}
    </button>
  );
};

export default ScrollButton;
