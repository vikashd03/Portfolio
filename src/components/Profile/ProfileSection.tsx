import React from "react";
import styles from "./profilesection.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const ProfileSection = () => {
  return (
    <div className={styles.profile_container}>
      <Image
        src="/vikash.jpg"
        width={200}
        height={200}
        alt="vikash"
        className={styles.profile_img}
      />
      <br />
      <h2>Vikash Dhanabal</h2>
      <h3>Associate Software Engineer at Zscaler</h3>
      <br />
      <div className={styles.socialmedia_links}>
        <Link
          href="https://www.linkedin.com/in/vikash-dhanabal/"
          target="_blank"
        >
          <FaLinkedin size={30} className={styles.socialmedia_link} />
        </Link>
        <Link href="https://github.com/vikashd03" target="_blank">
          <FaGithub size={30} className={styles.socialmedia_link} />
        </Link>
        <Link href="https://instagram.com/vikashdhanabal" target="_blank">
          <FaInstagram size={30} className={styles.socialmedia_link} />
        </Link>
        <Link href="mailto:vikashdhanabal003@gmial.com" target="_blank">
          <FiMail size={32} className={styles.socialmedia_link} />
        </Link>
        <Link href="tel:+916382182587" target="_blank">
          <FaPhoneAlt size={22} className={styles.socialmedia_link} />
        </Link>
      </div>
    </div>
  );
};

export default ProfileSection;
