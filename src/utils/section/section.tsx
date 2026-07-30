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
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <div>{children}</div>
      </div>
    </section>
  );
}