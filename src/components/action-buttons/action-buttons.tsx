import { email, github, linkedIn } from "@/nodes/icons";
import styles from "./action-buttons.module.css";
import Link from "next/link";

type ActionButton = {
  id: string;
  href: string;
  icon: React.ReactNode;
};

const actionButtons: ActionButton[] = [
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/rahulchitkara",
    icon: linkedIn,
  },
  { id: "github", href: "https://github.com/rara-ch", icon: github },
  { id: "email", href: "mailto:rahulchitkara2001@gmail.com", icon: email },
];

export default function ActionButtons() {
  return (
    <div className={styles.grid}>
      {actionButtons.map((button) => (
        <Link
          key={button.id}
          className={styles["action-button"]}
          href={button.href}
          target="_blank"
        >
          {button.icon}
        </Link>
      ))}
    </div>
  );
}
