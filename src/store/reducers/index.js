import { combineReducers } from 'redux';

import AuthReducer from './authReducer';
import SocketReducer from './socketReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  sock: SocketReducer
});

export default rootReducer;