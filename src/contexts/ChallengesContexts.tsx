import { createContext, useState, ReactNode, useEffect } from "react";
import Cookies from "js-cookie";

import challenges from "../../challenges.json";
import { LevelUpModal } from "../components/LevelUpModal";
interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}
interface ChallengesContextsData {
  level: number;
  currentExperience: number;
  challengeCompleted: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  closeModalLevelUp: () => void;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengeCompleted: number;
}

export const ChallengeContext = createContext({} as ChallengesContextsData);

export function ChallengesProvider({
  children,
  ...rest //objeto que possui o restante das propriedades (level, currentExperience, ...)
}: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1); // se rest.level(cookie) não existir ?? utiliza o 1
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  );
  const [challengeCompleted, setChallengeCompleted] = useState(
    rest.challengeCompleted ?? 0
  );

  const [activeChallenge, setActiveChallenge] = useState(null);

  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  //dispara uma função sempre que alguma informação mudar (segundo parâmetro)
  // [] significa que só vai disparar a função uma única vez
  useEffect(() => {
    Notification.requestPermission();
  }, []);

  //dispara uma função sempre que alguma informação mudar (segundo parâmetro)
  useEffect(() => {
    //usa-se String() pois cookies não aceitam números
    Cookies.set("level", String(level));
    Cookies.set("currentExperience", String(currentExperience));
    Cookies.set("challengeCompleted", String(challengeCompleted));
  }, [level, currentExperience, challengeCompleted]);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeModalLevelUp() {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio("/notification.mp3").play();

    if (Notification.permission === "granted") {
      console.log("notification", Notification.permission);

      new Notification("Novo Desafio 🎉", {
        body: `Valendo ${challenge.amount} xp!`,
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengeCompleted(challengeCompleted + 1);
  }

  return (
    <ChallengeContext.Provider
      value={{
        level,
        currentExperience,
        challengeCompleted,
        activeChallenge,
        experienceToNextLevel,
        closeModalLevelUp,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
      }}
    >
      {children}
      {/* se isLevelUpModalOpen for true mostre <LevelUpModal/> */}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengeContext.Provider>
  );
}
