// == Import
import AppHeader from '../AppHeader';
import ControlePanel from '../ControlePanel';
import Game from '../Game';
import './styles.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <AppHeader />
      <ControlePanel />
      <Game />
    </div>
  );
}

// == Export
export default App;
