import { connect } from 'react-redux';

import AcceptStage from './component';

const mapStateToProps = (state) => ({
  isTurn: state.game.isTurn,
  clients: state.game.clients,
  prevPlayerId: state.game.prevPlayerId,
  currentPlayerId: state.game.currentPlayerId,
  reportedDice1: state.game.reportedDice1,
  reportedDice2: state.game.reportedDice2,
});

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(AcceptStage);