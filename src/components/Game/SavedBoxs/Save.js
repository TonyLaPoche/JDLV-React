// == Import
import { faPencil, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import PropTypesLib from 'prop-types';

// == Composant
function Save({ savedName }) {
  return (
    <div className="savedBox--item">
      <button type="button">
        <FontAwesomeIcon icon={faPlay} size="xl" />
      </button>
      <p>{savedName}</p>
      <button type="button">
        <FontAwesomeIcon icon={faPencil} size="xl" />
      </button>
    </div>
  );
}

// == Export
export default Save;
