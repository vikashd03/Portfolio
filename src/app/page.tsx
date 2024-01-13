import ProfileSection from "@/components/Profile/ProfileSection";
import styles from "./page.module.scss";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <div className={styles.main_container}>
      <div className={styles.content}>
        <div id="about" className={styles.content_item}>
          <About />
        </div>
        <div id="skills" className={styles.content_item}>
          <Skills />
        </div>
        <div id="experience" className={styles.content_item}>
          <Experience />
        </div>
        <div id="projects" className={styles.content_item}>
          <Projects />
        </div>
      </div>
      <ProfileSection />
    </div>
  );
}
