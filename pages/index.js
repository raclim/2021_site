import Head from 'next/head';
import Nav from '../components/nav';
import List from '../components/list';
import Content from '../components/content';
import Layout from '../components/layout';
import React, {useState} from 'react';
import {createClient} from 'contentful';

import styles from "../styles/Home.module.scss";


export async function getStaticProps() {
  const contentfulClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });

  const res = await contentfulClient.getEntries({content_type: 'portfolioWork'});

  return {
    props: {
      works: res.items
    }
  }
}

export default function Home({works}) {
  console.log(works);
  const [navResult, setNavResult] = useState();
  const [listResult, setListResult] = useState();

  const getNavInput = (e) => {
    e.preventDefault();
    let value = e.target[0].value;

    console.log("value: ", value);

    let isWorks = value === "P" || value ==="p" || value === "Projects" || value === "projects";
    let isResume = value === "R" || value ==="r" || value === "Resume" || value === "resume";
    let isGithub = value === "G" || value ==="g" || value === "Github" || value === "github";
    let isStudentBlog = value === "B" || value ==="b" || value === "blog" || value === "Blog";
    let isName = value === "Rachel" || value === "rachel";

    let returnValue;

    //return value should be an object

    if (isWorks) {
        returnValue = "works";
    } else if (isResume) {
        returnValue = "resume";
    } else if (isGithub) {
        returnValue = `My Github Page`;
    } else if (isStudentBlog) {
        returnValue = "my student blog";
    } else if (isName) {
      returnValue = "my name";
    } else {
      returnValue = "ERROR: unidentified value huehue";
    }

    setNavResult(returnValue);

    console.log("return value: ", returnValue);
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
        <title>RACLIM'S INTERNET HUB</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,500;1,600;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <h1 className={styles.homeTitle}>
        Rachel A Lim<span className={styles.korean}> | 임아름</span> <span className={styles.pronouns}>| (she/her)</span> <span className={styles.jobTitles}>| programmer : creative</span>
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
        <Layout
          works={works}
        >
        </Layout>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
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
