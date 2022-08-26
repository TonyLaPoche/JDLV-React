// == Import
// import PropTypesLib from 'prop-types'; // pas encore utile
import { useSelector } from 'react-redux';
import { setNewAreaGame } from '../../actions/controlPanelAction';
import UseStartGame from '../../customHook/UseStartGame';
import ControlePanel from '../ControlePanel';
import Board from './Board';
import SavedBoxs from './SavedBoxs';
import './styles.scss';

// == Composant
function Game() {
  const isRunning = useSelector((state) => state.interactionGame.isRunBtn);
  const cycleGame = useSelector((state) => state.boardGenerator.cycleGame);
  const delayLoop = useSelector((state) => state.interactionGame.delayLoop);
  const cellsNumber = useSelector((state) => state.boardGenerator.cellsNumber);
  const AreaGame = useSelector((state) => state.boardGenerator.areaGame);
  const delay = delayLoop * 200;
  const isStart = isRunning !== false ? delay : 0;

  return (
    <>
      {UseStartGame(setNewAreaGame, isStart)}
      <h1 className="cycleHeader"> Cycle : {cycleGame}</h1>
      <div className="GameArea__container">
        <ControlePanel />
        <Board cellsNumber={parseInt(cellsNumber, 10)} areaGame={AreaGame} />
        <SavedBoxs />
      </div>
    </>
  );
}

// == Export
export default Game;
