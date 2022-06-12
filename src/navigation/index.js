import { connect } from 'react-redux';

import AppNavigator from './component';

import { connectSocket, disconnectSocket } from '../store/actionCreators/socketActionCreator';
import { initializeUser } from '../store/actionCreators/userActionCreator';
import { createGameReceive, joinGameReceive } from '../store/actionCreators/gameActionCreator';

const mapStateToProps = (state) => ({
 
});

const mapDispatchToProps = {
  connectSocket,
  disconnectSocket,
  initializeUser,
  createGameReceive,
  joinGameReceive
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);