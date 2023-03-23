import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import Row from './Row';

const Grid = () => {
  const { game } = useSelector((state: RootState) => state.gameOfLife);
  console.log(game.length);

  window.addEventListener('resize', () => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const size = Math.min(viewportWidth, viewportHeight) * 0.7;
    const square = document.querySelector('#square') as HTMLDivElement;
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
  });

  return (
    <div
      id="square"
      className="w-[70vw] h-[70vw] border-2 border-slate-500 mx-auto p-2"
      // style={{ width: `${size}px`, height: `${size}px` }}
    >
      {game.map((row, index) => (
        <Row key={index} rows={index} />
      ))}
    </div>
  );
};

export default Grid;
