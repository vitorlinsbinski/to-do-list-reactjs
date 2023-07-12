import "./global.css";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";

export interface TaskType {
  id: number;
  content: string;
  done: boolean;
}

const tasksList: TaskType[] = [];

function App() {
  const storedTasks = localStorage.getItem("tasks");
  const initialTasks = storedTasks ? JSON.parse(storedTasks) : tasksList;

  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(initialTasks);
  const [totalCreated, setTotalCreated] = useState("0");
  const [finishedQuantity, setFinishedQuantity] = useState("0");

  useEffect(() => {
    setTotalCreated(tasks.length.toString());

    const finishedOnes = tasks.filter((task: TaskType) => {
      return task.done === true;
    });
    setFinishedQuantity(finishedOnes.length.toString());

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  function handleNewChangeTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    const newTaskItem = {
      id: Math.round(Math.random() * 1000),
      content: newTask,
      done: false,
    };

    setTasks([...tasks, newTaskItem]);

    setNewTask("");
  }

  function handleDeleteTask(taskToBeDeleted: TaskType) {
    const tasksWithoutDeletedOne = tasks.filter((task: TaskType) => {
      return task.id !== taskToBeDeleted.id;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  function handleFinishedTaskClick(taskToFinish: TaskType) {
    const updatedTasks = tasks.map((task: TaskType) => {
      if (task.id === taskToFinish.id) {
        return {
          ...task,
          done: !task.done,
        };
      } else {
        return task;
      }
    });

    setTasks(updatedTasks);
  }

  return (
    <>
      <Header
        newTask={newTask}
        onNewChangeTask={handleNewChangeTask}
        onCreateNewTask={handleCreateNewTask}
      ></Header>
      <Tasks
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        totalCreated={totalCreated}
        finishedQuantity={finishedQuantity}
        onFinishedTaskClick={handleFinishedTaskClick}
      ></Tasks>
    </>
  );
}

export default App;
