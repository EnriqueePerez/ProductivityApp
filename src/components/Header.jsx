/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Header = () => {
  return (
    <div>
      <nav className='bg-white py-2 md:py-4'>
        <div className='container px-4 mx-auto md:flex md:items-center'>
          <div className='flex justify-between items-center'>
            <a href='#' className='font-bold text-xl text-indigo-600'>
              Task List
            </a>
            <button
              className='border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden'
              id='navbar-toggle'
            >
              <i className='fas fa-bars'></i>
            </button>
          </div>

          <div
            className='hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0'
            id='navbar-collapse'
          >
            <a
              href='#'
              className='p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600'
            >
              Main Page
            </a>
            <a
              href='#'
              className='p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300'
            >
              User
            </a>
            <a
              href='#'
              className='p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300'
            >
              Picture
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
