// == Import
// import PropTypesLib from 'prop-types'; // pas encore utile
import { useSelector } from 'react-redux';
import Board from './Board';
import './styles.scss';

// == Composant
function Game() {
  const cellsNumber = useSelector((state) => state.boardGenerator.cellsNumber);
  const isRun = useSelector((state) => state.interactionGame.isRun);
  const isRestart = useSelector((state) => state.interactionGame.isRestart);
  const areaGame = useSelector((state) => state.boardGenerator.areaGame);
  return (
    <div>
      <Board cellsNumber={parseInt(cellsNumber, 10)} areaGame={areaGame} />
    </div>
  );
}

// == Export
export default Game;
