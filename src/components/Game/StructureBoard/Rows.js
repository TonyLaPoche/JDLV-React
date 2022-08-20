// == Import
// import PropTypesLib from 'prop-types';
import Cells from './Cells';

// == Composant
function Rows({ cellsNumber, id }) {
  const cells = [];
  for (let i = 0; i < cellsNumber; i++) {
    cells.push(<Cells key={`${id}${i}`.slice(0)} rowPos={id} cellPos={i} />);
  }
  return (
    <div className="GameArea--row">
      {cells}
    </div>
  );
}

// == Export
export default Rows;
