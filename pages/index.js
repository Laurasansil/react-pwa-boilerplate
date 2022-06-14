import Head from "next/head";
import { pwaTrackingListeners } from "../scripts/pwaEventlisteners";
import styles from "../styles/Home.module.css";
import OneSignal from "react-onesignal";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   OneSignal.init({
  //     appId: "3cf559ab-0b83-4f06-b636-db67c7a11e36",
  //     notifyButton: { enable: true },
  //     allowLocalhostAsSecureOrigin: true,
  //   });
  // }, []);

  // function pushOrderTracking() {
  //   let button = document.querySelector("button");
  //   button.addEventListener("click", () => {
  //     if (!window.Notification) return;

  //     Notification.requestPermission().then(showNotification);
  //   });

  //   function showNotification(permission) {
  //     if (permission !== "granted") return;
  //     let notification = new Notification("Pedido iniciado!", {
  //       body: "ATENÇÃO! O preparo da sua refeição acabou de começar! Logo mais traremos novidades :D",
  //       icon: "vegetais.png",
  //       dir: auto,
  //       image: "burger.png",
  //       lang: "pt-BR",
  //       renotify: true,
  //     });
  //     notification.onclick = () => {
  //       // window.open('https://google.com')
  //       window.location.href = "https://menu.ifood.com.br/teste-marketplace/";
  //     };
  //   }
  // }

  (async function orderTracking() {
    try {
      const permission = await Notification.requestPermission();
      console.log(permission);
      const options = {
        body: "ATENÇÃO! O preparo da sua refeição acabou de começar! Logo mais traremos novidades :D",
        icon: "vegetais.png",
        dir: auto,
        image: "burger.png",
        lang: "pt-BR",
        renotify: true,
      };
      const notify = new Notification("title", options);
      notify.onclick = () => {
        alert("Notification clicked");
      };
    } catch (error) {
      console.log(error);
    }
  })();

  return (
    <div className={styles.container}>
      <Head>
        <title>PWA Teste</title>
        <meta
          name="description"
          content="A PWA boilerplate/reference application in React"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.webmanifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <h1 className={styles.title}>React PWA Boilerplate</h1>
      <p className={styles.summary}>Instale o nosso PWA!</p>
      <button tton onClick={pwaTrackingListeners}>
        Botão de instalação :D
      </button>

      <button tton onClick={orderTracking}>
        Botão de notificação
      </button>

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
