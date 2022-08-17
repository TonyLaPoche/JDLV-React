// == Import
// import PropTypesLib from 'prop-types';
import './styles.scss';

// == Composant
function Board() {
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

// == Export
export default Board;
