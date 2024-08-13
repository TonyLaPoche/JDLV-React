import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInterval, { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import {
  AreaGame,
  Cell,
  clearGrid,
  playGame,
  selectCount2,
  setRandomGrid,
  // setTimer,
  setValue2,
} from '../../features/algo/gameOfLife';
import { openNav, Speed } from '../../features/menu/menuSlice';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const delay: number[] = [2000, 1000, 500];

export const Control = () => {
  const [start, setStart] = useState(false);

  const count: number = useAppSelector(selectCount2);
  const speed: number = useAppSelector(Speed);
  const CurrentGame: Cell[][] = useAppSelector(AreaGame);

  const dispatch = useDispatch();

  const isButtonClicked = useSelector((state: RootState) => state.menu.navOpen);

  const handleClick = () => {
    setStart(false);
    dispatch(openNav(!isButtonClicked));
  };

  const handleRdGrid = () => {
    setStart(false);
    dispatch(setRandomGrid(count));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: number = parseInt(e.target.value);
    if (value > 100) {
      dispatch(setValue2(100));
    } else if (value <= 0) {
      dispatch(setValue2(1));
    } else {
      dispatch(setValue2(value));
    }
  };

  const handleClearChange = () => {
    setStart(false);
    dispatch(clearGrid(count));
  };

  useInterval(
    () => {
      dispatch(playGame(CurrentGame));
    },
    start ? delay[speed] : null
  );

  const handleStart = () => {
    setStart((n) => !n);
  };

  return (
    <>
      <div className="w-full flex justify-evenly gap-4">
        <input
          id="size_grid"
          type="number"
          placeholder="Cellules"
          className="p-2 w-1/4 text-center bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-md  focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          min={1}
          max={100}
          value={count}
          onChange={handleChange}
        />
        <button
          className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md  text-2xl px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleRdGrid}
        >
          Aléatoire
        </button>
        <button
          onClick={handleStart}
          className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md  text-2xl px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          {start ? 'Stop' : 'Jouer'}
        </button>
      </div>
      <div className="w-ful flex justify-center gap-10 md:gap-24">
        <button
          className="text-white text-2xl bg-blue-200 hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-md  px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          disabled
        >
          Replay
        </button>
        <button
          className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md  text-2xl px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleClearChange}
        >
          Clear
        </button>
        <div className="absolute right-5 bottom-6 z-30 ">
          <button
            className=" w-12 h-12 fixed bottom-6 right-6 flex  justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-md px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handleClick}
          >
            {isButtonClicked ? <AiOutlineClose /> : <AiOutlineMenu/>}
          </button>
        </div>
      </div>
    </>
  );
};
