import styles from "../styles/components/Profile.module.css";
import { ChallengeContext } from "../contexts/ChallengesContexts";
import { useContext } from "react";
export function Profile() {
  const { level } = useContext(ChallengeContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/daniel30-07.png" alt="Daniel Carvalho" />
      <div>
        <strong>Daniel Carvalho</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
