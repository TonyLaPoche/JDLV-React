import React from 'react';
import classNames from 'classnames';

interface CellProps {
  isAlive: boolean;
}

const Cell: React.FC<CellProps> = ({ isAlive }) => {
  const cellClasses = classNames('w-4 h-4 m-1 border border-gray-300', {
    'bg-gray-400': isAlive,
  });
  return (
    <div
      className={cellClasses}
      onClick={() => {
        console.log(`cellules ${isAlive}`);
      }}
    ></div>
  );
};

export default Cell;
