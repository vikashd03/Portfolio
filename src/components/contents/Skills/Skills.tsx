import React from "react";
import styles from "./skills.module.scss";

const Skills = () => {
  const skillsList: { [skillType: string]: string[] } = {
    frontend: [
      "React JS",
      "TypeScript",
      "Next JS",
      "Micro-Frontend",
      "HTML/CSS",
    ],
    backend: ["Node JS", "Express JS", "Django", "Flask"],
    database: ["SQL", "PostgreSQL", "MongoDB", "Prisma"],
    tools: [
      "Linux",
      "Docker",
      "Gunicorn",
      "Redis",
      "Nginx",
      "Git",
      "Postman",
      "VMware vSphere",
      "ELK Stack",
      "Nagios",
    ],
    libraries: [
      "Webpack Module Federation",
      "NPM",
      "Redux",
      "Mobx",
      "Tailwind",
      "Celery",
      "Selenium",
      "Jest",
    ],
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
