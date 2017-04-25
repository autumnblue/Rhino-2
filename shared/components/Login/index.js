import { connect } from 'react-redux';
import Login from './Login';
import SessionActions from '../../actions/sessions';
import LoginActions from '../../actions/login';

const mapStateToProps = ({session, login}) => ({
  email: session.email,
  password: session.password,
  emailHint: login.emailHint,
  passwordHint: login.passwordHint,
  error: session.error,
});

const mapDispatchToProps = (dispatch) => ({
  validPassword: () => dispatch(LoginActions.validPassword()),
  validEmail: () => dispatch(LoginActions.validEmail()),
  onLogin: (data) => dispatch(SessionActions.login(data)),
  resetSession: () => dispatch(SessionActions.resetSession()),
  setErrorMessage: (errors) => dispatch(SessionActions.setErrorMessage(errors)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
