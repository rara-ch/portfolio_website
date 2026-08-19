import Image from "next/image";
import Chip from "@/utils/components/chip";
import type { FlagshipProject, ProjectTechnology } from "../projects_data";
import styles from "./flagship_project_card.module.css";

export default function FlagshipProjectCard({
  project,
}: {
  project: FlagshipProject;
}) {
  const frontEndTechnologies = project.isDecoupled
    ? project.technologies.filter((technology) => technology.isFrontEnd)
    : [];
  const backEndTechnologies = project.isDecoupled
    ? project.technologies.filter((technology) => !technology.isFrontEnd)
    : [];

  return (
    <div className={`${styles["flagship-project-card"]} card`}>
      <Image
        className={styles.image}
        src={project.image.path}
        alt={project.image.alt}
        width={300}
        height={300}
      />
      <h2 className={styles.title}>{project.title}</h2>
      <p className={styles.description}>{project.description}</p>
      <section className={styles.technologies}>
        <h3 className={styles.subtitle}>Technologies</h3>
        {project.isDecoupled ? (
          <>
            <div>
              <TechnologiesSection
                title={"Front End"}
                technologies={frontEndTechnologies}
              />
            </div>
            <div>
              <TechnologiesSection
                title={"Back End"}
                technologies={backEndTechnologies}
              />
            </div>
          </>
        ) : (
          <div>
            <TechnologiesSection technologies={project.technologies} title={null}/>
          </div>
        )}
      </section>
    </div>
  );
}

function TechnologiesSection({
  technologies,
  title,
}: {
  technologies: ProjectTechnology[];
  title: string | null;
}) {
  return (
    <>
      {title != null ? <h4 className={styles["technologies-subtitle"]}>{title}</h4> : null}
      <div className={styles.chips}>
        {technologies.map((projectTechnology) => (
          <Chip key={projectTechnology.technology.id}>
            <div className={styles.chip}>
              <div className={styles["chip-icon"]}>
                {projectTechnology.technology.icon}
              </div>
              <span className={styles["chip-text"]}>
                {projectTechnology.technology.name}
              </span>
            </div>
          </Chip>
        ))}
      </div>
    </>
  );
}
