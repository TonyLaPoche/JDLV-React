// == Import
// import PropTypesLib from 'prop-types'; // pas encore utile
import { useSelector } from 'react-redux';
import UseStartGame from '../../customHook/UseStartGame';
import Board from './Board';
import './styles.scss';

// == Composant
function Game() {
  const isRunning = useSelector((state) => state.interactionGame.isRunBtn);
  const delayLoop = useSelector((state) => state.interactionGame.delayLoop);
  const cellsNumber = useSelector((state) => state.boardGenerator.cellsNumber);
  const areaGame = useSelector((state) => state.boardGenerator.areaGame);
  const callback = () => {
    console.log('hello world');
  };
  const delay = delayLoop * 1000;
  const isStart = isRunning !== false ? delay : 0;

  return (
    <>
      {UseStartGame(callback, isStart)}
      <Board cellsNumber={parseInt(cellsNumber, 10)} areaGame={areaGame} />
    </>
  );
}

// == Export
export default Game;
