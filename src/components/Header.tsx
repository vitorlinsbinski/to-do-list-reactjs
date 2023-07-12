import styles from "./Header.module.css";
import rocketLogo from "../assets/rocket-logo.svg";
import { PlusCircle } from "phosphor-react";

import { ChangeEvent, FormEvent } from "react";

interface TaskProps {
  newTask: string;
  onNewChangeTask: (event: ChangeEvent<HTMLInputElement>) => void;
  onCreateNewTask: (event: FormEvent) => void;
}

export function Header({
  newTask,
  onNewChangeTask,
  onCreateNewTask,
}: TaskProps) {
  const isNewTaskEmpty = newTask.length === 0;

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.logo}>
          <img src={rocketLogo} alt="Logotipo" />
          <h1>
            to<span>do</span>
          </h1>
        </div>

        <form className={styles.form} onSubmit={onCreateNewTask}>
          <input
            type="text"
            className={styles.inputArea}
            placeholder="Adicione uma nova tarefa"
            onChange={onNewChangeTask}
            value={newTask}
          />

          <button
            type="submit"
            className={styles.createTaskButton}
            disabled={isNewTaskEmpty}
          >
            Criar <PlusCircle size={20} />
          </button>
        </form>
      </div>
    </header>
  );
}
