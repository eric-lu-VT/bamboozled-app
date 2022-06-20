import { connect } from 'react-redux';

import Settings from './component';
import { changeUsername } from '../../store/actionCreators/localActionCreator';

const mapStateToProps = (state) => ({
  username: state.local.username
});

const mapDispatchToProps = {
  changeUsername
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);