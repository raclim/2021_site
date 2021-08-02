import styles from "../styles/Home.module.scss";

const List = ({navResult, onListClick}) => {
    if (navResult === "My Github Page") {
        return(
            <div className={styles.list}>
                <div className={styles.listContent}>
                    <p>Many of my projects live within <a href="https://github.com/raclim">my Github</a>.</p> 
                    <p className={styles.tidbit}>I love dogs, so my profile image is a shiba inu holding shiba inus.</p>
                </div>
            </div>
        )
    } else if (navResult === "works") {
        const categories = [
            "Web",
            "Craft",
            "Hybrid", 
            "All"
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
    } else if (navResult === "resume") {
        return(
            <div className={styles.list}>
                <div className={styles.listContent}>
                    <p><a href="https://github.com/raclim">Download Rachel's Resume</a></p> 
                    <p><a href="https://github.com/raclim">LinkedIn</a></p>
                    <p className={styles.tidbit}>I used to spend summer vacations working at an ice cream store. They specialized in matcha flavored products and teaware!</p>
                </div>
            </div>
        )
    } else if (navResult === "my student blog") {
        return(
            <div className={styles.list}>
                <div className={styles.listContent}>
                    <p><a href="https://raclims.wordpress.com">My student blog</a> documents my experiments and projects, created during my time as a master's candidate at ITP.</p> 
                    <p className={styles.tidbit}>My go-to snack on campus was CHEEZ-IT.</p>
                </div>
            </div>
        )
    } else if (navResult === "my name") {
        return(
            <div className={styles.list}>
                <div className={styles.listContent}>
                    <p>Yes that is my name!</p> 
                    <p className={styles.tidbit}>I love sushi</p>
                </div>
            </div>
        )
    } else if (navResult === "ERROR: unidentified value huehue") {
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