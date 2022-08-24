/* eslint-disable max-len */
// == Import
import {
  faPencil, faPlay, faSkullCrossbones, faDownload, faShare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSave, setDelayLoop, setSaveOnScreen } from '../../../actions/controlPanelAction';
// import { changeInputNameSave, insertNewArrayOnSave, setLastPatern, setModify } from '../../../actions/controlPanelAction';
// import PropTypesLib from 'prop-types';

// == Composant
function Saves({
  saveName, sizePatern, valuePatern, id,
}) {
  const dispatch = useDispatch();
  const saveList = useSelector((state) => state.savedGame.saved);
  const handleRemove = () => {
    // console.log('liste des saves', saveList);
    // console.log('save ciblé => ', saveList[id]);
    // console.log('liste des saves sans celle ciblé', saveList.filter((save) => save !== saveList[id]));
    // console.log('liste des saves moins la deuxieme', saveList);
    const newSaveList = saveList.filter((save) => save !== saveList[id]);
    dispatch(deleteSave(newSaveList));
  };
  const handlePlay = () => {
    dispatch(setDelayLoop(0));
    dispatch(setSaveOnScreen(valuePatern, sizePatern));
  };
  return (
    <div className="savedBox--item">
      <button type="button" name={saveName} onClick={handlePlay}>
        <FontAwesomeIcon icon={faPlay} size="xl" color="black" />
      </button>
      <p>{saveName}</p>

      <div>
        <button type="button" onClick={handleRemove}>
          <FontAwesomeIcon icon={faSkullCrossbones} size="xl" />
        </button>
        <button
          type="button"
          onClick={() => {
            console.log('feature prochaine');
          }}
        >
          <FontAwesomeIcon icon={faShare} size="xl" />
        </button>
      </div>
    </div>
  );
}

// == Export
export default Saves;
