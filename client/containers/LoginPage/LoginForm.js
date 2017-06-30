import { reduxForm, Field } from 'redux-form';
import { compose, pure, withHandlers } from 'recompose';
import { func } from 'prop-types';


const propTypes = {
  onSubmit: func.isRequired,
};

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
  pure,
);


const LoginForm = ({
  onSubmit,
}) => (
  <form onSubmit={onSubmit}>
    <Field name="username" component="input" type="text" placeholder="email@example.com" />
    <br />
    <Field name="password" component="input" type="password" placeholder="Password" />

    <button>Log in</button>

    <label>
      <input type="checkbox" name="rememberMe" />
      Remember me
    </label>

  </form>
);

LoginForm.propTypes = propTypes;

export default enhance(LoginForm);
