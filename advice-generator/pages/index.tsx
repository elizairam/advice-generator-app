import type { NextPage } from "next";
import Head from "next/head";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>advice generator app_</title>
        <meta
          name="description"
          content="Frontend mentor challenge advice generator app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.card}>
          <Card header={"Advice"} text={"Text advice here"} />
        </div>
      </main>
    </div>
  );
};

export default Home;
