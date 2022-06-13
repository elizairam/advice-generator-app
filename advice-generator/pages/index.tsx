import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Icon from "../components/Icon";
import { useRouter } from "next/router";

interface ISlip {
  id: number;
  advice: string;
}

const API_URL = "https://api.adviceslip.com/advice";

export async function getStaticProps() {
  const data = await fetch(API_URL);
  const { slip } = await data.json();
  return {
    props: slip,
  };
}

export default function Home(slip: ISlip) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>advice generator app_</title>
        <meta
          name="description"
          content="Frontend mentor challenge advice generator app"
        />
        <link rel="icon" href="/favicon-32x32.png" />
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
        <div className={styles.icon}>
          <Icon
            click={() => router.reload()}
            icon={
              <Image
                src={"/icon-dice.svg"}
                alt="icon dice"
                width={24}
                height={24}
              />
            }
          />
        </div>
      </main>
    </div>
  );
}
