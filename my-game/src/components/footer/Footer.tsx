import { useDispatch, useSelector } from 'react-redux';

// import Hook
import { useAppSelector } from '../../app/hooks';

// import Store
import { RootState } from '../../app/store';
import { selectCount2, setValue2 } from '../../features/algo/gameOfLife';
import { setBoolean } from '../../features/boolean/booleanSlice';

// import icons
import { BsQuestionLg } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
export const Footer = () => {
  const count = useAppSelector(selectCount2);
  const dispatch = useDispatch();

  // console.log('count : ', count);

  const isButtonClicked = useSelector(
    (state: RootState) => state.boolean.value
  );

  const handleClick = () => {
    dispatch(setBoolean(!isButtonClicked));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: number = parseInt(e.target.value);
    dispatch(setValue2(value >= 3 ? value : 3));
  };

  return (
    <>
      <div className="bg-slate-200 border-t-2 border-slate-300 w-screen h-44">
        <div className="h-full p-4 flex flex-col justify-center gap-8 ">
          <div className="w-full flex justify-evenly gap-4">
            <input
              id="size_grid"
              type="number"
              placeholder="Cellules"
              className="p-2 w-1/4 text-center bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-md  focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              min={3}
              max={100}
              value={count}
              onChange={handleChange}
            />
            <button className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md  text-2xl px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Aléatoire
            </button>
            <button className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md  text-2xl px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Start
            </button>
          </div>
          <div className="w-ful flex justify-center gap-10 md:gap-24">
            <button className="text-white text-2xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md  px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Replay
            </button>
            <button className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md  text-2xl px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Clear
            </button>
            <div className="absolute right-5 bottom-6 z-30 ">
              <button
                className=" w-12 h-12 flex  justify-center items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-md px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={handleClick}
              >
                {isButtonClicked ? <AiOutlineClose /> : <BsQuestionLg />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
