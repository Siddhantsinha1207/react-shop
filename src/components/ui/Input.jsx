import styles from "./Input.module.css";

function Input({ onChange }) {
  return (
    <input
      type="text"
      className={styles.input}
      placeholder="Search Products"
      onChange={onChange}
    />
  );
}

export default Input;
