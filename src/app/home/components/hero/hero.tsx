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
        Software Engineer building data management systems and consumer apps on
        both mobile and web
      </p>
      <p className={styles.location}>
        <span className={styles["location-icon"]}>{location}</span> Melbourne,
        Australia
      </p>
      <ActionButtons />
    </div>
  );
}
