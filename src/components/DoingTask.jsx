import React from 'react';
import bubble from '../assets/bubble.png';
import tag from '../assets/tag.png';
import clock from '../assets/clock.png';
import { Draggable } from 'react-beautiful-dnd';
import { Tags } from './Tags';

export const DoingTask = ({
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
            <p className='bg-yellow-200 rounded-xl p-2 ml-2 text-xs'>
              {details}
            </p>
          </div>
          <div className='flex items-center my-2'>
            <img className='h-5 self-center' src={tag} alt='tag' />
            <div className='flex flex-wrap items-center'>
              <Tags tags={tags} />
            </div>
          </div>
          <div className='flex my-2 items-center'>
            <img className='h-5 mr-2' src={clock} alt='clock' />
            <div className='text-xs'>Estimated time</div>
            <div className='bg-yellow-200 rounded ml-2 p-1 text-xs'>
              {timeTaken} hrs
            </div>
          </div>
          <div className='flex my-2 items-center'>
            <img className='h-5 mr-2' src={clock} alt='clock' />
            <div className='text-xs'>Time taken</div>
            <div className='bg-yellow-200 rounded ml-2 p-1 text-xs'>
              {timeTaken} hrs
            </div>
          </div>
          <div className='flex justify-end '>
            <button className='text-yellow-300 border-2 border-yellow-300 text-sm hover:bg-yellow-400 text-white font-bold py-1 px-6 rounded-full'>
              Restart
            </button>
            <button className='text-yellow-300 border-2 border-yellow-300 text-sm hover:bg-yellow-400 text-white font-bold py-1 px-6 rounded-full ml-2'>
              Stop
            </button>
            <button className='bg-yellow-300 text-sm hover:bg-yellow-300 text-white font-bold py-1 px-7 rounded-full ml-2'>
              Finish
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
};
