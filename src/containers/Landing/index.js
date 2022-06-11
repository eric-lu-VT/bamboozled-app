import { connect } from 'react-redux';

import LandingScreen from './component';
import { connectSocket } from '../../store/actionCreators/socketActionCreator';

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated
});

const mapDispatchToProps = {
  connectSocket,
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingScreen);