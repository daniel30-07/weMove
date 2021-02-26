import { createContext, useState, ReactNode } from "react";

interface ChallengesContextsData {
  level: number;
  currentExperience: number;
  challengeCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengeContext = createContext({} as ChallengesContextsData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengeCompleted, setChallengeCompleted] = useState(0);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    console.log("new challenge");
  }

  return (
    <ChallengeContext.Provider
      value={{
        level,
        currentExperience,
        challengeCompleted,
        levelUp,
        startNewChallenge,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
}
