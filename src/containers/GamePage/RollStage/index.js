import { connect } from 'react-redux';

import RollStage from './component';

const mapStateToProps = (state) => ({
  isTurn: state.game.isTurn,
  clients: state.game.clients,
  currentPlayerId: state.game.currentPlayerId,
  dice1: state.game.dice1,
  dice2: state.game.dice2,
});

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(RollStage);