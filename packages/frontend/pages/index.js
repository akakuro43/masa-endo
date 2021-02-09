
// import styles from '../styles/Home.module.css'

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h3>Documentation &rarr;</h3>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h3>Learn &rarr;</h3>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className={styles.card}
//           >
//             <h3>Examples &rarr;</h3>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h3>Deploy &rarr;</h3>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
//         </a>
//       </footer>
//     </div>
//   )
// }

import styles from '../styles/pages/Home.module.sass'
import Head from 'next/head'
import Link from 'next/link';

export default function Home({ blog }) {
  return (
    <div>
      <Head>
         <title>Create Next App</title>
         <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.pKeyVisual}>
        <div className={styles.contents}>
          <h1 className={styles.siteName}>Masa-Endo</h1>
          <p className={styles.siteTheme}>Engineering, Tech, PdM</p>
        </div>
        <div className={styles.bg}></div>
      </section>
      <section className={styles.pArticle}>
        <div className="lInner">
          <ul className={styles.articleList}>
          {blog.map(blog => (
            <li className={styles.articleItem} key={blog.id}>
              <Link href={`blog/${blog.id}`}>
                <a>
                <div className={styles.thumb} style={{backgroundImage: 'url(' + `${blog.thumb.url}` + ')'}}></div>
                <div className={styles.contents}>
                  <h2 className={styles.ttl}>{blog.title}</h2>
                  <p className={styles.description}>{blog.description}</p>
                </div>
                
                </a>
              </Link>
            </li>
          ))}
          </ul>
        </div>
      </section>
    </div>
  );
}


// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };

  const data = await fetch('https://curiosology.microcms.io/api/v1/blog', key)
    .then(res => 
      res.json()
    )
    .catch(() => null);
  return {
    props: {
      blog: data.contents,
      revalidate: 300,
    },
  };
};