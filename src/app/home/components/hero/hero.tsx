import Image from "next/image";
import ActionButtons from "@/components/action-buttons/action-buttons";
import { location } from "@/utils/icons";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.grid}>
      <Image
        className={styles["profile-pic"]}
        src="/images/profile.jpg"
        width={250}
        height={250}
        alt="Rahul Chitkara"
        loading="lazy"
      />
      <h1>Rahul Chitkara</h1>
      <p>
        <span className={styles.highlight}>Full Stack Software Engineer</span> Building <span className={styles.highlight}>Web and Mobile Apps</span> at a <span className={styles.highlight}>Small Technology Company</span>
      </p>
      <p className={styles.location}>
        <span className={styles["location-icon"]}>{location}</span> Melbourne,
        Australia
      </p>
      <ActionButtons />
    </div>
  );
}
