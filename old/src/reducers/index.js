import { combineReducers } from 'redux';
import interactionGameReducer from './interactionGame';
import boardGenerator from './boardGenerator';
import savedGame from './savedGame';

const rootReducer = combineReducers({
  interactionGame: interactionGameReducer,
  boardGenerator: boardGenerator,
  savedGame: savedGame,
});

export default rootReducer;
