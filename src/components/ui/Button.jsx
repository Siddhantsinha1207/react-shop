import styles from "./Button.module.css";

function Button({ children, type }) {
  return (
    <>
      {type === "contained" ? (
        <button
          style={{ background: "orangeRed", color: "#fff", padding: "0.5rem" }}
          className={styles.btn}
        >
          {children}
        </button>
      ) : (
        <button
          style={{
            background: "#fff",
            color: "orangeRed",
            padding: "0.5rem",
            border: "1px solid orangeRed",
          }}
          className={styles.btn}
        >
          {children}
        </button>
      )}
    </>
  );
}

export default Button;
