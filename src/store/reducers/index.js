import { combineReducers } from 'redux';

import AuthReducer from './authReducer';
import SocketReducer from './socketReducer';
import UserReducer from './userReducer';
import GameReducer from './gameReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
  sock: SocketReducer,
  game: GameReducer
});

export default rootReducer;