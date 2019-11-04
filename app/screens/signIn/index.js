import { connect } from 'react-redux';

import SignInScreen from './SignInScreen';
import { signInUser } from '../../actions/signIn'

const mapDispatchToProps = dispatch => ({
    signInUser: (email, password) => {
        dispatch(signInUser({email, password}))
    }
});

export default connect(
    null,
    mapDispatchToProps
)(SignInScreen)
