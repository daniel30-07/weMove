import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

import styles from "../styles/components/LevelUpModal.module.css";

export function Leaderboard() {
  const { closeModalLeaderboard } = useContext(SidebarContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <strong>Leaderboard</strong>
        <p>Coming soon...</p>

        <button type="button" onClick={closeModalLeaderboard}>
          <img src="/icons/close.svg" alt="close modal" />
        </button>
      </div>
    </div>
  );
}
