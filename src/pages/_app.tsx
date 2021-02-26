import "../styles/global.css";

import { ChallengesProvider } from "../contexts/ChallengesContexts";

function MyApp({ Component, pageProps }) {
  return (
    //todos elementos dentro do Provider vão ter acesso aos dados do contexto
    <ChallengesProvider>
      <Component {...pageProps} />;
    </ChallengesProvider>
  );
}

export default MyApp;
