/* eslint-disable no-unused-expressions */
// == Import
// import PropTypesLib from 'prop-types'; // pas encore utile
import { useDispatch, useSelector } from 'react-redux';
import {
  cellToDisplay, generateAreaGame, generateRandomAreaGame, isClicked, resetAreaGame,
} from '../../actions/controlPanelAction';
import './styles.scss';

// == Composant
function ControlePanel() {
  const cellsNumber = useSelector((state) => state.boardGenerator.cellsNumber);
  const distpach = useDispatch();
  const handleChange = (evt) => {
    distpach(cellToDisplay(evt.target.value));
    distpach(generateAreaGame(parseInt(evt.target.value, 10)));
  };
  const handleClick = (evt) => {
    distpach(isClicked(evt.target.name));
    evt.target.name === 'randomBtn'
      ? distpach(generateRandomAreaGame(parseInt(cellsNumber, 10))) : distpach(resetAreaGame());
  };
  return (
    <div className="controlePanel__container">
      <div className="controlePanel__container--box">
        <h2 className="controlePanel__container--title">Panneau de controle</h2>
        <button
          type="button"
          className="controlePanel__container--button"
          name="runBtn"
          onClick={handleClick}
        >
          Lancer
        </button>
        <button type="button" className="controlePanel__container--button" name="resetBtn" onClick={handleClick}> Reset </button>
        <button type="button" className="controlePanel__container--button" name="randomBtn" onClick={handleClick}> Aléatoire </button>
        <input
          type="number"
          name="cellsNumber"
          className="controlePanel__container--input"
          placeholder="Cellules à générer"
          value={cellsNumber}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

// == Export
export default ControlePanel;
