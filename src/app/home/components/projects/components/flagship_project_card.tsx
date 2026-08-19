import Image from "next/image";
import Chip from "@/utils/components/chip";
import { person } from "@/utils/icons";
import type { FlagshipProject, ProjectTechnology } from "../projects_data";
import styles from "./flagship_project_card.module.css";

// TODO: DRY the Team and Technologies Section

export default function FlagshipProjectCard({
  project,
}: {
  project: FlagshipProject;
}) {
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
      <TechnologiesSection project={project} />
      <TeamSection project={project} />
    </div>
  );
}

function TechnologiesSection({ project }: { project: FlagshipProject }) {
  const frontEndTechnologies = project.isDecoupled
    ? project.technologies.filter((technology) => technology.isFrontEnd)
    : [];
  const backEndTechnologies = project.isDecoupled
    ? project.technologies.filter((technology) => !technology.isFrontEnd)
    : [];
  return (
    <section className={styles.technologies}>
      <h3 className={styles.subtitle}>Technologies</h3>
      {project.isDecoupled ? (
        <>
          <div>
            <TechnologiesSubSection
              title={"Front End"}
              technologies={frontEndTechnologies}
            />
          </div>
          <div>
            <TechnologiesSubSection
              title={"Back End"}
              technologies={backEndTechnologies}
            />
          </div>
        </>
      ) : (
        <div>
          <TechnologiesSubSection
            technologies={project.technologies}
            title={null}
          />
        </div>
      )}
    </section>
  );
}

function TechnologiesSubSection({
  technologies,
  title,
}: {
  technologies: ProjectTechnology[];
  title: string | null;
}) {
  return (
    <>
      {title != null ? (
        <h4 className={styles["section-subtitle"]}>{title}</h4>
      ) : null}
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

function TeamSection({ project }: { project: FlagshipProject }) {
  return (
    <section className={styles.team}>
      <h3 className={styles.subtitle}>Team</h3>
      <div>
        <h4 className={styles["section-subtitle"]}>Front End</h4>
        <div className={styles.chips}>
          <Chip>
            <div className={styles.chip}>
              <div
                className={`${styles["chip-icon"]} ${styles["person-icon"]}`}
              >
                {person}
              </div>
              <span className={styles["chip-text"]}>
                {project.numTeamFrontEnd}
              </span>
            </div>
          </Chip>
        </div>
      </div>
      <div>
        <h4 className={styles["section-subtitle"]}>Back End</h4>
        <div className={styles.chips}>
          <Chip>
            <div className={styles.chip}>
              <div
                className={`${styles["chip-icon"]} ${styles["person-icon"]}`}
              >
                {person}
              </div>
              <span className={styles["chip-text"]}>
                {project.numTeamBackEnd}
              </span>
            </div>
          </Chip>
        </div>
      </div>
    </section>
  );
}
