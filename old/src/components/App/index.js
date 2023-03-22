// == Import
import AppHeader from '../AppHeader';
import Game from '../Game';
// import './styles.scss';
import '../../style.css';
// == Composant
function App() {
  return (
    <div className="app p-2">
      <AppHeader />
      <Game />
    </div>
  );
}

// == Export
export default App;
