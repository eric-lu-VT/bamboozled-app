import { connect } from 'react-redux';

import HelpPage from './component';

const mapStateToProps = (state) => ({
  deviceId: state.local.deviceId,
});

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(HelpPage);
