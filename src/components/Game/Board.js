// == Import
import PropTypes from 'prop-types';
import { generatorDomArray, generatorTable } from '../../generator';
import Rows from './StructureBoard/Rows';
import './styles.scss';

// == Composant
function Board({ cellsNumber, areaGame }) {
  console.log(cellsNumber, ' => lignes et cellules à générer dans le tableau');
  // NOTE Generation de grille impair mode.
  /*
    Arrondir à l'impair suppérieur si nombre pair. (ou trouver solution alternative pour le Scss)
    Au nombre récupéré au state.
    Pour chaque itération rajouter autant de cellulles que de lignes soumis
  */
  const rows = [];
  for (let i = 0; i < cellsNumber; i++) {
    rows.push(<Rows key={i} cellsNumber={cellsNumber} id={i} />);
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
