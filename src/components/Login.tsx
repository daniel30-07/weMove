import styles from "../styles/components/Login.module.css";

export function Login() {
  return (
    <div className={styles.loginContainer}>
      <button>
        <img src="icons/enter.png" alt="" />
      </button>
    </div>
  );
}
