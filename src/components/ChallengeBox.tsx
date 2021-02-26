import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengesContexts";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const contextData = useContext(ChallengeContext);

  console.log(contextData);

  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 480 xp</header>
          <main>
            <img src="icons/body.svg" alt="body" />
            <strong>Novo Desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos.</p>
          </main>
          <footer>
            <button type="button" className={styles.failButton}>
              Falhei
            </button>
            <button type="button" className={styles.succeededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  );
}