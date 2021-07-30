import styles from "../styles/Nav.module.scss";

export default function Nav() {
    return (
        <div className={styles.navContainer}>
            <ul className={styles.navbar}>
                < li className={styles.navItem}>
                    <a href="/">[W] Works</a>
                </li>
                <li className={styles.navItem}>
                    <a href="/">[I] Illustrations</a>
                </li>
                <li className={styles.navItem}>
                    <a href="/">[R] Resume</a>
                </li>
                <li className={styles.navItem}>
                    <a href="https://github.com/raclim">[G] Github</a>
                </li>
                <li className={styles.navItem}>
                    <a href="https://raclims.wordpress.com/">[S] Student Blog</a>
                </li>
            </ul>

            <form className={styles.inputFormat}>
                <label for="nav">[3:20 PM] Enter Your Choice? </label>
                <input id={styles.navInput} type="text" placeholder="_" />
                <div className={styles.carat}></div>
            </form>
        </div>
    )
}