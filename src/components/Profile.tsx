import styles from "../styles/components/Profile.module.css";
import { ChallengeContext } from "../contexts/ChallengesContexts";
import { useContext } from "react";
import { useSession, signOut, signin } from "next-auth/client";

export function Profile() {
  const { level } = useContext(ChallengeContext);

  const [session, loading] = useSession();

  return (
    <div className={styles.profileContainer}>
      {/* <img src="https://github.com/danielbcarvalho.png" alt="Daniel Carvalho" />
      <div>
        <strong>Daniel Carvalho</strong> */}
      {session && (
        <>
          <img src={session.user.image} alt="User" />

          <div>
            <strong>{session.user.name}</strong>
            <p>
              <img src="icons/level.svg" alt="level" />
              Level {level}
            </p>
          </div>
        </>
      )}
      {!session && (
        <>
          <img src="icons/avatar.png" alt="User" />

          <div>
            <strong>
              <a href={`${process.env.NEXTAUTH_URL}api/auth/signin`}>
                Entrar com GitHub
              </a>
            </strong>
            <p>
              <img src="icons/level.svg" alt="level" />
              Level {level}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
