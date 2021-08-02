import Image from 'next/image';
import navTitles from "../statics/navTitles";
import navList from '../statics/navList';

import styles from "../styles/Home.module.scss";

const Content = ({navResult, listResult, defaultNavResult}) => {
    if (navResult === navList.PROJECTS || (!navResult && defaultNavResult === navList.PROJECTS)) {
        const allProjectsHolder = navTitles.allProjects.map(project => {
            return <div key={project.slug} className={styles.projectItem}><a href={project.slug}>{project.title}</a><Image src={'https:' + project.thumbnail} width={80} height={80} /><p>[{project.tags}]</p></div>
        });

        const webProjectsHolder = navTitles.webProjects.map(project => {
            return <div key={project.slug} className={styles.projectItem}><a href={project.slug}>{project.title}</a><Image src={'https:' + project.thumbnail} width={80} height={80} /><p>[{project.tags}]</p></div>
        });

        const craftProjectsHolder = navTitles.craftProjects.map(project => {
            return <div key={project.slug} className={styles.projectItem}><a href={project.slug}>{project.title}</a><Image src={'https:' + project.thumbnail} width={80} height={80} /><p>[{project.tags}]</p></div>
        });

        const hybridProjectsHolder = navTitles.hybridProjects.map(project => {
            return <div key={project.slug} className={styles.projectItem}><a href={project.slug}>{project.title}</a><Image src={'https:' + project.thumbnail} width={80} height={80} /><p>[{project.tags}]</p></div>
        });

        if (listResult === "web") {
            return(
                <div className={styles.content}>
                    <div className={styles.projectContainer}>
                        {webProjectsHolder}
                    </div>
                </div>
            )
        } else if (listResult === "craft") {
            return(
                <div className={styles.content}>
                    <div className={styles.projectContainer}>
                        {craftProjectsHolder}
                    </div>
                </div>
            )
        }  else if (listResult === "hybrid") {
            return(
                <div className={styles.content}>
                    <div className={styles.projectContainer}>
                        {hybridProjectsHolder}
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
    } else {
        return (
            <div></div>
        )
    }
}

export default Content;