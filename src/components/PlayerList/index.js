import { connect } from 'react-redux';

import PlayerList from './component';

const mapStateToProps = (state) => ({
  clients: state.game.clients,
});

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);