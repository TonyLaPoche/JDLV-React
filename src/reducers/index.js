import { combineReducers } from 'redux';
import interactionGameReducer from './interactionGame';
import boardGenerator from './boardGenerator';
import metaGame from './metaGame';

const rootReducer = combineReducers({
  interactionGame: interactionGameReducer,
  boardGenerator: boardGenerator,
  metaGame: metaGame,
});

export default rootReducer;
