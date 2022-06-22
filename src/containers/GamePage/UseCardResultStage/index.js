import { connect } from 'react-redux';

import UseCardResultStage from './component';
import { handleOk } from '../../../store/actionCreators/gameActionCreator';

const mapStateToProps = (state) => ({
  active: state.game.active,
  clients: state.game.clients,
  prevPlayerId: state.game.prevPlayerId,
  currentPlayerId: state.game.currentPlayerId,
  curCard: state.game.curCard,
  pressedOk: state.game.pressedOk,
  gameId: state.game.gameId,
  deviceId: state.local.deviceId,
});

const mapDispatchToProps = {
  handleOk,
}

export default connect(mapStateToProps, mapDispatchToProps)(UseCardResultStage);