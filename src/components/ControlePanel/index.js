/* eslint-disable no-unused-expressions */
// == Import
// import PropTypesLib from 'prop-types'; // pas encore utile
import { useDispatch, useSelector } from 'react-redux';
import {
  cellToDisplay, generateAreaGame, generateRandomAreaGame, isClicked, resetAreaGame,
} from '../../actions/controlPanelAction';
import PickerColor from './PickerColor';
import './styles.scss';

// == Composant
function ControlePanel() {
  const cellsNumber = useSelector((state) => state.boardGenerator.cellsNumber);
  const isRunning = useSelector((state) => state.interactionGame.isRunBtn);
  const distpach = useDispatch();
  const handleChange = (evt) => {
    if (isRunning !== true) {
      distpach(cellToDisplay(evt.target.value));
      distpach(generateAreaGame(parseInt(evt.target.value, 10)));
    }
    else {
      alert('Veuillez arrêter (bouton "STOP") le jeu ou raffraichir la page.');
    }
  };
  const handleControlClick = (evt) => {
    if (isRunning !== true) {
      evt.target.name === 'randomBtn'
        ? distpach(generateRandomAreaGame(parseInt(cellsNumber, 10)))
        : distpach(resetAreaGame(parseInt(cellsNumber, 10)));
    }
    else {
      console.log('Veuillez arrêter le jeu ou raffraichir la page.');
      alert('Veuillez arrêter le jeu ou raffraichir la page.');
    }
  };
  const handleClick = (evt) => {
    distpach(isClicked(evt.target.name));
  };
  return (
    <div className="controlePanel__container">
      <div className="controlePanel__container--box">
        <h2 className="controlePanel__container--title">Panneau de controle</h2>
        <button
          type="button"
          className="controlePanel__container--button"
          name="isRunBtn"
          onClick={handleClick}
        >
          {!isRunning ? 'Lancer' : 'Stop'}
        </button>
        <button type="button" className="controlePanel__container--button" name="resetBtn" onClick={handleControlClick}> Reset </button>
        <button type="button" className="controlePanel__container--button" name="randomBtn" onClick={handleControlClick}> Aléatoire </button>
        <input
          type="number"
          name="cellsNumber"
          className="controlePanel__container--input"
          placeholder="Cellules à générer"
          min={3}
          max={30}
          value={cellsNumber}
          onChange={handleChange}
        />
        <PickerColor />
      </div>
    </div>
  );
}

// == Export
export default ControlePanel;
