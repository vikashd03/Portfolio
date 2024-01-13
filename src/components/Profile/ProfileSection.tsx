import React from "react";
import styles from "./profilesection.module.scss";
import Image from "next/image";
import Link from "next/link";

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
      <h1>Vikash Dhanabal</h1>
      <h3>Associate Software Engineer at Zscaler</h3>
      <br />
      <div className={styles.socialmedia_links}>
        <Link href="https://www.linkedin.com/in/vikash-dhanabal/">
          LinkedIn
        </Link>
        <Link href="https://github.com/vikashd03">GitHub</Link>
        <Link href="https://instagram.com/vikashdhanabal">Instagram</Link>
      </div>
    </div>
  );
};

export default ProfileSection;
