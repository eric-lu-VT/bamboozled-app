import { connect } from 'react-redux';

import WaitingRoom from './component';

const mapStateToProps = (state) => ({
  gameId: state.game.gameId,
  isHost: state.game.isHost
});

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(WaitingRoom);