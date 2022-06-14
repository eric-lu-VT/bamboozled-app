import { connect } from 'react-redux';

import AcceptStage from './component';

const mapStateToProps = (state) => ({
  isTurn: state.game.isTurn,
  clients: state.game.clients,
  prevPlayerId: state.game.prevPlayerId,
  currentPlayerId: state.game.currentPlayerId,
  reportedRoll: state.game.reportedRoll,
});

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(AcceptStage);