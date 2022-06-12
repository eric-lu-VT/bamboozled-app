import { connect } from 'react-redux';

import Landing from './component';
import { connectSocket, disconnectSocket } from '../../store/actionCreators/socketActionCreator';
import { createGame, createGameReceive } from '../../store/actionCreators/gameActionCreator';

const mapStateToProps = (state) => ({
  deviceId: state.user.deviceId,
  username: state.user.username
});

const mapDispatchToProps = {
  createGame,
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);