import styles from "../styles/Home.module.scss";

const Content = ({navResult, listResult}) => {
    if (navResult === "works") {
        const allProjects = [
            "Love",
            "Two",
            "Three", 
            "Four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
            "ten",
            "eleven",
            "twelve"
        ];

        const someProjects = [
            "Love",
            "Two",
            "Three", 
            "Four",
        ];

        const otherProjects = [
            "nine",
            "ten",
            "eleven",
            "twelve"
        ];

        const allProjectsHolder = allProjects.map(project => {
            return <div className={styles.projectItem}><p>{project}</p></div>
        });

        const someProjectsHolder = someProjects.map(project => {
            return <div className={styles.projectItem}><p>{project}</p></div>
        });

        const otherProjectsHolder = otherProjects.map(project => {
            return <div className={styles.projectItem}><p>{project}</p></div>
        });

        if (listResult === "Web") {
            return(
                <div className={styles.content}>
                    <div className={styles.projectContainer}>
                        {someProjectsHolder}
                    </div>
                </div>
            )
        } else if (listResult === "Craft") {
            return(
                <div className={styles.content}>
                    <div className={styles.projectContainer}>
                        {otherProjectsHolder}
                    </div>
                </div>
            )
        } else {
            return(
                <div className={styles.content}>
                    <div className={styles.projectContainer}>
                        {allProjectsHolder}
                    </div>
                </div>
            )
        }
    } else if (navResult === "resume") {
        return(
            <div className={styles.content}>
                <div className={styles.resume}>
                    I have jobs yes yes yes
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default Content;