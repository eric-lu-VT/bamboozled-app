import { connect } from 'react-redux';

import LandingScreen from "./component";

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated
});

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(LandingScreen);