import type { NextPage } from 'next';
import Head from 'next/head';

import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Linked registrations UI</title>
        <meta name="description" content="Linked registrations UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Linked Registration UI</h1>
      </main>
    </div>
  );
};

export default Home;
