"use client";

import EntryAnimation from "../animations/entry-animation";
import styles from "./section.module.css";

export default function Section({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <section>
      <div className={styles["content-wrapper"]}>
        <EntryAnimation>
          <h2 className={styles.title}>{title}</h2>
        </EntryAnimation>
        <EntryAnimation delay={0.2}>
          <p className={styles.subtitle}>{subtitle}</p>
        </EntryAnimation>
        <div>{children}</div>
      </div>
    </section>
  );
}
