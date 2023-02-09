/* eslint-disable no-unused-expressions */
// == Import
// import PropTypesLib from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { isCellClicked } from '../../../actions/controlPanelAction';

// == Composant
function Cells({ rowPos, cellPos }) {
  const dispatch = useDispatch();
  const isRunning = useSelector((state) => state.interactionGame.isRunBtn);
  const cellValue = useSelector((state) => state.boardGenerator.areaGame[rowPos][cellPos]);
  const cellClassSelector = useSelector((state) => state.boardGenerator.cellClass);
  const colorDefault = useSelector((state) => state.interactionGame.cellColor);
  const colorAlive = 'black';
  let color = '';
  if (cellClassSelector[cellValue] === 'GameArea--cell alive') {
    color = colorAlive;
  }
  else {
    color = colorDefault;
  }
  // console.log(color);
  const handleClick = () => {
    if (isRunning !== true) {
      dispatch(isCellClicked(parseInt(rowPos, 10), parseInt(cellPos, 10)));
    }
    else {
      alert('Veuillez arrêter (bouton "STOP") le jeu ou raffraichir la page.');
    }
  };
  // console.log('cell value : ', cellClassSelector[cellValue]);
  return (
    <div
      className={cellClassSelector[cellValue]}
      onClick={handleClick}
      style={{ backgroundColor: color }}

    />
  );
}

// == Export
export default Cells;
