import { connect } from 'react-redux';

import HelpPage from './component';

const mapStateToProps = (state) => ({
  deviceId: state.user.deviceId,
});

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(HelpPage);
