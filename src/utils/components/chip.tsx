import styles  from './chip.module.css'

export default function Chip({children}: {children: React.ReactNode}) {
    return <div className={styles.chip}>
        { children }
    </div>
}