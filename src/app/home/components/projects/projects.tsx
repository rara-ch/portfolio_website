import Image from "next/image";
import Section from "@/utils/section/section";
import FlagshipProjectCard from "./components/flagship_project_card";
import styles from "./projects.module.css";
import { flagshipProject, type Project, projects } from "./projects_data";

export default function ProjectsSection() {
  return (
    <Section title="Projects" subtitle="Flagship Project">
      <div>
        <FlagshipProjectCard project={flagshipProject}/>
      </div>
      <div className={styles["projects-grid"]}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}

// TODO: Put this into its own .tsx file
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={`${styles["project-card"]} card`}>
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
    </div>
  );
}
