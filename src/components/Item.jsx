import React from 'react';
import tag from '../assets/tag.png';
import bubble from '../assets/bubble.png';

const Item = () => {
  return (
    <div className='bg-white p-3  rounded mt-3 border-b border-grey cursor-pointer hover:bg-grey-lighter'>
      <div className='text-lg'>Task Title</div>
      <div className='flex my-2'>
        <img className='h-5' src={bubble} alt='bubble' />
        <div className='bg-red-200 rounded ml-2'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero rerum
          ab temporibus, in dolorum error perspiciatis eligendi modi beatae quis
          corporis commodi, maxime sunt vel nesciunt, at assumenda inventore?
          Quaerat!
        </div>
      </div>
      <div className='flex my-2'>
        <img className='h-5' src={tag} alt='tag' />
        <div className='bg-yellow-300 rounded-full ml-2 px-6 py-1 '>tag</div>
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
  );
};

export default Item;
