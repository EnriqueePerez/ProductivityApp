import React from 'react';
import Column from '../components/Column';

const Homepage = () => {
  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-3 gap-8'>
        <Column />
        <Column />
        <Column />
      </div>
    </div>
  );
};

export default Homepage;
