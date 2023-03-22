import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import Row from './Row';

const Grid = () => {
  const { game } = useSelector((state: RootState) => state.gameOfLife);

  return (
    <div className="w-[250px] h-[250px] border-2 border-slate-500 mx-auto">
      {game.map((row, index) => (
        <Row key={index} rows={index} />
      ))}
    </div>
  );
};

export default Grid;
