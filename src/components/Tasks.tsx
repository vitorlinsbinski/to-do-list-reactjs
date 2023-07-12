import styles from "./Tasks.module.css";
import { Task } from "./Task";
import { Counter } from "./Counter";

import { TaskType } from "../App";

interface TasksProps {
  tasks: TaskType[];
  onDeleteTask: (task: TaskType) => void;
  totalCreated: string;
  finishedQuantity: string;
  onFinishedTaskClick: (task: TaskType) => void;
}

export function Tasks({
  tasks,
  onDeleteTask,
  totalCreated,
  finishedQuantity,
  onFinishedTaskClick,
}: TasksProps) {
  console.log(tasks);

  return (
    <section className={styles.tasksSection}>
      <div className="container">
        <header>
          <div className={styles.createdOnes}>
            <h3>Tarefas criadas</h3>
            <Counter progression={totalCreated}></Counter>
          </div>
          <div className={styles.finishedOnes}>
            <h3>Concluídas</h3>
            <Counter
              progression={`${finishedQuantity} de ${totalCreated}`}
            ></Counter>
          </div>
        </header>

        <div className={styles.tasks}>
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                task={task}
                onDeleteTask={onDeleteTask}
                onFinishedTaskClick={onFinishedTaskClick}
              ></Task>
            );
          })}
        </div>
      </div>
    </section>
  );
}
