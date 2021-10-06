import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
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
      <Link href="/blogs">
        <a className={styles.btn}>See my blogs</a>
      </Link>
    </div>
  );
}
