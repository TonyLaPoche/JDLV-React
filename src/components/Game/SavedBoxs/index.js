// == Import
// import PropTypesLib from 'prop-types';

import {
  faArrowRotateLeft, faDownload, faPencil, faPlay, faSkullCrossbones,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { setLastPatern } from '../../../actions/controlPanelAction';
import Save from './Save';

// == Composant
function SavedBoxs() {
  const lastpaternPlayed = useSelector((state) => state.savedGame.initialGame);
  const saves = useSelector((state) => state.savedGame.saved);
  saves.map((item) => console.log({...item}));
  const dispatch = useDispatch();
  const handlerReplayLasted = () => {
    dispatch(setLastPatern(lastpaternPlayed));
  };
  return (
    <div className="GameArea__container--savedBox">
      <h2>Patern Sauvegardé. <br />(feature en cours) </h2>
      <div className="savedBox--item">
        <button type="button" onClick={handlerReplayLasted}>
          <FontAwesomeIcon icon={faArrowRotateLeft} size="xl" />
          <p>
            Rejouer le dernier patern
          </p>
        </button>
      </div>
      {saves.map((item) => <Save key={item.id} {...item} />)}
      {/*  <div className="savedBox--item">
        <button type="button">
          <FontAwesomeIcon icon={faDownload} size="xl" />
        </button>
        <p>Sauvegarde n°1</p>
        <button type="button">
          <FontAwesomeIcon icon={faPencil} size="xl" />
        </button>
      </div>
      <div className="savedBox--item">
        <button type="button">
          <FontAwesomeIcon icon={faDownload} size="xl" />
        </button>
        <input name="slot2" value="Sauvegarde n°2" />
        <button type="button">
          <FontAwesomeIcon icon={faPencil} size="xl" color="green"/>
        </button>
      </div>
      <div className="savedBox--item">
        <button type="button">
          <FontAwesomeIcon icon={faPlay} size="xl" />
        </button>
        <p>Sauvegarde n°1</p>
        <button type="button">
          <FontAwesomeIcon icon={faPencil} size="xl" />
        </button>
        <button type="button">
          <FontAwesomeIcon icon={faSkullCrossbones} size="xl" />
        </button>
      </div> */}
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
