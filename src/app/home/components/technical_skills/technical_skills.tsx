import {Icons} from '@/utils/icons';
import styles from './technical_skills.module.css';

export default function TechnicalSkills() {
  return <div><Skills/></div>;
}

function Skills() {
  return <div className={styles.skills}>
    <Skill icon={Icons.dart} name="Dart"/>
    <Skill icon={Icons.golang} name="Go"/>
    <Skill icon={Icons.python} name="Python"/>
    <Skill icon={Icons.js} name="JavaScript"/>
    <Skill icon={Icons.ts} name="TypeScript"/>
    <Skill icon={Icons.coldfusion} name="Coldfusion"/>
    <Skill icon={Icons.mysql} name="SQL"/>
    <Skill icon={Icons.html} name="HTML"/>
    <Skill icon={Icons.css} name="CSS"/>
  </div>;
}

function Skill({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className={styles.skill}>
      <div className={styles.icon}>{icon}</div>
      <span className={styles.name}>{name}</span>
    </div>
  );
}
