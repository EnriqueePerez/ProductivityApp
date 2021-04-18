import React from 'react';
import bubble from '../assets/bubble.png';
import clock from '../assets/clock.png';
import calendar from '../assets/calendar.png';
import { Draggable } from 'react-beautiful-dnd';

export const DoneTask = ({
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
          <div className='ml-7 text-base font-bold'>{title}</div>
          <div className='flex my-2'>
            <img className='h-5' src={bubble} alt='bubble' />
            <div className='bg-green-200 rounded-xl p-2 ml-2 text-xs'>
              {details}
            </div>
          </div>
          <div className='flex my-2 items-center'>
            <img className='h-5 mr-2' src={clock} alt='clock' />
            <div className='text-xs'>Estimated time:</div>
            <div className='bg-green-200 rounded ml-2 p-1 text-xs'>
              {timeTaken} hrs
            </div>
          </div>
          <div className='flex my-2 items-center'>
            <img className='h-5 mr-2' src={calendar} alt='calendar' />
            <div className='text-xs'>Finished at: </div>
            <div className=' ml-2 text-xs'>{finishedDate}</div>
          </div>
          <div className='flex my-2 items-center justify-between'>
            <div className='flex items-center'>
              <img className='h-5 mr-2' src={clock} alt='clock' />
              <div className='text-xs'>Done in:</div>
              <div className='bg-green-200 rounded ml-2 p-1 text-xs'>
                {timeTaken} hrs
              </div>
            </div>
            <div>
              <button className='text-green-300 border-2 border-green-300 text-sm hover:bg-green-400 text-white font-bold py-1 px-6 rounded-full'>
                Delete Task
              </button>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};
