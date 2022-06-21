import { connect } from 'react-redux';

import BeforeRollStage from './component';
import { rollDice, useCard } from '../../../store/actionCreators/gameActionCreator';
import { changeCurCardSelected } from '../../../store/actionCreators/localActionCreator';

const mapStateToProps = (state) => ({
  isTurn: state.game.isTurn,
  clients: state.game.clients,
  currentPlayerId: state.game.currentPlayerId,
  gameId: state.game.gameId,
  beforeActionCards: state.game.beforeActionCards,
  deviceId: state.local.deviceId,
  curCardSelected: state.local.curCardSelected,
});

const mapDispatchToProps = {
  rollDice,
  useCard,
  changeCurCardSelected,
}

export default connect(mapStateToProps, mapDispatchToProps)(BeforeRollStage);