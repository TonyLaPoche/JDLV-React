// == Import
// import PropTypesLib from 'prop-types'; // pas encore utile
import { useDispatch, useSelector } from 'react-redux';
import { cellToDisplay } from '../../actions/controlPanelAction';
import './styles.scss';

// == Composant
function ControlePanel() {
  const cellsNumber = useSelector((state) => state.boardGenerator.cellsNumber);
  const distpach = useDispatch();
  const handleChange = (evt) => {
    distpach(cellToDisplay(evt.target.value));
  };
  const handleClick = (evt) => {
    console.log(evt.target.name);
  };
  return (
    <div className="controlePanel__container">
      <div className="controlePanel__container--box">
        <h2 className="controlePanel__container--title">Règles</h2>
        <ul>
          <li>
            Si une cellule a exactement trois voisines vivantes,
            elle est vivante à l’étape suivante.
          </li>
          <br />
          <li>
            Si une cellule a strictement moins de deux
            ou strictement plus de trois voisines vivantes,
            elle est morte à l’étape suivante.
          </li>
        </ul>
      </div>
      <div className="controlePanel__container--box">
        <h2 className="controlePanel__container--title">Commande</h2>
        <ul>
          <li>
            Cliquer sur une cellules afin de la colorier ou effacer
          </li>
          <br />
          <li>
            Reset rend le tableau vierge.
          </li>
          <br />
          <li>
            Aléatoire remplit le tableau de façon random.
          </li>
          <br />
          <li>
            Cellules à générer, merci de choisir dans un premier temps un nombre impair.
          </li>
        </ul>
      </div>
      <div className="controlePanel__container--box">
        <h2 className="controlePanel__container--title">Panneau de controle</h2>
        <button type="button" className="controlePanel__container--button" name="run" onClick={handleClick}> Lancer </button>
        <button type="button" className="controlePanel__container--button" name="reset" onClick={handleClick}> Reset </button>
        <button type="button" className="controlePanel__container--button" name="random" onClick={handleClick}> Aléatoire </button>
        <input
          type="number"
          name="cellsNumber"
          className="controlePanel__container--input"
          placeholder="Cellules à générer"
          value={cellsNumber}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

// == Export
export default ControlePanel;
