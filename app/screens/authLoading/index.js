import { connect } from 'react-redux';

import AuthLoadingScreen from './AuthLoadingScreen';
import { authUser } from '../../actions/auth';

const mapDispatchToProps = dispatch => ({
    authUser: () => {
        dispatch(authUser())
    }
});

export default connect(
    null,
    mapDispatchToProps
)(AuthLoadingScreen)
