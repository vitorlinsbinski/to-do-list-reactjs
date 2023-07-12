import styles from "./Counter.module.css";

interface ProgressionProps {
  progression: string;
}

export function Counter({ progression }: ProgressionProps) {
  return <div className={styles.counter}>{progression}</div>;
}
