import { connect } from 'react-redux';

import UseCardResultStage from './component';
import { acceptAttempt } from '../../../store/actionCreators/gameActionCreator';

const mapStateToProps = (state) => ({
  isTurn: state.game.isTurn,
  clients: state.game.clients,
  prevPlayerId: state.game.prevPlayerId,
  currentPlayerId: state.game.currentPlayerId,
  reportedDice1: state.game.reportedDice1,
  reportedDice2: state.game.reportedDice2,
  gameId: state.game.gameId,
  deviceId: state.local.deviceId,
});

const mapDispatchToProps = {
  acceptAttempt,
}

export default connect(mapStateToProps, mapDispatchToProps)(UseCardResultStage);