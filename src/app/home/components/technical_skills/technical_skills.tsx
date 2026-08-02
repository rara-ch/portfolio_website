"use client";

import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { JSX } from "react/jsx-runtime";
import { Icons } from "@/utils/icons";
import styles from "./technical_skills.module.css";
import EntryAnimation from "@/utils/animations/entry-animation";

type SkillData = {
  name: string;
  icon: JSX.Element;
};

type SkillsData = Record<string, SkillData[]>;
const skillsData: SkillsData = {
  Languages: [
    { name: "Dart", icon: Icons.dart },
    { name: "Go", icon: Icons.golang },
    { name: "Python", icon: Icons.python },
    { name: "JavaScript", icon: Icons.js },
    { name: "TypeScript", icon: Icons.ts },
    { name: "Coldfusion", icon: Icons.coldfusion },
    { name: "SQL", icon: Icons.mysql },
    { name: "HTML", icon: Icons.html },
    { name: "CSS", icon: Icons.css },
  ],
  "Frameworks & Libraries": [
    { name: "Flutter", icon: Icons.flutter },
    { name: "React", icon: Icons.react },
    { name: "Next.js", icon: Icons.next },
    { name: "Taffy", icon: Icons.coldfusion },
    { name: "THREE.js", icon: Icons.three },
    { name: "Bootstrap", icon: Icons.bootstrap },
  ],
  "Developer Tools": [
    { name: "Git", icon: Icons.git },
    { name: "GitHub", icon: Icons.github },
    { name: "VS Code", icon: Icons.vsCode },
    { name: "Postman", icon: Icons.postman },
    { name: "Android SDK", icon: Icons.android },
  ],
  // "Data Analytics": [
  //   { name: "Pandas", icon: Icons.coldfusion },
  //   { name: "Matplotlib", icon: Icons.coldfusion },
  //   { name: "Seaborn", icon: Icons.coldfusion },
  //   { name: "NumPy", icon: Icons.coldfusion },
  //   { name: "scikit-learn", icon: Icons.coldfusion },
  //   { name: "Tableau", icon: Icons.coldfusion },
  // ],
  Databases: [
    { name: "MySQL", icon: Icons.mysql },
    { name: "Postgres", icon: Icons.postgres },
    { name: "Microsoft SQL Server", icon: Icons.msSQL },
  ],
};

export default function TechnicalSkills() {
  const [selectedCategory, setSelectedCategory] = useState("Languages");

  const skills = skillsData[selectedCategory];

  return (
    <>
      <EntryAnimation delay={0.4}>
        <div className={styles.categories}>
          {Object.keys(skillsData).map((category) => (
            <CategoryButton
              key={category}
              category={category}
              isSelected={category === selectedCategory}
              setCategory={setSelectedCategory}
            />
          ))}
        </div>
      </EntryAnimation>
      <EntryAnimation delay={0.6}>
        <div className={styles.skills}>
          {skills.map((skill) => (
            <Skill key={skill.name} {...skill} />
          ))}
        </div>
      </EntryAnimation>
    </>
  );
}

function CategoryButton(CategoryButtonProps: {
  category: string;
  isSelected: boolean;
  setCategory: Dispatch<SetStateAction<string>>;
}) {
  const category = CategoryButtonProps.category;
  const className = CategoryButtonProps.isSelected
    ? `${styles.category} ${styles.selected}`
    : styles.category;
  return (
    <button
      className={className}
      key={CategoryButtonProps.category}
      type="button"
      onClick={() => CategoryButtonProps.setCategory(category)}
    >
      {category}
    </button>
  );
}

function Skill(skill: SkillData) {
  return (
    <div className={styles.skill}>
      <div className={styles.icon}>{skill.icon}</div>
      <span className={styles.name}>{skill.name}</span>
    </div>
  );
}
