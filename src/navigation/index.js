import { connect } from 'react-redux';

import AppNavigator from './component';

import { connectSocket, disconnectSocket } from '../store/actionCreators/socketActionCreator';
import { initializeUser } from '../store/actionCreators/userActionCreator';
import { 
  joinGameReceive, 
  joinGameOtherReceive, 
  gameReconnectReceive,
  initGameReceive, 
  nextRoundReceive,
  rollDiceReceive,
  rollDiceOtherReceive,
  declareScoreReceive,
  declareScoreOtherReceive,
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
  rollDiceReceive,
  rollDiceOtherReceive,
  declareScoreReceive,
  declareScoreOtherReceive,
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);