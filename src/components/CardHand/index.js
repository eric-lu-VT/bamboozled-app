import { connect } from 'react-redux';

import CardHand from './component';

import { changeCurCardSelected } from '../../store/actionCreators/localActionCreator';

const mapStateToProps = (state) => ({
  curStage: state.game.curStage,
  beforeActionCards: state.game.beforeActionCards,
  afterActionCards: state.game.afterActionCards,
  curCardSelected: state.local.curCardSelected,
});

const mapDispatchToProps = {
  changeCurCardSelected,
}

export default connect(mapStateToProps, mapDispatchToProps)(CardHand);
