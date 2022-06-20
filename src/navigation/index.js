import { connect } from 'react-redux';

import AppNavigator from './component';

import { connectSocket, disconnectSocket } from '../store/actionCreators/socketActionCreator';
import { initializeUser } from '../store/actionCreators/localActionCreator';
import { 
  joinGameReceive, 
  joinGameOtherReceive, 
  gameReconnectReceive,
  initGameReceive, 
  nextRoundReceive,
  useCardReceive,
  rollDiceReceive,
  rollDiceOtherReceive,
  declareScoreReceive,
  declareScoreOtherReceive,
  acceptAttemptReceive,
} from '../store/actionCreators/gameActionCreator';

const mapStateToProps = (state) => ({
  gameId: state.game.gameId,
});

const mapDispatchToProps = {
  connectSocket,
  disconnectSocket,
  initializeUser,
  joinGameReceive,
  joinGameOtherReceive,
  gameReconnectReceive,
  initGameReceive,
  nextRoundReceive,
  useCardReceive,
  rollDiceReceive,
  rollDiceOtherReceive,
  declareScoreReceive,
  declareScoreOtherReceive,
  acceptAttemptReceive,
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);