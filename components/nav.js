import Link from 'next/link';
import styles from "../styles/Nav.module.scss";

export default function Nav({getNavInput}) {
    return (
        <div className={styles.navContainer}>
            <ul className={styles.navbar}>
                < li className={styles.navItem}>
                    <Link href="/projects">
                        <a>[P] Projects</a>
                   </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/resume">
                        <a>[R] Resume</a>
                   </Link>
                </li>
                <li className={styles.navItem}>
                   <Link href="/github">
                        <a>[G] Github</a>
                   </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/blog">
                        <a>[B] Blog (from my time as a student)</a>
                   </Link>
                </li>
            </ul>

            <form className={styles.inputFormat} onSubmit={getNavInput}>
                <label htmlFor="choice">[9:30 PM] Enter your choice:  </label>
                <input id={styles.navInput} name="choice" type="text" />
            </form>
        </div>
    )
}