// == Import
// import PropTypesLib from 'prop-types'; // pas encore utile
import NavBar from './navBar';
import reactLogo from './react-logo.svg';
import './styles.scss';

// == Composant
function AppHeader() {
  return (
    <header className="header__container">
      <img className="header__container--logo" src={reactLogo} alt="react logo" />
      <div className="header__container--title">
        <h1>Jeu de la vie</h1>
        <small> ~En React~ </small>
      </div>
      <NavBar />
    </header>
  );
}

// == Export
export default AppHeader;
