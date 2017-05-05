import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Main } from '../components/buy';
import { buy, approve } from '../../../modules/air/actions';

function mapStateToProps(state) {
  return {
    market: state.air.market,
    token: state.air.tokenQuote.address,
    approve: state.air.tokenQuote.approve
  }
}
function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({
    buy,
    approve
  }, dispatch)
  return {
    onSubmit: actions.buy,
    onApprove: actions.approve
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
