import Head from 'next/head';
import Nav from '../components/nav';
import Layout from '../components/layout';

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>RACLIM IS A LITTLE COOL</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,500;1,600;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <h1 className={styles.homeTitle}>
          Rachel A Lim<span className={styles.korean}> | 임아름</span> <span className={styles.blueColor}>| creative : programmer</span>
        </h1>
        
        <p className={styles.about}> 
          I craft with humor and vulnerability, and love sharing a good giggle. 🌈 
          Currently an Interactive Developer at <a href="https://vidcode.com/">Vidcode</a>. 
          (also an athlete and history enthusiast)
        </p>

        <Nav></Nav>

        <Layout
          children="Love Love Love"
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
