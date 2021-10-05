import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        perferendis dolorem ipsam, sequi enim minus? Dicta debitis rem
        asperiores iusto possimus nostrum facere rerum necessitatibus.
        Asperiores quis placeat nobis consequatur.
      </p>
      <Link href="/blog">
        <a>See my blogs</a>
      </Link>
      <Footer />
    </div>
  );
}
