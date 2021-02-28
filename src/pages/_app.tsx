import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    //todos elementos dentro do Provider vão ter acesso aos dados do contexto
    <Component {...pageProps} />
  );
}

export default MyApp;
