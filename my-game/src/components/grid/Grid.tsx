import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import Row from './Row';

const Grid = () => {
  const { game } = useSelector((state: RootState) => state.gameOfLife);

  let viewportWidth = window.innerWidth;
  let viewportHeight = window.innerHeight;
  let size = Math.min(viewportWidth, viewportHeight) * 0.70;
  let width = `${size}px`;
  let height = `${size}px`;

  window.addEventListener('resize', () => {
    const newViewportWidth = window.innerWidth;
    const newViewportHeight = window.innerHeight;
    size = Math.min(newViewportWidth, newViewportHeight) * 0.70;
    const square = document.getElementById('square') as HTMLElement
    width = `${size}px`
    height = `${size}px`
    square.style.width = width
    square.style.height = height

  })


  return (
    <div
      id="square"
      className="border-2 border-slate-500 mx-auto p-2"
      style={{ width: width, height: height }}
    >
      {game.map((row, index) => (
        <Row key={index} rows={index} />
      ))}
    </div>
  );
};

export default Grid;
