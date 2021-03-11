import { Provider } from "next-auth/client";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    //todos elementos dentro do Provider vão ter acesso aos dados do contexto
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
