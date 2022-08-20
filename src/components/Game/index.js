// == Import
// import PropTypesLib from 'prop-types'; // pas encore utile
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Board from './Board';
import './styles.scss';

// == Composant
function Game() {
  const isRunning = useSelector((state) => state.interactionGame.isRunBtn);
  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log('hello world');
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);
  const cellsNumber = useSelector((state) => state.boardGenerator.cellsNumber);
  const areaGame = useSelector((state) => state.boardGenerator.areaGame);
  return (
    <Board cellsNumber={parseInt(cellsNumber, 10)} areaGame={areaGame} />
  );
}

// == Export
export default Game;
