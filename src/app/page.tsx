import ProfileSection from "@/components/Profile/ProfileSection";
import styles from "./page.module.scss";
import About from "@/components/contents/About/About";
import Skills from "@/components/contents/Skills/Skills";
import Experience from "@/components/contents/Experience/Experience";
import Projects from "@/components/contents/Projects/Projects";

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
        <div className={styles.footer}>
          <p>
            {"/* "}
            Crafted with Next.js and TypeScript, this app seamlessly blends
            efficiency and modernity. Styled with Sass and deployed on Vercel,
            ensuring a user experience that&apos;s as polished as the Inter
            typeface itself.{" */"}
          </p>
        </div>
      </div>
      <div id="home">
        <ProfileSection />
      </div>
    </div>
  );
}
