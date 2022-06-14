import { connect } from 'react-redux';

import WaitingRoom from './component';
import { initGame } from '../../store/actionCreators/gameActionCreator';

const mapStateToProps = (state) => ({
  gameId: state.game.gameId,
  active: state.game.active,
  isHost: state.game.isHost,
  deviceId: state.user.deviceId,
});

const mapDispatchToProps = {
  initGame,
}

export default connect(mapStateToProps, mapDispatchToProps)(WaitingRoom);