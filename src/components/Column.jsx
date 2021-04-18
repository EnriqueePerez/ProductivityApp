import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Column = ({ title, tasks }) => {
  const defineColumnColor = () => {
    switch (title) {
      case 'To do':
        return 'bg-gradient-to-b from-red-200 via-transparent to-transparent rounded-xl shadow-lg px-5';
      case 'Doing':
        return 'bg-gradient-to-b from-yellow-200 via-transparent to-transparent rounded-xl shadow-lg px-5';
      case 'Done':
        return 'bg-gradient-to-b from-green-200 via-transparent to-transparent rounded-xl shadow-lg px-5';
      default:
        break;
    }
  };
  return (
    <div className={defineColumnColor()}>
      <h2 className='mt-4 mb-2 text-xl'>{title}</h2>
      <Droppable droppableId={title}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {tasks !== undefined
              ? tasks.map((task, index) => (
                  <Task key={task._id} index={index} task={task} />
                ))
              : null}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
