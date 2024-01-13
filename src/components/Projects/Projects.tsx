import React from "react";
import styles from "./projects.module.scss";
import Link from "next/link";

const Projects = () => {
  return (
    <div className={styles.projects_container}>
      <h1>Projects</h1>
      <br />
      <div className={styles.project_container}>
        <div className={styles.project_title_container}>
          <h2>E-Commerce Clone</h2>
          <p>Apr. 2022 – Present</p>
        </div>
        <div className={styles.techstack_git_container}>
          <span>
            Tech Stack : NextJS, ExpressJS, TypeScript, MongoDB, Prisma, HTML,
            CSS, Docker
          </span>
          <Link
            target="_blank"
            href="https://github.com/vikashd03/nextjs-ecommerce"
          >
            GitHub
          </Link>
        </div>
        <br />
        <div>
          <ul>
            <li>
              Developed a full-stack web application using NodeJS serving a REST
              API with HTML, CSS, and EJS as the frontend
            </li>
            <li>
              Used GIT for version control system, and pushed it to Github
            </li>
            <li>
              Containerized the application using docker and hosted it on AWS
              EC2 Instance
            </li>
            <li>
              Outcome: Understood how a Full Stack Web App works and
              containerized with Docker
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div className={styles.project_container}>
        <div className={styles.project_title_container}>
          <h2>Taskify</h2>
          <p>Apr. 2021 – May, 2021</p>
        </div>
        <div className={styles.techstack_git_container}>
          <span>
            Tech Stack : ReactJS, ExpressJS, Typescript, MongoDB, HTML, CSS
          </span>
          <Link target="_blank" href="https://github.com/vikashd03/Taskify">
            GitHub
          </Link>
        </div>
        <br />
        <div>
          <ul>
            <li>
              App to create, organize, and manage your daily tasks seamlessly
              with a user-friendly interface designed using ReactJS ensuring a
              smooth and responsive experience with drag and drop features.
            </li>
            <li>
              Utilized TypeScript to bring type safety thereby reducing runtime
              errors and enhancing the maintainability of the code
            </li>
          </ul>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Projects;
