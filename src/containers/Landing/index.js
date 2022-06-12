import { connect } from 'react-redux';

import Landing from './component';
import { createGame, joinGame } from '../../store/actionCreators/gameActionCreator';

const mapStateToProps = (state) => ({
  deviceId: state.user.deviceId,
  username: state.user.username
});

const mapDispatchToProps = {
  createGame,
  joinGame
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);