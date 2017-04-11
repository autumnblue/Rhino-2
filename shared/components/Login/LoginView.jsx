import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import makeBem from 'bem-cx';
import RaisedButton from 'material-ui/RaisedButton';
import DashboardForm from '../Dashboard/Form/DashboardForm';
import DashboardFormCard from '../Dashboard/Form/DashboardFormCard';
import DashboardFormCardAction from '../Dashboard/Form/DashboardFormCardAction';
import DashboardCardActionCenter from '../Dashboard/Card/DashboardCardActionCenter';
import InputField from '../Form/InputField';

const bem = makeBem('login');

const LoginView = ({
  title,
  backLink,
  email,
  password,
  emailGiveHint,
  passwordGiveHint,
  handlePasswordChange,
  handleEmailChange,
  handleRememberChange,
  handleSubmit,
  props: {
    emailHint,
    passHint,
    error
  },
  state: {
    valid,
  },

}) =>
  <DashboardForm>
    <Helmet title={title} titleTemplate="%s | DJAVAN - RSL" />
    <DashboardFormCard title="Log In" backLink={backLink}>
      <div className={bem}>
        <form onSubmit={handleSubmit}>

          <InputField
            question="email"
            error={(error || emailHint) && emailHint}
            value={email}
            hint="email@example.com"
            help={emailHint}
            icon="email"
            onChange={handleEmailChange}
            onBlur={handleEmailChange}
            valid={valid}
            autoFocus
          />

          <InputField
            question="password"
            error={(error || passHint) && passHint}
            value={password}
            hint="Password"
            help={passHint}
            icon="lock"
            onChange={handlePasswordChange}
            onBlur={handlePasswordChange}
          />

          <DashboardFormCardAction>
            <DashboardCardActionCenter>
              <RaisedButton primary label="Login" onTouchTap={handleSubmit} />
            </DashboardCardActionCenter>
          </DashboardFormCardAction>

          <div className={bem.el('bottom')}>
            <InputField question="rememberMe" label="Remember me" onChange={handleRememberChange} />
          </div>

        </form>
      </div>
    </DashboardFormCard>
  </DashboardForm>;


LoginView.propTypes = {
  title: PropTypes.string.isRequired,
  backLink: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  // handleEmailChange: PropTypes.func.isRequired,
  // handlePasswordChange: PropTypes.func.isRequired,
  emailGiveHint: PropTypes.func.isRequired,
  passwordGiveHint: PropTypes.func.isRequired,
  handleRememberChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  props: PropTypes.shape({
    login: PropTypes.shape({
      emailHint: PropTypes.string.isRequired,
      passHint: PropTypes.string.isRequired,
      error: PropTypes.string,
    }),
  }),
  state: PropTypes.shape({
    valid: PropTypes.bool.isRequired,
  }),
};

export default LoginView;
