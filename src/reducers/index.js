import { combineReducers } from 'redux';
import interactionGameReducer from './interactionGame';
import boardGenerator from './boardGenerator';

const rootReducer = combineReducers({
  interactionGame: interactionGameReducer,
  boardGenerator: boardGenerator,
});

export default rootReducer;
