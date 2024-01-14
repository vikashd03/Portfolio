import React from "react";
import styles from "./skills.module.scss";

const Skills = () => {
  const skillsList: { [skillType: string]: string[] } = {
    frontend: ["JavaScript", "TypeScript", "React JS", "Next JS", "HTML/CSS"],
    backend: ["Node JS", "Express JS", "Django", "Flask"],
    database: ["SQL", "PostgreSQL", "MongoDB", "Prisma"],
    tools: [
      "Linux",
      "Docker",
      "Nginx",
      "Git",
      "Postman",
      "VMware Vsphere",
      "ELK Stack",
      "Nagios",
    ],
    automation: ["Selenium", "Celery", "Linux Shell Scripting", "Python"],
  };
  return (
    <div className={styles.skills_container}>
      <h1>
        <u>Skills</u>
      </h1>
      <div className={styles.skills_title_container}>
        {Object.keys(skillsList).map((skillType, index) => (
          <div className={styles.skills_item} key={index}>
            <h2>{skillType[0].toUpperCase() + skillType.slice(1) + " :"}</h2>
            <div className={styles.skills}>
              {skillsList[skillType].map((skill, index) => (
                <div className={styles.skill} key={index}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
