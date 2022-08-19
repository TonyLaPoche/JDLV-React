// == Import
import PropTypesLib from 'prop-types';
import './styles.scss';

// == Composant
function NavBar() {
  return (
    <div className="navBar__container">
      <ul>
        <li><a href="#">Jeu</a></li>
        <li><a href="#">Règles</a></li>
        <li><a href="#">A propos</a></li>
      </ul>
    </div>
  );
}

// == Export
export default NavBar;
