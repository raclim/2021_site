import navList from '../statics/navList';
import styles from "../styles/Home.module.scss";

const List = ({navResult, onListClick, defaultResult}) => {
    if (navResult === navList.GITHUB || (!navResult && defaultResult === navList.GITHUB)) {
        return(
            <div className={styles.list}>
                <div className={styles.listContent}>
                    <p>Many of my projects live within <a href="https://github.com/raclim">my Github</a>.</p> 
                    <p className={styles.tidbit}>I love dogs, so my profile image is a shiba inu holding shiba inus.</p>
                </div>
            </div>
        )
    } else if (navResult === navList.PROJECTS || (!navResult && defaultResult === navList.PROJECTS)) {
        const categories = [
            "web",
            "craft",
            "hybrid", 
            "all"
        ];

        let namesList = categories.map((title) => {
            return <li key={title}><a onClick={onListClick}>{title}</a></li>;
        });
            return(
                <div className={styles.list}>
                    <ul>
                        {namesList}
                    </ul>
                </div>
            )
    } else if (navResult === navList.RESUME || (!navResult && defaultResult === navList.RESUME)) {
        return(
            <div className={styles.list}>
                <div className={styles.listContent}>
                    <p><a href="../statics/resume_rachel_lim.pdf" target="blank">Download Rachel's Resume</a></p> 
                    <p><a href="https://www.linkedin.com/in/rachel-lim-324a8ab6/">LinkedIn</a></p>
                    <p className={styles.tidbit}>I used to spend summer vacations working at an ice cream store. They specialized in matcha flavored products and teaware!</p>
                </div>
            </div>
        )
    } else if (navResult === navList.BLOG || (!navResult && defaultResult === navList.BLOG)) {
        return(
            <div className={styles.list}>
                <div className={styles.listContent}>
                    <p><a href="https://raclims.wordpress.com">My student blog</a> documents my experiments and projects, created during my time as a master's candidate at ITP.</p> 
                    <p className={styles.tidbit}>My go-to snack on campus was CHEEZ-IT.</p>
                </div>
            </div>
        )
    } else if (navResult === navList.NAME || (!navResult && defaultResult === navList.NAME)) {
        return(
            <div className={styles.list}>
                <div className={styles.listContent}>
                    <p>Yes that is my name!</p> 
                    <p className={styles.tidbit}>I love sushi</p>
                </div>
            </div>
        )
    } else if (navResult === navList.ERROR || (!navResult && defaultResult === navList.ERROR)) {
        return(
            <div className={styles.list}>
                ERROR: unidentified value huehue
            </div>
        )
    } else {
        return (
            <div className={styles.list}></div>
        )
    }
}

export default List;