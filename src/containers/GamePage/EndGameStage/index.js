import { connect } from 'react-redux';

import EndGameStage from './component';

const mapStateToProps = (state) => ({
  gameId: state.game.gameId,
  deviceId: state.user.deviceId,
});

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(EndGameStage);
