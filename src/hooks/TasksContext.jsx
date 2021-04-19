import React, { useEffect, useReducer, useState } from 'react';

export const TasksContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'fetch':
      console.log(action.payload);
      return action.payload;
    case 'start':
      console.log('empezando tarea');
      return state.map((task) => {
        if (task._id === action.payload._id) {
          return { ...task, status: 'Doing' };
        }
        return task;
      });
    case 'stop':
      console.log('parando tarea');
      return state.filter((task) => task._id !== action.payload._id);
    case 'delete':
      console.log('borrando tarea');
      return state.filter((task) => task._id !== action.payload._id);
    default:
      return state;
  }
};

export const TasksProvider = ({ children }) => {
  const initialState = [];
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchTasks = async () => {
    await fetch('https://productivity-app-backend.herokuapp.com/tasks')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'fetch', payload: data });
      });
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TasksContext.Provider value={{ tasks: state, tasksDispatch: dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};
