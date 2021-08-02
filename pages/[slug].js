import {createClient} from 'contentful';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

import Head from 'next/head';
import Link from 'next/link'
import styles from "../styles/Home.module.scss";

const contentfulClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
});

export const getStaticPaths = async () => {
    const res = await contentfulClient.getEntries({content_type: 'portfolioWork'});

    console.log("res items: ", res.items);

    const paths = res.items.map(item => {
        return {
            params: {slug: item.fields.slug}
        }
    });

    console.log("paths: ", paths);

    return {
        paths, 
        fallback: false
    }
}

export async function getStaticProps({params}) {
    console.log("params: ", params);
    const {items} = await contentfulClient.getEntries({
        content_type: 'portfolioWork',
        'fields.slug' : params.slug
    });

    console.log("item: ", items[0]);

    return {
        props: {portfolioWork: items[0]}
    }
}

export default function Project({portfolioWork}) {
    console.log("profolio works: ", portfolioWork);
    const options = {
        renderMark: {
            [MARKS.BOLD]: (text) => <b>{text}</b>
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => {
                if (children[0] != "") {
                    return <p>{children}</p>;
                }
            },
            [BLOCKS.EMBEDDED_ASSET]: (node, children) => <img src={`https://${node.data.target.fields.file.url}`} height={node.data.target.fields.file.details.image.height} width={node.data.target.fields.file.details.image.width} alt={node.data.target.fields.description}></img>
        }
    };
    
    return (
        <div className={styles.homeContainer}>
            <Head>
                <title>RACLIM ONLINE | GITHUB</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,500;1,600;1,700;1,900&display=swap" rel="stylesheet" />
            </Head>

            <main className={styles.projectPage}>

                <div className={styles.projectTitle}>
                    <h1>
                        {portfolioWork.fields.title}
                    </h1>

                    <p>[{portfolioWork.fields.materials}]</p>
                </div>

                <div className={styles.richText}>
                    {documentToReactComponents(portfolioWork.fields.body, options)}
                </div>

                <div className={styles.backLink}>
                    <Link href="/projects">
                        <a>👈 Back to Projects</a>
                    </Link>
                </div>
            </main>

            <footer>
                <p>Rachel Lim 2021 ✨</p>
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