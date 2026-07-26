import Link from "next/link";
import styles from "./navbar.module.css";

type NavLink = {
  id: string;
  text: string;
  href: string;
};

const navLinks: NavLink[] = [
  { id: "home", text: "Home", href: "/" },
  { id: "projects", text: "Projects", href: "/projects" },
  { id: "experience", text: "Experience", href: "/experience" },
  { id: "contact-me", text: "Contact Me", href: "/contact-me" },
];

export default function Navbar() {
  return (
    <nav>
      <ul className={styles.nav}>
        {navLinks.map((navlink) => (
          <li key={navlink.id}>
            <Link className={styles["nav-link"]} href={navlink.href}>
              {navlink.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
