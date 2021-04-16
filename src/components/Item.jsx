import React from 'react';
import tag from '../assets/tag.png';
import bubble from '../assets/bubble.png';
import clock from '../assets/clock.png';
import calendar from '../assets/calendar.png';

const Item = ({
  title,
  details,
  tags,
  dueDate,
  status,
  timeTaken,
  finishedDate,
}) => {
  return status === 'To do' ? (
    <div className='bg-white p-3  rounded mt-3 border-b border-grey cursor-pointer hover:bg-grey-lighter'>
      <div className='text-lg'>{title}</div>
      <div className='flex my-2'>
        <img className='h-5' src={bubble} alt='bubble' />
        <div className='bg-red-200 rounded ml-2'>{details}</div>
      </div>
      <div className='flex my-2'>
        <img className='h-5' src={tag} alt='tag' />
        <div className='bg-yellow-300 rounded-full ml-2 px-6 py-1 '>{tags}</div>
      </div>
      <div className='flex justify-end '>
        <button class='text-red-200 border-2 border-red-200 text-sm hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'>
          Delete Task
        </button>
        <button class='bg-red-200 text-sm hover:bg-red-300 text-white font-bold py-2 px-8 rounded-full ml-2'>
          Start
        </button>
      </div>
    </div>
  ) : status === 'In progress' ? (
    <div className='bg-white p-3  rounded mt-3 border-b border-grey cursor-pointer hover:bg-grey-lighter'>
      <div className='text-lg'>{title}</div>
      <div className='flex my-2'>
        <img className='h-5' src={bubble} alt='bubble' />
        <div className='bg-red-200 rounded ml-2'>{details}</div>
      </div>
      <div className='flex my-2'>
        <img className='h-5' src={tag} alt='tag' />
        <div className='bg-yellow-300 rounded-full ml-2 px-6 py-1 '>{tags}</div>
      </div>
      <div className='flex my-2'>
        <img className='h-5 mr-2' src={clock} alt='clock' />
        <div className='text-lg'>Time </div>
        <div className='bg-red-200 rounded ml-2'>{timeTaken} hrs</div>
      </div>
      <div className='flex justify-end '>
        <button class='text-red-200 border-2 border-red-200 text-sm hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'>
          Restart
        </button>
        <button class='text-red-200 border-2 border-red-200 text-sm hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ml-2'>
          Stop
        </button>
        <button class='bg-red-200 text-sm hover:bg-red-300 text-white font-bold py-2 px-8 rounded-full ml-2'>
          Finish
        </button>
      </div>
    </div>
  ) : (
    <div className='bg-white p-3  rounded mt-3 border-b border-grey cursor-pointer hover:bg-grey-lighter'>
      <div className='text-lg'>{title}</div>
      <div className='flex my-2'>
        <img className='h-5' src={bubble} alt='bubble' />
        <div className='bg-red-200 rounded ml-2'>{details}</div>
      </div>
      <div className='flex my-2'>
        <img className='h-5 mr-2' src={calendar} alt='calendar' />
        <div className='text-lg'>Finished in </div>
        <div className=' ml-2'>{finishedDate} hrs</div>
      </div>
      <div className='flex my-2'>
        <img className='h-5 mr-2' src={clock} alt='clock' />
        <div className='text-lg'>Done in </div>
        <div className=' ml-2'>{timeTaken} hrs</div>
      </div>
    </div>
  );
};

export default Item;
