import { combineReducers } from 'redux';

import AuthReducer from './authReducer';
import SocketReducer from './socketReducer';
import LocalReducer from './localReducer';
import GameReducer from './gameReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  local: LocalReducer,
  sock: SocketReducer,
  game: GameReducer
});

export default rootReducer;