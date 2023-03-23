import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import classNames from 'classnames';
import { setCellStatus } from '../../features/algo/gameOfLife';

interface CellProps {
  isAlive: boolean;
  posX: string;
  posY: string;
}

const Cell: React.FC<CellProps> = ({ isAlive, posX, posY }) => {
  const dispatch = useDispatch();
  const { game } = useSelector((state: RootState) => state.gameOfLife);
  const size = `${(1 / game.length) * 100}%`;
  const cellClasses = classNames(
    'h-[100%] border border-gray-300 ring-blue-500 hover:ring-1 ring-offset-2 hover:z-10',
    {
      'bg-gray-400': isAlive,
    }
  );

  const HandleClick = () => {
    let Position = [posX, posY];
    console.log(`cell position : ${'' + posX + posY} CLICKED`);
    dispatch(setCellStatus(Position));
  };

  return (
    <div
      className={cellClasses}
      style={{ width: size }}
      onClick={HandleClick}
    ></div>
  );
};

export default Cell;
