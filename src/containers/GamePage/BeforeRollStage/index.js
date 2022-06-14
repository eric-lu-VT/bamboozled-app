import { connect } from 'react-redux';

import BeforeRollStage from './component';
import { rollDice } from '../../../store/actionCreators/gameActionCreator';

const mapStateToProps = (state) => ({
  isTurn: state.game.isTurn,
  clients: state.game.clients,
  currentPlayerId: state.game.currentPlayerId,
  gameId: state.game.gameId,
  deviceId: state.user.deviceId,
});

const mapDispatchToProps = {
  rollDice,
}

export default connect(mapStateToProps, mapDispatchToProps)(BeforeRollStage);