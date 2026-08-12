import Image from "next/image";
import Chip from "@/utils/components/chip";
import Section from "@/utils/section/section";
import styles from "./projects.module.css";
import { type Project, projects } from "./projects_data";

export default function Projects() {
  return (
    <Section title="Projects" subtitle="PLACEHOLDER">
      <div className={styles["projects-grid"]}>
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}

function Card({ project }: { project: Project }) {
  const clientsTitleText = project.clients.length === 1 ? 'Client' : 'Clients';  

  return (
    <div className={styles["project-card"]}>
      <Image
        className={styles.image}
        src={project.image.path}
        alt={project.image.alt}
        width={200}
        height={200}
        loading="lazy"
      />
      <h2 className={styles.title}>{project.title}</h2>
      <p className={styles.description}>{project.description}</p>
      <div className={styles["clients-section"]}>
        <div>
          <span className={styles["clients-title"]}>{clientsTitleText}</span>
        </div>
        <div className={styles.clients}>
        {project.clients.map((client) => (
          <Chip key={client}>
            <span className={styles.client}>{client}</span>
          </Chip>
        ))}
        </div>
      </div>
    </div>
  );
}
