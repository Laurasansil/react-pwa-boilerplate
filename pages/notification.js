import Head from "next/head";
import styles from "../styles/notification.module.css";
import { useEffect } from "react";

export default function Home() {
  function showNotification() {
    Notification.requestPermission(function (result) {
      if (result === "granted") {
        navigator.serviceWorker.ready.then(function (registration) {
          registration.showNotification("Promoção", {
            body: "ATENÇÃO! O preparo da sua refeição acabou de começar! Logo mais traremos novidades :D",
            icon: "images/icon-burger.png",
            image: "images/burger.jpg",
          });
        });
      }
    });
  }

  function lateNofitication() {
    Notification.requestPermission(function (result) {
      if (result === "granted") {
        navigator.serviceWorker.ready.then(function (registration) {
          registration.showNotification("Promoção", {
            body: "Seu pedido está atrasado!",
            icon: "images/icon-burger.png",
            image: "images/burger.jpg",
            data: {
              url: "https://gestordepedidos.ifood.com.br/", // URL para onde o link deve redirecionar
            },
          });
        });
      }
    });
  }

  // Chama a função showNotification() a cada 5 segundos
  setInterval(lateNofitication, 5000);

  useEffect(() => {
    navigator.serviceWorker.register("service-worker.js");
    if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        console.log(permission);
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Maçazinha</title>
        <meta
          name="description"
          content="A PWA boilerplate/reference application in React"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.webmanifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <h1 className={styles.title}>Notification API!</h1>
      <p className={styles.summary}>
        Teste nossas notificações cliando no botão abaixo C:
      </p>

      <button onClick={showNotification}>Botão de notificação</button>

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
