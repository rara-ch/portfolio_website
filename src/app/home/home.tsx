import Navbar from "@/components/navbar/navbar";
import Hero from "./components/hero/hero";
import styles from "./home.module.css";

export default function Home() {
  return (
    <header className={styles.header}>
      <div className={styles["nav-wrapper"]}>
        <Navbar />
      </div>
      <Hero />
    </header>
  );
}
