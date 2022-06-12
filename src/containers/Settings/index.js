import { connect } from 'react-redux';

import Settings from './component';
import { changeUsername } from '../../store/actionCreators/userActionCreator';

const mapStateToProps = (state) => ({
  username: state.user.username
});

const mapDispatchToProps = {
  changeUsername
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);