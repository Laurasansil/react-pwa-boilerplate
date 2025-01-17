import Head from "next/head";
import { pwaTrackingListeners } from "../scripts/pwaEventlisteners";
import styles from "../styles/bananinha.module.css";
import OneSignal from "react-onesignal";
import { useEffect } from "react";

export default function Teste() {
  useEffect(() => {
    OneSignal.init({
      appId: "36f3eefd-9063-424c-8226-1b63900eb803",
      notifyButton: { enable: true },
      allowLocalhostAsSecureOrigin: true,
    });
  }, []); // <-- run this effect once on mount

  return (
    <div className={styles.container}>
      <Head>
        <title>Bananinha</title>
        <meta
          name="description"
          content="A PWA boilerplate/reference application in React"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.webmanifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <h1 className={styles.title}>Bananinha</h1>
      <p className={styles.summary}>
        Install this web application when prompted to test PWA installability.
      </p>
      <button onClick={pwaTrackingListeners}>INSTALL BUTTON </button>

      <footer className={styles.footer}>
        <p className={styles.description}>
          To read about how to show PWA install banner for your website,{" "}
          <a
            href="https://suncommander.medium.com/how-to-show-pwa-install-banner-add-to-homescreen-for-your-website-b1fbe6ebfdb5"
            title="Medium article on PWA install banner prompt"
          >
            click here for my article on Medium
          </a>
        </p>

        <p className={styles.description}>
          <a
            href="https://github.com/amitsingh-007/react-pwa-boilerplate"
            title="Github Repository"
          >
            Click here
          </a>{" "}
          for Github Repository for complete code of this application.
        </p>
      </footer>
    </div>
  );
}
