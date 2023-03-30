import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { setCellStatus } from '../../features/algo/gameOfLife';
import { BgColors, CellColors } from '../../features/menu/menuSlice';

interface CellProps {
  isAlive: boolean;
  posX: string;
  posY: string;
}

const Cell: React.FC<CellProps> = ({ isAlive, posX, posY }) => {
  const dispatch = useDispatch();
  const { game, onMousePress } = useSelector(
    (state: RootState) => state.gameOfLife
  );
  const size = `${(1 / game.length) * 100}%`;

  const aliveColors = useAppSelector(CellColors);
  const DeadColors = useAppSelector(BgColors);

  const HandleClick = () => {
    let Position = [posX, posY];
    console.log(`cell position : ${'' + posX + posY} CLICKED`);
    dispatch(setCellStatus(Position));
  };

  return (
    <div
      id={`X_${posX}_Y_${posY}`}
      data-x={posX}
      data-y={posY}
      className={
        'h-[100%] border border-gray-300 ring-blue-500 hover:ring-1 ring-offset-2 hover:z-10'
      }
      style={{
        width: size,
        backgroundColor: isAlive ? aliveColors : DeadColors,
      }}
      onClick={HandleClick}
      onMouseOver={(e) => {
        let array: any[] = [];
        onMousePress &&
          array.push({
            x: e.currentTarget.dataset.x,
            y: e.currentTarget.dataset.y,
          });
      }}
    ></div>
  );
};

export default Cell;
