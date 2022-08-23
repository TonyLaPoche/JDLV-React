// == Import
import {
  faPencil, faPlay, faSkullCrossbones, faDownload,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
// import { changeInputNameSave, insertNewArrayOnSave, setLastPatern, setModify } from '../../../actions/controlPanelAction';
// import PropTypesLib from 'prop-types';

// == Composant
function Saves({
  savedName, isModify, id, slot,
}) {
  const dispatch = useDispatch();
  const handleRemove = () => {};
  const handlePlay = () => {
    // dispatch(setLastPatern(slot));
  };
  return (
    <div className="savedBox--item">
      <button type="button" onClick={handlePlay}>
        <FontAwesomeIcon icon={faPlay} size="xl" color="black" />
      </button>
      <p>{savedName}</p>
      <button type="button" onClick={handleRemove}>
        <FontAwesomeIcon icon={faSkullCrossbones} size="xl" />
      </button>
    </div>
  );
}

// == Export
export default Saves;
