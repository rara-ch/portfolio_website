'use client';

import Image from "next/image";
import ActionButtons from "@/components/action-buttons/action-buttons";
import EntryAnimation from "@/utils/animations/entry-animation";
import { location } from "@/utils/icons";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.grid}>
      <EntryAnimation>
        <Image
          className={styles["profile-pic"]}
          src="/images/profile.jpg"
          width={250}
          height={250}
          alt="Rahul Chitkara"
          loading="lazy"
        />
      </EntryAnimation>
      <EntryAnimation delay={0.2}>
        <h1>Rahul Chitkara</h1>
      </EntryAnimation>
      <EntryAnimation delay={0.4}>
        <p>
          <span className={styles.highlight}>Full Stack Software Engineer</span>{" "}
          Building <span className={styles.highlight}>Web and Mobile Apps</span>{" "}
          at a{" "}
          <span className={styles.highlight}>Small Technology Company</span>
        </p>
      </EntryAnimation>
      <EntryAnimation delay={0.6}>
        <p className={styles.location}>
          <span className={styles["location-icon"]}>{location}</span> Melbourne,
          Australia
        </p>
      </EntryAnimation>
      <EntryAnimation delay={0.8}>
        <ActionButtons />
      </EntryAnimation>
    </div>
  );
}
