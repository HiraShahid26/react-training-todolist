import React from "react";
import { TaskType } from "../models/Task"; // pour appeler l'interface
import { Task } from "./Task";
import "./TasksList.css";


type TaskListProps = {
  tasks : TaskType[];
  deleteTask: (taskId: number) => void;
  editTask: (taskId: number) => void;
};


export const TasksList = ({tasks, deleteTask, editTask}: TaskListProps) => {
  return (
    <div className="list-container">
      {tasks.map((task) =>
        <Task task={task} deleteTask={deleteTask} editTask={editTask}/>)}
    </div>
  );
};