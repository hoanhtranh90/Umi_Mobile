import { loginAction } from '../../redux/action/auth';
import SignInScreen from './SignInScreen';
import connect from 'react-redux'
const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
  loginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);