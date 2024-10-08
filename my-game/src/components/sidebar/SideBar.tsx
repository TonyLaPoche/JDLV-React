// import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { openNav } from '../../features/menu/menuSlice';
import { Accordion } from './Accordion';
import { MoreControle } from './MoreControle';

// import { useAppSelector, useAppDispatch } from '../../app/hooks';

export const SideBar = () => {
  const dispatch = useDispatch();
  const isClicked = useSelector((state: RootState) => state.menu.navOpen);

  const handleClick = () => {
    dispatch(openNav(!isClicked));
  };

  return (
    <>
      <div
        id="drawer-navigation"
        className={`fixed top-0 right-0 z-40 w-[85vw] h-[90vh] rounded-lg p-4 overflow-y-auto transition-transform ${
          !isClicked ? 'translate-x-full' : 'transform-none'
        } bg-white dark:bg-gray-800`}
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
      >
        <h3
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Menu
        </h3>
        <button
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={handleClick}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto w-full flex flex-col gap-2">
          {<Accordion />}
          <h4 className="text-center font-semibold text-gray-500 uppercase italic dark:text-gray-400">
            Controle
          </h4>
          <MoreControle />
        </div>
      </div>
      {isClicked && (
        <div
          onClick={handleClick}
          className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30"
        />
      )}
    </>
  );
};
