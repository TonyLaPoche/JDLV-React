// == Import
// import PropTypesLib from 'prop-types';

import {
  faArrowRotateLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { setLastPatern } from '../../../actions/controlPanelAction';
import GeneratorSave from './GeneratorSave';
import Saves from './Saves';

// == Composant
function SavedBoxs() {
  const lastpaternPlayed = useSelector((state) => state.savedGame.initialGame);
  const saves = useSelector((state) => state.savedGame.saved);
  const savePatern = useSelector((state) => state.savedGame.savePatern);
  // saves.map((item) => console.log({...item}));
  const dispatch = useDispatch();
  const handlerReplayLasted = () => {
    dispatch(setLastPatern(lastpaternPlayed));
  };
  return (
    <div className="GameArea__container--savedBox">
      <h2>Patern Sauvegardé. <br />(feature en cours) </h2>
      <div className="savedBox--item">
        <button type="button" className="fullBtn" onClick={handlerReplayLasted}>
          <FontAwesomeIcon icon={faArrowRotateLeft} size="xl" />
          <p>
            Rejouer le dernier patern
          </p>
        </button>
      </div>
      <GeneratorSave key="generateurSave" {...savePatern} />
      {saves.map((item) => <Saves key={item.id} {...item} />)}
    </div>
  );
}
/*
  Reload   <FontAwesomeIcon icon={faArrowRotateLeft} size="xl" />
  Play     <FontAwesomeIcon icon={faCirclePlay} size="xl" />
  Save     <FontAwesomeIcon icon={faDownload} size="xl" />
  Delete   <FontAwesomeIcon icon={faSkullCrossbones} size="xl" />
*/
// == Export
export default SavedBoxs;
