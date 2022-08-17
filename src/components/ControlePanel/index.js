// == Import
// import PropTypesLib from 'prop-types'; // pas encore utile
import './styles.scss';

// == Composant
function ControlePanel() {
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
        <p>jouer au jeu de la vie</p>
        <p>s'amuser, tester des paternes etc...</p>
      </div>
      <div className="controlePanel__container--box">
        <h2 className="controlePanel__container--title">Panneau de controle</h2>
        <button type="button" className="controlePanel__container--button"> Lancer </button>
        <button type="button" className="controlePanel__container--button"> Reset </button>
        <button type="button" className="controlePanel__container--button"> Aléatoire </button>
        <input
          type="number"
          name="cellsNumber"
          className="controlePanel__container--input"
          placeholder="Cellules à générer"
        />
      </div>
    </div>
  );
}

// == Export
export default ControlePanel;
