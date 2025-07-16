import React from "react";
import styles from "./experience.module.scss";

const Experience = () => {
  return (
    <div className={styles.experience_container}>
      <h1>
        <u>Experience</u>
      </h1>
      <br />
      <div>
        <span className={styles.title}>
          <h3>Senior Software Engineer, Zscaler</h3>
          <p className={styles.duration}>Oct. 2022 - Present</p>
        </span>
        <br />
        <ul className={styles.experience_ul}>
          <li>
            Worked on building and maintaining scalable and user-friendly{" "}
            <b>micro-frontend-based</b> web applications for the Zscaler Posture
            Control Product.
          </li>
          <li>
            Built custom re-usable components as part of a larger component
            library using <b>React, Typescript, and SCSS</b>.
          </li>
          <li>
            Implemented complex frontend logic using state management tools like
            <b>Redux, Mobx, and Custom NPM Packages</b> for Policy and
            Investigation services in{" "}
            <b>Data security posture management (DSPM)</b> for leading Cloud
            Services Providers. Collaborating closely with stakeholders, refined
            functionality and usability iteratively.
          </li>
          <li>
            Wrote scripts in Python and Shell to automate tasks. Configured and
            maintained tools like Nagios Core and ELK for monitoring, logging,
            and alerting.
          </li>
        </ul>
      </div>
      <br />
    </div>
  );
};

export default Experience;
