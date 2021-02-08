
import Head from 'next/head'
import Link from 'next/link';

export default function Home({ blog }) {
  return (
    <div>
      <Head>
         <title>Create Next App</title>
         <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="mb-4 text-green-500 text-1xl p-10">タイトル</h1>
      <ul>
        {blog.map(blog => (
          <li key={blog.id}>
            <Link href={`blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
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