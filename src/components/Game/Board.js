// == Import
import PropTypes from 'prop-types';
import './styles.scss';

// == Composant
function Board({ cellsNumber }) {
  console.log(cellsNumber, ' => lignes et cellules à générer dans le tableau');
  // NOTE Generation de grille impair mode.
  /*
    Arrondir à l'impair suppérieur si nombre pair. (ou trouver solution alternative pour le Scss)
    Au nombre récupéré au state.
    Pour chaque itération rajouter autant de cellulles que de lignes soumis
  */
  return (
    <div className="GameArea">
      <div className="GameArea--row">
        <div className="GameArea--cell" />
        <div className="GameArea--cell" />
        <div className="GameArea--cell" />
        <div className="GameArea--cell" />
        <div className="GameArea--cell" />
      </div>
      <div className="GameArea--row">
        <div className="GameArea--cell" />
        <div className="GameArea--cell" />
        <div className="GameArea--cell" />
        <div className="GameArea--cell" />
        <div className="GameArea--cell" />
      </div>
      <div className="GameArea--row">
        <div className="GameArea--cell" />
        <div className="GameArea--cell" />
        <div className="GameArea--cell" />
        <div className="GameArea--cell" />
        <div className="GameArea--cell" />
      </div>
      <div className="GameArea--row">
        <div className="GameArea--cell" />
        <div className="GameArea--cell" />
        <div className="GameArea--cell" />
        <div className="GameArea--cell" />
        <div className="GameArea--cell" />
      </div>
      <div className="GameArea--row">
        <div className="GameArea--cell" />
        <div className="GameArea--cell" />
        <div className="GameArea--cell" />
        <div className="GameArea--cell" />
        <div className="GameArea--cell" />
      </div>
    </div>
  );
}

// Board.propTypes = {
//   cellsNumber: PropTypes.number.isRequired,
// };

// == Export
export default Board;
