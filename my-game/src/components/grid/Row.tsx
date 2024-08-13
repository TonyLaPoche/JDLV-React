import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import Cell from './Cell';

interface RowProps {
  rows: number;
}

const Row: React.FC<RowProps> = ({ rows }) => {
  const { game } = useSelector((state: RootState) => state.gameOfLife);
  const size = `${(1 / game.length) * 100}%`;

  return (
    <div className={`flex w-[100%]`} style={{ height: size }}>
      {game[rows].map((value, index) => (
        <Cell
          key={index}
          isAlive={value.alive}
          posX={value.posX}
          posY={value.posY}
        />
      ))}
    </div>
  );
};

export default Row;
