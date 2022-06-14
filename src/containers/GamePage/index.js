import { connect } from 'react-redux';

import GamePage from './component';

const mapStateToProps = (state) => ({
  curStage: state.game.curStage,
});

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);