import { connect } from 'react-redux';

import WaitingRoomScreen from './component';
import { createGame, createGameReceive } from '../../store/actionCreators/gameActionCreator';

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

const mapDispatchToProps = {
  createGame,
  createGameReceive
}

export default connect(mapStateToProps, mapDispatchToProps)(WaitingRoomScreen);