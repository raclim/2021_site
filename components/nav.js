import styles from "../styles/Nav.module.scss";

export default function Nav({getNavInput}) {
    return (
        <div className={styles.navContainer}>
            <ul className={styles.navbar}>
                < li className={styles.navItem}>
                    <a href="/">[P] Projects</a>
                </li>
                <li className={styles.navItem}>
                    <a href="/">[R] Resume</a>
                </li>
                <li className={styles.navItem}>
                    <a href="https://github.com/raclim">[G] Github</a>
                </li>
                <li className={styles.navItem}>
                    <a href="https://raclims.wordpress.com/">[B] Blog (from my time as a student)</a>
                </li>
            </ul>

            <form className={styles.inputFormat} onSubmit={getNavInput}>
                <label htmlFor="choice">[9:30 PM] Enter your choice:  </label>
                <input id={styles.navInput} name="choice" type="text" />
                {/* <div className={styles.carat}></div> */}
            </form>
        </div>
    )
}