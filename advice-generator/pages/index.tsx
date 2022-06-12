import Head from "next/head";
import Card from "../components/Card";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

interface ISlip {
  id: number;
  advice: string;
}

export async function getStaticProps() {
  const data = await fetch("https://api.adviceslip.com/advice");
  const { slip } = await data.json();
  return {
    props: slip,
  };
}

export default function Home(slip: ISlip) {
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
          <Card
            text={slip.advice}
            header={
              <div className={styles.header}>
                <Header headerText={"A D V I C E "} idText={slip.id} />
              </div>
            }
          />
        </div>
      </main>
    </div>
  );
}
