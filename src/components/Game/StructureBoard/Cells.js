/* eslint-disable no-unused-expressions */
// == Import
// import PropTypesLib from 'prop-types';

// == Composant
function Cells({ areaGameCell }) {
  const cellClass = areaGameCell !== 0 ? 'GameArea--cell' : 'GameArea--cell alive';
  const handleClick = (evt) => {
    evt.target.className !== 'GameArea--cell alive'
      ? evt.target.className = 'GameArea--cell alive'
      : evt.target.className = 'GameArea--cell';
    console.log(evt.target.className);
  };
  return (
    <div className={cellClass} onClick={handleClick} />
  );
}

// == Export
export default Cells;
