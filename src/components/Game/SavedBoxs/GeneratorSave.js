// == Import
// import PropTypesLib from 'prop-types';

import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { changeInputNameSave, insertNewArrayOnSave } from '../../../actions/controlPanelAction';

// == Composant
function GeneratorSave({ id, saveName }) {
  const dispatch = useDispatch();
  const currentPattern = useSelector((state) => state.boardGenerator.areaGame);
  // const savedList = useSelector((state) => state.savedGame.saved);
  // console.log(savedList);
  const handleSave = () => {
    console.log('je souhaite save la save: ', id);
    console.log('je souhaite save ce patern: ', currentPattern);
    console.log('ce patern à une taille de : ', currentPattern.length);
    dispatch(insertNewArrayOnSave(currentPattern, currentPattern.length));
  };
  const handleInput = (e) => {
    dispatch(changeInputNameSave(e.target.value));
    console.log('create input');
  };
  return (
    <div className="savedBox--item">

      <button type="button" onClick={handleSave}>
        <FontAwesomeIcon icon={faDownload} size="xl" color={saveName !== '' ? 'green' : 'red'} />
      </button>

      <input
        type="text"
        name="slot$"
        value={saveName}
        onChange={handleInput}
      />

    </div>
  );
}

// == Export
export default GeneratorSave;
