import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Local | Home</title>
        <meta name="keywords" content="users" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          perferendis dolorem ipsam, sequi enim minus? Dicta debitis rem
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          perferendis dolorem ipsam, sequi enim minus? Dicta debitis rem
        </p>
        <Link href="/users">
          <a className={styles.btn}>See users</a>
        </Link>
      </div>
    </>
  );
}
