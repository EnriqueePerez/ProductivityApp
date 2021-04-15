import React from 'react';
import Item from './Item';

const Column = () => {
  return (
    <div className='bg-gradient-to-b from-purple-400  rounded mt-5 shadow-lg mx-auto flex-no-shrink  px-4 mx-3'>
      <Item />
      <Item />
    </div>
  );
};

export default Column;
