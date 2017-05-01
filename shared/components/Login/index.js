import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import LoginComponent from './Login';
import SessionActions from '../../actions/sessions';
import LoginActions from '../../actions/login';

class Login extends Component {
  state = {
    email: null,
    password: null,
  }

  handleEmailChange = (value) => {
    this.setState({ email: value });
  }

  handlePasswordChange = (value) => {
    this.setState({ password: value });
  }

  handleRememberChange = (value) => {
    console.log(value);
  }

  handleSubmit = () => {
    const { email, password } = this.state;
    const data = { email: email, passowrd: password };
    this.props.userLoginRequest(data);
  }

  render() {
    return (
      <LoginComponent
        title="Login"
        backLink="/"
        valid={false}
        handleEmailChange={this.handleEmailChange}
        handlePasswordChange={this.handlePasswordChange}
        handleRememberChange={this.handleRememberChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

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
  userLoginRequest: (data) => dispatch(SessionActions.userLoginRequest(data)),
  resetSession: () => dispatch(SessionActions.resetSession()),
  setErrorMessage: (errors) => dispatch(SessionActions.setErrorMessage(errors)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
