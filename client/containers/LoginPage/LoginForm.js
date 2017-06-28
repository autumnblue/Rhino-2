import { reduxForm, Field } from 'redux-form';
import { compose, pure, withHandlers } from 'recompose';
import RaisedButton from 'material-ui/RaisedButton';
import makeBem from 'bem-cx';
import { connect } from 'react-redux';

import {
  DashboardFormCardAction,
  DashboardCardActionCenter
} from 'client/components';

const reduxFormEnhancer = reduxForm({
  pure: true,
  form: 'loginForm',
});

const onSubmitEnhancer = withHandlers({
    onSubmit: ({ handleSubmit, onSubmit }) => handleSubmit(onSubmit),
});

const enhance = compose(
  reduxFormEnhancer,
  onSubmitEnhancer,
  pure
);

const bem = makeBem('login');

const LoginForm = ({
  onSubmit
}) => (
  <form onSubmit={onSubmit}>
    <Field name="username" component="input" type="text" placeholder="email@example.com" />
    <br />
    <Field name="password" component="input" type="password" placeholder="Password" />

    <DashboardFormCardAction>
      <DashboardCardActionCenter>
        <RaisedButton primary label="Login" onTouchTap={onSubmit}  />
      </DashboardCardActionCenter>
    </DashboardFormCardAction>

    <label className={bem.el('bottom')}>
      <input type="checkbox" name="rememberMe" />
      Remember me
    </label>

  </form>
)

export default enhance(LoginForm)
