import React from "react";
import styles from "./backgroundimage.module.scss";

interface Props {
  children: React.ReactNode;
}

const BackgroundImage = ({ children }: Props) => {
  return <div className={styles.bg_image}>{children}</div>;
};

export default BackgroundImage;
