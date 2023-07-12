import styles from "./Task.module.css";
import { Trash } from "phosphor-react";

import { TaskType } from "../App";

interface TaskProps {
  task: TaskType;
  onDeleteTask: (task: TaskType) => void;
  onFinishedTaskClick: (task: TaskType) => void;
}

export function Task({ task, onDeleteTask, onFinishedTaskClick }: TaskProps) {
  function handleCheckboxChange() {
    onFinishedTaskClick(task);
  }

  return (
    <div className={`${styles.task} ${task.done ? styles.done : ""}`}>
      <div className={styles.left}>
        <label>
          <input
            type="checkbox"
            checked={task.done}
            onChange={handleCheckboxChange}
          />
          <div className={styles.checkmark}></div>
        </label>

        <p className={task.done ? styles.done : ""}>{task.content}</p>
      </div>

      <div className={styles.right}>
        <div className={styles.icon} onClick={() => onDeleteTask(task)}>
          <Trash size={18}></Trash>
        </div>
      </div>
    </div>
  );
}
