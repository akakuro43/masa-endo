import styles from '../styles/pages/Home.module.sass'
import Head from 'next/head'
import Link from 'next/link';

export default function Home({ blog }) {

  const formatDate = (dateStr) => {
    return dateStr.substr(0, 10).split('-').join('.')
  }

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
              <div className={styles.dates}>
                    <p className={styles.createDate}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.0009 0C7.19184 0.055625 1.50777 0.596875 1.11043 4.49391C1.06215 4.91047 1.0348 5.32891 1.01684 5.74766L3.81168 2.95562C3.90934 2.85797 4.06793 2.85797 4.16559 2.95562C4.26324 3.05328 4.26324 3.21156 4.16559 3.30922L0.110898 7.35984C-0.0356641 7.50625 -0.0356641 7.74375 0.110898 7.89016C0.257461 8.03656 0.495117 8.03656 0.641836 7.89016L1.53449 6.99844C2.19215 6.99625 2.84934 6.95891 3.50262 6.88344C4.33824 6.79844 5.01855 6.46984 5.57418 6H3.99684L6.29043 5.23625C6.46621 5.00359 6.62434 4.75641 6.76621 4.5H5.4984L7.16309 3.66859C7.81793 2.07594 7.97262 0.410312 8.0009 0Z" fill="#ADADAB"/>
                    </svg>
                    {formatDate(blog.createdAt)}</p>
                    <p className={styles.updateDate}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.99289 0.125006C2.95744 0.126866 2.0173 0.534897 1.3232 1.19821L0.765172 0.640178C0.528922 0.403928 0.125 0.571241 0.125 0.905334V3C0.125 3.20711 0.292891 3.375 0.5 3.375H2.59467C2.92877 3.375 3.09608 2.97108 2.85984 2.73483L2.2075 2.08249C2.68975 1.63094 3.31377 1.38082 3.97672 1.3751C5.42044 1.36263 6.63739 2.53099 6.62491 4.02263C6.61306 5.43764 5.46588 6.625 4 6.625C3.35739 6.625 2.75005 6.39566 2.27141 5.97569C2.1973 5.91068 2.08537 5.91463 2.01566 5.98433L1.39594 6.60405C1.31981 6.68017 1.32358 6.80428 1.40347 6.87644C2.09059 7.49708 3.00116 7.875 4 7.875C6.14009 7.875 7.87498 6.14011 7.875 4.00004C7.87502 1.8624 6.13053 0.121178 3.99289 0.125006Z" fill="#ADADAB"/>
                      </svg>
                      {formatDate(blog.updatedAt)}</p>
                  </div>
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