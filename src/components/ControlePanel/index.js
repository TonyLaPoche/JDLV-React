/* eslint-disable no-unused-expressions */
// == Import
// import PropTypesLib from 'prop-types'; // pas encore utile
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import {
  addingSpeedValue,
  cellToDisplay,
  decreaseSpeedValue,
  generateAreaGame,
  generateRandomAreaGame,
  isClicked,
  keepingInitialGame,
  resetAreaGame,
} from '../../actions/controlPanelAction';
import PickerColor from './PickerColor';
import './styles.scss';

// == Composant
function ControlePanel() {
  const cellsNumber = useSelector((state) => state.boardGenerator.cellsNumber);
  const areaGame = useSelector((state) => state.boardGenerator.areaGame);
  const isRunning = useSelector((state) => state.interactionGame.isRunBtn);
  const delayLoop = useSelector((state) => state.interactionGame.delayLoop);
  const speedDelayName = useSelector((state) => state.interactionGame.speedDelayName);
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
    if (!isRunning) {
      distpach(keepingInitialGame(areaGame));
    }
    distpach(isClicked(evt.target.name, isRunning !== false ? 0 : 5));
  };

  const handleSpeedDecrease = (evt) => {
    console.log(evt.target.value);
    if (delayLoop <= 4) {
      distpach(addingSpeedValue());
    }
    else {
      alert('Vitesse maximale atteintes');
    }
  };

  const handleSpeedAdd = (evt) => {
    console.log(evt.target.value);
    if (delayLoop >= 2) {
      distpach(decreaseSpeedValue());
    }
    else {
      alert('Vitesse Minimal atteintes');
    }
  };

  return (
    <div className="controlePanel__container">
      <h1 className="controlePanel__container--title">Panneau de controle</h1>
      <div className="controlePanel__container--box">
        <button
          type="button"
          className="controlePanel__container--box--button"
          name="isRunBtn"
          onClick={handleClick}
          title="Lance le jeu (veuillez avoir selectionner un nombre de case et une vitesse)"
        >
          {!isRunning ? 'Lancer' : 'Stop'}
        </button>
      </div>
      <div className="controlePanel__container--box">
        <button
          type="button"
          className="controlePanel__container--box--button"
          name="resetBtn"
          onClick={handleControlClick}
          title="Vide la grille sans modifier vitesse ou nombre de cellules affiché à l'écran."
        >
          Reset
        </button>
        <button
          type="button"
          className="controlePanel__container--box--button"
          name="randomBtn"
          onClick={handleControlClick}
          title="Remplit aléatoirement votre grille"
        >
          Aléatoire
        </button>
      </div>

      <div className="controlePanel__container--box">
        <p className="controlePanel__container--text"> Taille du patern : </p>
        <div className="controlePanel__container--item">
          <input
            type="number"
            name="cellsNumber"
            className="controlePanel__container--input"
            placeholder="Cellules à générer"
            min={3}
            max={50}
            value={cellsNumber}
            onChange={handleChange}
            title="minimum 3 et maximum 50"
          />
        </div>
      </div>

      <div className="controlePanel__container--box">
        <button
          type="button"
          className="controlePanel__container--box--button--incr"
          name="lessSpeed"
          title="reduit la vitesse"
          onClick={handleSpeedDecrease}
        >
          <FontAwesomeIcon icon={faMinus} size="xl" color="black" />
        </button>
        <div className="controlePanel__container--item">
          <p className=""> Vitesse :<br />{speedDelayName[delayLoop]} </p>
        </div>
        <button
          type="button"
          className="controlePanel__container--box--button--incr"
          name="addSpeed"
          title="augmente la vitesse"
          onClick={handleSpeedAdd}
        >
          <FontAwesomeIcon icon={faPlus} size="xl" color="black" />
        </button>
      </div>

      <div className="controlePanel__container--box pickerColor">
        <h2 className="pickerColor--title">Couleurs d'arrière plan :</h2>
        <PickerColor />
      </div>
    </div>
  );
}

// == Export
export default ControlePanel;
