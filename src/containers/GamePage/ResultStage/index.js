import { connect } from 'react-redux';

import ResultStage from './component';

const mapStateToProps = (state) => ({
  active: state.game.active,
  clients: state.game.clients,
  currentPlayerId: state.game.currentPlayerId,
  prevPlayerId: state.game.prevPlayerId,
  reportedDice1: state.game.reportedDice1,
  reportedDice2: state.game.reportedDice2,
  dice1: state.game.dice1,
  dice2: state.game.dice2,
  turnResult: state.game.turnResult,
  gameId: state.game.gameId,
  deviceId: state.user.deviceId,
});

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultStage);