import { connect } from 'react-redux';

import ResultStage from './component';

const mapStateToProps = (state) => ({
  isTurn: state.game.isTurn,
  dice1: state.game.dice1,
  dice2: state.game.dice2,
  turnResult: state.game.turnResult,
});

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultStage);