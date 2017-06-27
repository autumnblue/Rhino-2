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
    form: 'loginForm',
    //fields: ['email', 'password'],
    pure: true,
    destroyOnUnmount: false
    /*initialValues: {
        email: 'xxx',
        password: 'yyy',
    },*/
});

const onSubmitEnhancer = withHandlers({
    onSubmit: ({ handleSubmit, onSubmit }) => handleSubmit(onSubmit),
});

const enhance = compose(
  connect(),
  reduxFormEnhancer,
  onSubmitEnhancer,
  pure
)

const bem = makeBem('login');

const LoginForm = ({
  onSubmit
}) => (
  <form onSubmit={onSubmit}>
    <Field name="emailx" component="input" type="text" placeholder="email@example.com" />
    <br />
    <Field name="passwordx" component="input" type="password" placeholder="Password" />

    <DashboardFormCardAction>
      <DashboardCardActionCenter>
        <RaisedButton primary label="Login" onTouchTap={onSubmit} />
      </DashboardCardActionCenter>
    </DashboardFormCardAction>

    <label className={bem.el('bottom')}>
      <input type="checkbox" name="rememberMe" />
      Remember me
    </label>

  </form>
)

export default reduxFormEnhancer(LoginForm)
