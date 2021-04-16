import React from 'react';

const Column = ({ title, children }) => {
  return (
    <div className='bg-gradient-to-b from-purple-400  rounded mt-5 shadow-lg mx-auto flex-no-shrink  px-4 mx-3'>
      <div className='text-lg'>{title}</div>
      {children}
    </div>
  );
};

export default Column;
