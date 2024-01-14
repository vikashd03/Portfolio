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
        <h2>Associate Software Engineer, Zscaler</h2>
        <br />
        <ul>
          <li>
            Developed the Automation Results Dashboard to showcase results of
            automation sanity and regression across all products, using Next JS,
            Express JS, Typescript, MongoDB
          </li>
          <li>
            Developed internal Dashboard to maintain QA setups healthy using
            Next JS, Django, shell scripting, and Postgres
          </li>
          <li>Wrote scripts in Python and Shell to automate tasks</li>
          <li>
            Ran sanity and regressions on builds, debugged the failures and
            worked closely with other teams to fix them
          </li>
          <li>
            Configured and maintained tools like Nagios Core and
            ELK(Elasticsearch, Logstash, and Kibana) for monitoring,logging, and
            alerting.
          </li>
        </ul>
      </div>
      <br />
    </div>
  );
};

export default Experience;
