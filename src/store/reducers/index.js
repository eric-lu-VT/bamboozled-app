import { combineReducers } from 'redux';

import AuthReducer from './authReducer';
import SocketReducer from './socketReducer';
import GameReducer from './gameReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  sock: SocketReducer,
  game: GameReducer
});

export default rootReducer;