import Head from 'next/head';
import Nav from '../components/nav';
import List from '../components/list';
import Content from '../components/content';
import Layout from '../components/layout';
import React, {useState} from 'react';
import navList from '../statics/navList';

import styles from "../styles/Home.module.scss";

export default function Home() {
  const [navResult, setNavResult] = useState();
  const [listResult, setListResult] = useState();

  const getNavInput = (e) => {
    e.preventDefault();
    let value = e.target[0].value;

    let isWorks = value === "P" || value ==="p" || value === "Projects" || value === "projects";
    let isResume = value === "R" || value ==="r" || value === "Resume" || value === "resume";
    let isGithub = value === "G" || value ==="g" || value === "Github" || value === "github";
    let isStudentBlog = value === "B" || value ==="b" || value === "blog" || value === "Blog";
    let isName = value === "Rachel" || value === "rachel";

    let returnValue;

    if (isWorks) {
        returnValue = navList.PROJECTS;
    } else if (isResume) {
        returnValue = navList.RESUME;
    } else if (isGithub) {
        returnValue = navList.GITHUB;
    } else if (isStudentBlog) {
        returnValue = navList.BLOG;
    } else if (isName) {
      returnValue = navList.NAME;
    } else {
      returnValue = navList.ERROR;
    }

    setNavResult(returnValue);

    return returnValue;
}

const onListClick = (e) => {
  let value = e.target.innerText;

  setListResult(value);

  return value;
}

  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>RACLIM ONLINE</title>
        <link rel="shortcut icon" type="image/x-icon" href="https://raclim.cool/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,500;1,600;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <h1 className={styles.homeTitle}>
          <a href="/">Rachel A Lim</a><span className={styles.korean}> | 임아름</span> <span className={styles.pronouns}>| (she/her)</span> <span className={styles.jobTitles}>| programmer : creative</span>
        </h1>

        <div className={styles.about}>
          <p> I craft with humor and vulnerability. I love sharing a good giggle. 🌈 </p>
          <p>Currently working within the <a href="https://vidcode.com/">edtech space</a>.</p>
          <p>(also: a runner, history enthusiast, lover of animal facts)</p>
        </div>

        <div className={styles.topHolder}>
          <Nav
            getNavInput={getNavInput}
          ></Nav>
          <List
            navResult={navResult}
            onListClick={onListClick}
          >
          </List>
        </div>

        <Content
          navResult={navResult}
          listResult={listResult}
        >
        </Content>

        {/* <Layout>
        </Layout> */}
      </main>

      <footer>
        <p>Rachel Lim 2021 ✨ Built with Love</p>
      </footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
