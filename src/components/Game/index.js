// == Import
// import PropTypesLib from 'prop-types'; // pas encore utile
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Board from './Board';
import './styles.scss';

// == Composant
function Game() {
  const cellsNumber = useSelector((state) => state.boardGenerator.cellsNumber);
  const isRun = useSelector((state) => state.interactionGame.isRun);
  const isRestart = useSelector((state) => state.interactionGame.isRestart);
  useEffect(() => {
    console.log(cellsNumber, ' <= new value');
  }, [cellsNumber]);
  return (
    <div>
      <Board />
    </div>
  );
}

// == Export
export default Game;
