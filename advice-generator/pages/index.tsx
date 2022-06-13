import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Icon from "../components/Icon";
import { useState } from "react";

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
  const API_GENERATE_NEW_ADVICE = `https://api.adviceslip.com/advice/${
    Math.floor(Math.random() * 224) + 1
  }`;
  const [slipData, setSlipData] = useState<ISlip>({
    id: slip.id,
    advice: slip.advice,
  });
  const [pressNewAdvice, setPressNewAdvice] = useState<boolean>(false);

  const getNewAdvice = async () => {
    const data = await fetch(API_GENERATE_NEW_ADVICE);
    const { slip } = await data.json();
    setSlipData(slip);
  };

  const changeHandlerAdvice = () => {
    setPressNewAdvice(!pressNewAdvice);
    getNewAdvice();
  };

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
            text={slipData.advice}
            header={
              <div className={styles.header}>
                <Header headerText={"A D V I C E "} idText={slipData.id} />
              </div>
            }
          />
        </div>
        <div className={styles.icon}>
          <Icon
            click={changeHandlerAdvice}
            icon={
              <Image
                src={"/icon-dice.svg"}
                alt="icon dice"
                width={22}
                height={22}
              />
            }
          />
        </div>
      </main>
    </div>
  );
}
