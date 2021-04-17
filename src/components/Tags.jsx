import React from 'react';

export const Tags = ({ tags }) => {
  return (
    <>
      {tags.map((tag) => (
        <div className={`bg-${tag[1]}-300 rounded-full ml-2 mb-1 px-6 py-1 text-xs`}>
          <p>{tag[0]}</p>
        </div>
      ))}
    </>
  );
};
