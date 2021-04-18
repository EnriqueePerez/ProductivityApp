import React from 'react';
import bubble from '../assets/bubble.png';
import tag from '../assets/tag.png';
import { Draggable } from 'react-beautiful-dnd';
import { Tags } from './Tags';

export const ToDoTask = ({
  _id,
  title,
  details,
  tags,
  dueDate,
  status,
  timeTaken,
  finishedDate,
  index,
}) => {
  const startTask = () => {
    console.log('ayuda');
  };
  return (
    <Draggable draggableId={_id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className='bg-white pt-4 pl-4 pr-3 pb-3 rounded-xl mt-3 shadow-lg hover:bg-gray-100'
        >
          <h3 className='ml-7 text-base font-bold'>{title}</h3>
          <div className='flex my-2'>
            <img className='h-5' src={bubble} alt='bubble' />
            <p className='bg-red-200 rounded-xl p-2 ml-2 text-xs'>{details}</p>
          </div>
          <div className='flex items-center my-2'>
            <img className='h-5 self-center' src={tag} alt='tag' />
            <div className='flex flex-wrap items-center'>
              <Tags tags={tags} />
            </div>
          </div>
          <div className='flex justify-end'>
            <button className='text-red-500 border-2 border-red-500 text-sm hover:bg-red-700 text-white font-bold py-1 px-6 rounded-full'>
              Delete Task
            </button>
            <button
              onClick={startTask}
              className='bg-red-500 text-sm hover:bg-red-500 text-white font-bold py-1 px-7 rounded-full ml-2'
            >
              Start
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
};
