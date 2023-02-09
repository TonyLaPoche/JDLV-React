// == Import
// import PropTypesLib from 'prop-types';

import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInputNameSave, insertNewArrayOnSave, showSaveLocal } from '../../../actions/controlPanelAction';

// == Composant
function GeneratorSave({ id, saveName }) {
  const dispatch = useDispatch();
  const currentPattern = useSelector((state) => state.boardGenerator.areaGame);
  const saved = useSelector((state) => state.savedGame.saved);

  useEffect(() => {
    const data = window.localStorage.getItem('SAVES_LIST');
    if (data !== null) {
      const datas = JSON.parse(data);
      const ids = datas.map((saves) => saves.id);
      const result = Math.max(...ids);
      dispatch(showSaveLocal(datas, result >= 0 ? result : 0));
    }
  }, []);

  const handleSave = () => {
    useEffect(() => {
    }, [currentPattern]);
    // console.log('ce patern à une taille de : ', currentPattern.length);
    dispatch(insertNewArrayOnSave(currentPattern, currentPattern.length));
  };

  useEffect(() => {
    window.localStorage.setItem('SAVES_LIST', JSON.stringify(saved));
  }, [saved]);

  const handleInput = (e) => {
    dispatch(changeInputNameSave(e.target.value));
    // console.log('create input');
  };

  return (
    <>
      <h2>Sauvegarder le patern courant</h2>
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
    </>
  );
}

// == Export
export default GeneratorSave;
