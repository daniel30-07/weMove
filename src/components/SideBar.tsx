import { Leaderboard } from "./Leaderboard";
import styles from "../styles/components/SideBar.module.css";

import {
  faHome,
  faAward,
  faSignOutAlt,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SidebarContext } from "../contexts/SidebarContext";

import { signOut, signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import React from "react";
import { useContext } from "react";

export default function SideBar() {
  const router = useRouter();
  const url = process.env.REACT_APP_URL;
  const [session, loading] = useSession();

  const { isLeaderboard, callLeaderboard } = useContext(SidebarContext);

  function handleLeaderboard() {
    console.log("CHAMOUU", isLeaderboard);

    callLeaderboard();
  }

  return (
    <div className={styles.container}>
      <div className={styles.sideNav}>
        <img src="/favicon.png" alt="Logo" width="60px" />
        <FontAwesomeIcon
          className={`${styles.icon} `}
          icon={faHome}
          size="2x"
          onClick={() => {
            router.push("/");
          }}
        />

        <FontAwesomeIcon
          className={`${styles.icon} `}
          icon={faAward}
          size="2x"
          onClick={handleLeaderboard}
        />
        {!session && (
          <FontAwesomeIcon
            className={`${styles.icon} ${styles.signOutIcon}`}
            icon={faSignInAlt}
            size="2x"
            onClick={() => {
              router.push("https://wemove-one.vercel.app/api/auth/signin");
              //signIn();
              //signOut({ callbackUrl: `${url}/` });
            }}
          />
        )}
        {session && (
          <FontAwesomeIcon
            className={`${styles.icon} ${styles.signOutIcon}`}
            icon={faSignOutAlt}
            size="2x"
            onClick={() => {
              signOut();
              //signOut({ callbackUrl: `${url}/` });
            }}
          />
        )}
      </div>
    </div>
  );
}

//{session && <a href="#" onClick={handleSignout} className="btn-signin">Sign out</a>  }
//{!session && <a href="#" onClick={handleSignin}  className="btn-signin">Sign in</a>  }
