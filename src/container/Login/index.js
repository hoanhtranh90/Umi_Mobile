import {connect} from 'react-redux';
import Login from '../../screens/Login';
import {loginAction} from '../../redux/actions/authen';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  loginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
