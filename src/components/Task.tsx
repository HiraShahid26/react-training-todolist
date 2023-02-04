import React from "react";
import { TaskType } from "../models/Task";
import "./Task.css";

type TaskProps = {
  task: TaskType;
  deleteTask :(taskId : number) => void;
  editTask :(taskId : number) => void;
};

export const Task = ({task, deleteTask, editTask}: TaskProps) => {
  return (
    <div className="task-container">
      <div className="task-content">
        <label className="container">
          <input type="checkbox" checked={false} />
          <span className="checkmark"></span>
        </label>
        <p>{task.title}</p>
      </div>
      <div className="task-actions">
        <button onClick={() => editTask(task.id)}>Edit</button>
        <button onClick={() =>deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};
