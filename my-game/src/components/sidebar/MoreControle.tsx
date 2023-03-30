import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { setBg, setCell, setSpeed } from '../../features/menu/menuSlice';

const Speed: string[] = ['lent', 'normal', 'rapide'];
const regex = /^#[0-9a-fA-F]{6}$/;

export const MoreControle = () => {
  //   const [range, setRange] = useState(1);
  //   const [inputCell, setInputCell] = useState('');
  //   const [inputBg, setInputBg] = useState('');

  const { speed, cellColor, bgColor } = useSelector(
    (state: RootState) => state.menu.controle
  );

  const handleChange = (e: any) => {
    // setRange(e.target.value);
    dispatch(setSpeed(e.target.value));
  };

  const dispatch = useDispatch();

  const handleInput = (e: any) => {
    let value = e.target.value;
    switch (e.target.name) {
      case 'bgColors':
        // setInputBg(value);
        dispatch(setBg(value));
        break;
      case 'cellColors':
        // setInputCell(value);
        dispatch(setCell(value));
        break;
      default:
        console.log('error');
        break;
    }
  };
  return (
    <>
      <div className="w-full py-4 flex items-center justify-start md:justify-center gap-4">
        <label
          htmlFor="steps-range"
          className="block text-sm font-medium italic text-gray-900 dark:text-white"
        >
          Vitesse du jeu :
        </label>
        <input
          name="steps-range"
          id="steps-range"
          type="range"
          min="0"
          max="2"
          value={speed}
          onChange={handleChange}
          className="w-1/4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <p className={`p-1 rounded-md bg-sky-300`}>{Speed[speed]}</p>
      </div>

      <div className="w-full py-4 flex items-center justify-start md:justify-center gap-4">
        <label
          htmlFor="cellColors"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Cellules
        </label>
        <div className="flex">
          <input
            type="text"
            id="cellColors"
            name="cellColors"
            value={cellColor}
            onChange={handleInput}
            className="rounded-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="#000000"
          />
          <span className="flex p-2 items-center text-gray-900 bg-gray-200 border border-l-0 border-gray-300 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              height={24}
              width={24}
              color={regex.test(cellColor) ? cellColor : 'black'}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="w-full py-4 flex items-center justify-start md:justify-center gap-4">
        <label
          htmlFor="bgColors"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Arrière plan
        </label>
        <div className="flex">
          <input
            type="text"
            id="bgColors"
            name="bgColors"
            value={bgColor}
            onChange={handleInput}
            className="rounded-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="#FFFFFF"
          />
          <span className="flex p-2 items-center text-gray-900 bg-gray-200 border border-l-0 border-gray-300 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg width={24} height={24}>
              <rect
                x="0"
                y="0"
                width="24"
                height="24"
                rx="10"
                ry="10"
                fill={regex.test(bgColor) ? bgColor : 'white'}
              />
            </svg>
          </span>
        </div>
      </div>
      <p>
        Pour le format des couleurs basé vous sur ce site{' '}
        <a
          href="https://www.color-hex.com/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500"
        >
          Colors Pickers
        </a>{' '}
        et donné le format #000000
      </p>
      <hr className="mx-auto w-1/3 my-2" />
      <p>D'autres features sont à venir !</p>
    </>
  );
};
