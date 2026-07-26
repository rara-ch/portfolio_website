import Link from "next/link";
import ActionButtons from "../action-buttons/action-buttons";
import { navLinks } from "../navbar/navbar";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <hr />
      <footer className={styles.footer}>
        <FooterGrid />
        <hr />
        <CopyRight />
      </footer>
    </>
  );
}

function FooterGrid() {
  return (
    <div className={styles.grid}>
      <FooterGridItem title="Rahul Chitkara">
        Software Engineer Based in Melbourne, Australia. Building data
        management systems and consumer applications. Learning embedded systems.
      </FooterGridItem>
      <FooterGridItem title="Quick Links">
        <QuickLinks />
      </FooterGridItem>
      <FooterGridItem title="Connect">
        <ActionButtons />
      </FooterGridItem>
      <FooterGridItem title="Active Projects">
        <ActiveProjects />
      </FooterGridItem>
    </div>
  );
}

function FooterGridItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles["grid-item"]}>
      <h3 className={styles["grid-item-title"]}>{title}</h3>
      <div className={styles["grid-item-content"]}>{children}</div>
    </div>
  );
}

function QuickLinks() {
  return (
    <div>
      <ul className={styles["quick-links"]}>
        {navLinks.map((nav) => (
          <li key={nav.id}>
            <Link className={styles["quick-link"]} href={nav.href}>
              {nav.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

type ActiveProjectData = {
  id: string;
  href: string;
  text: string;
};

// TODO: FINISH THIS PART
const activeProjectsData: ActiveProjectData[] = [
  {
    id: "",
    href: "",
    text: "eNTITy1 Website",
  },
];

function ActiveProjects() {
  return <div></div>;
}

function CopyRight() {
  const year = new Date().getFullYear();

  return (
    <div className={styles.copyright}>
      <span>&#169; {year} Rahul Chitkara. All Rights Reserved</span>
      <span>Built by Rahul Chitkara with Next.js</span>
    </div>
  );
}
