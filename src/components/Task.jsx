import React from 'react';
import { ToDoTask } from './ToDoTask';
import { DoingTask } from './DoingTask';
import { DoneTask } from './DoneTask';

const Task = ({ task, index }) => {
  return task.status === 'To do' ? (
    <ToDoTask index={index} {...task} />
  ) : task.status === 'Doing' ? (
    <DoingTask index={index} {...task} />
  ) : (
    <DoneTask index={index} {...task} />
  );
};

export default Task;
