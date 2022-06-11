import { connect } from 'react-redux';

import LandingScreen from './component';
import { connectSocket, disconnectSocket } from '../../store/actionCreators/socketActionCreator';
import { createGame, createGameReceive } from '../../store/actionCreators/gameActionCreator';

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

const mapDispatchToProps = {
  connectSocket,
  disconnectSocket,
  createGame,
  createGameReceive
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingScreen);