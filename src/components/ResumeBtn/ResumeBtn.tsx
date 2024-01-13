import React from "react";
import styles from "./resumebtn.module.scss";
import Link from "next/link";

const ResumeBtn = () => {
  return (
    <Link
      target="_blank"
      href="https://drive.google.com/file/d/1OKVUyXezSOOEcZA2vyw6h7388EmUGqe5/view?usp=sharing"
      className={styles.resume_btn}
    >
      Resume
    </Link>
  );
};

export default ResumeBtn;
