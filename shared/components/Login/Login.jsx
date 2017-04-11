import React, { Component, PropTypes } from 'react';
import isEmail from 'validator/lib/isEmail';
import LoginView from './LoginView';


export default class Login extends Component {

  static propTypes = {
    email: PropTypes.string,
    // emailGiveHint: PropTypes.func,
    // passwordGiveHint: PropTypes.func,
    onLogin: PropTypes.func,
    validPassword: PropTypes.func,
    resetEmailPassword: PropTypes.func,
    resetSession: PropTypes.func,
    setErrorMessage: PropTypes.func,
    validEmail: PropTypes.func,
    login: PropTypes.shape({
      emailHint: PropTypes.string,
      passHint: PropTypes.string,
      error: PropTypes.string,
    }),
  }

  state = {
    valid: false,
  }


  componentWillMount() {
  }

  componentWillUnmount() {
    // this.props.resetEmailPassword();
    this.props.resetSession();
  }

  title = 'Log in'
  backLink = '/'
  password = ''

  checkValidEmail = (email) => (isEmail(email))

  handleEmailChange = (response) => {
    if (response.value) {
      this.email = response.value.trim().toLowerCase();
      this.validateField();
    }
  }

  validateField = async () => {
    // if (!this.checkValidEmail(this.email)) {
    //   await this.props.emailGiveHint();
    //   this.props.setErrorMessage({ emailInvalid: this.props.form.emailHint });
    //   this.setState({
    //     valid: false,
    //   });
    // } else {
    //   this.props.validEmail();
    //   this.setState({
    //     valid: true,
    //   });
    // }
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const data = { email: this.email, password: this.password };
    // const emailCheck = this.checkValidEmail(data.email);
    // const passwordCheck = this.checkPassword(data.password);

    // if (this.state.valid) {
    //   this.props.checkUser(this.email);
    // } else {
    //   await this.props.emailHint();
    //   this.props.setErrorMessage({ emailInvalid: this.props.emailHint });
    // }

    // if (emailCheck && passwordCheck) {
    //   this.props.validPassword();
      this.props.onLogin(data);
    // } else {
    //   await this.props.passwordGiveHint();
    //   this.props.setErrorMessage({ passwordIncorrect: this.props.error });
    // }
  }

  checkPassword = (password) => (password.length >= 8);

  handlePasswordChange = (response) => {
    this.password = response.value.trim();
  }

  handleRememberChange = (response) => {
    // console.log('handleRememberChange', response);
  }

  render() {
    return <LoginView {...this} />;
  }

}


Login.contextTypes = {
  router: PropTypes.object.isRequired,
};
