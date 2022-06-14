import { connect } from 'react-redux';

import BeforeRollStage from './component';

const mapStateToProps = (state) => ({
  isTurn: state.game.isTurn,
  clients: state.game.clients,
  currentPlayerId: state.game.currentPlayerId,
});

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(BeforeRollStage);