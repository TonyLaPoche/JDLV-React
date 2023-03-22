import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import Cell from './Cell';

interface RowProps {
  rows: number;
}

const Row: React.FC<RowProps> = ({ rows }) => {
  const { game } = useSelector((state: RootState) => state.gameOfLife);

  return (
    <div className="w-[200px] h-[20px] flex p-1">
      {game[rows].map((value, index) => (
        <Cell key={index} isAlive={value.alive} />
      ))}
    </div>
  );
};

export default Row;
