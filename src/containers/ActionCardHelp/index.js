import { connect } from 'react-redux';

import ActionCardHelp from './component';

const mapStateToProps = (state) => ({
  deviceId: state.local.deviceId,
});

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionCardHelp);
