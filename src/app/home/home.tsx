import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import Section from "@/utils/section/section";
import Hero from "./components/hero/hero";
import Projects from "./components/projects/projects";
import TechnicalSkills from "./components/technical_skills/technical_skills";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles["nav-wrapper"]}>
          <Navbar />
        </div>
        <Hero />
      </header>
      <main>
        <Projects />

        <Section
          title="My Technical Skills"
          subtitle="I am constantly trying to improve"
        >
          <TechnicalSkills />
        </Section>
      </main>
      <Footer />
    </>
  );
}
