import { combineReducers } from 'redux';

import charactersReducer from './character.reducer';

export default combineReducers({
  characters: charactersReducer,
});
