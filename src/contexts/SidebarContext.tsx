import React, { createContext, useState, ReactNode } from "react";
import { Leaderboard } from "../components/Leaderboard";

interface SidebarContextData {
  isLeaderboard: boolean;
  callLeaderboard: () => void;
  closeModalLeaderboard: () => void;
}

interface SidebarProps {
  children: ReactNode;
}

export const SidebarContext = createContext({} as SidebarContextData);

export function SidebarProvider({ children }: SidebarProps) {
  const [isLeaderboard, setLeaderboard] = useState(false);

  function closeModalLeaderboard() {
    setLeaderboard(false);
  }

  function callLeaderboard() {
    setLeaderboard(true);
  }

  return (
    <SidebarContext.Provider
      value={{
        isLeaderboard,
        callLeaderboard,
        closeModalLeaderboard,
      }}
    >
      {children}
      {isLeaderboard && <Leaderboard />}
    </SidebarContext.Provider>
  );
}
