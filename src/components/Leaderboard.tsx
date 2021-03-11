import Head from "next/head";
import styles from "../styles/components/Leaderboard.module.css";

export function Leaderboard() {
  return (
    <>
      <Head>
        <title>Leaderboard</title>
      </Head>

      <div className={styles.container}>
        <h2>Leaderboard - Coming soon..</h2>
      </div>
    </>
  );
}
