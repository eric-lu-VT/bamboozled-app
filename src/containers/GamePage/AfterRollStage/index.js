import { connect } from 'react-redux';

import AfterRollStage from './component';
import { declareScore } from '../../../store/actionCreators/gameActionCreator';

const mapStateToProps = (state) => ({
  isTurn: state.game.isTurn,
  clients: state.game.clients,
  currentPlayerId: state.game.currentPlayerId,
  dice1: state.game.dice1,
  dice2: state.game.dice2,
  gameId: state.game.gameId,
  deviceId: state.local.deviceId,
});

const mapDispatchToProps = {
  declareScore,
}

export default connect(mapStateToProps, mapDispatchToProps)(AfterRollStage);