import styles from "./NoTasksStatus.module.css";
import clipboard from "../assets/Clipboard.svg";

export function NoTasksStatus() {
  return (
    <div className={styles.noTasks}>
      <div className={styles.icon}>
        <img src={clipboard} alt="clipboard icon" />
      </div>

      <div className={styles.text}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
