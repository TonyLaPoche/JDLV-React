import { combineReducers } from 'redux';
import interactionGameReducer from './interactionGame';

const rootReducer = combineReducers({
  interactionGame: interactionGameReducer,
});

export default rootReducer;
