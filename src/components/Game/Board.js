// == Import
import PropTypes from 'prop-types';
import Rows from './StructureBoard/Rows';
import './styles.scss';

// == Composant
function Board({ cellsNumber, areaGame }) {
  const rows = [];
  for (let i = 0; i < cellsNumber; i++) {
    rows.push(<Rows key={i} cellsNumber={cellsNumber} id={i} areaGameRow={areaGame[i]} />);
  }
  return (
    <div className="GameArea">
      {rows}
    </div>
  );
}

Board.propTypes = {
  cellsNumber: PropTypes.number.isRequired,
  areaGame: PropTypes.array.isRequired,
};

// == Export
export default Board;
