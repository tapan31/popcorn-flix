import styles from "./BackButton.module.css";

function BackButton({ children, onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}

export default BackButton;
