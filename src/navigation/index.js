import { connect } from 'react-redux';

import AppNavigator from './component';

import { connectSocket, disconnectSocket } from '../store/actionCreators/socketActionCreator';
import { initializeUser } from '../store/actionCreators/userActionCreator';
import { createGame, createGameReceive } from '../store/actionCreators/gameActionCreator';

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

const mapDispatchToProps = {
  connectSocket,
  disconnectSocket,
  initializeUser,
  createGame,
  createGameReceive
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);