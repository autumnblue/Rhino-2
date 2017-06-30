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
  <div className="form-group">
    <label className="sr-only" htmlFor="inputName">Username</label>
    <Field name="username" className="form-control" component="input" type="text" placeholder="email@example.com" />
  </div>
  <div className="form-group">
    <label className="sr-only" htmlFor="inputPassword">Password</label>
      <Field name="password" className="form-control" component="input" type="password" placeholder="Password" />
  </div>

  <button type="submit" className="btn btn-primary btn-block">Sign in</button>

  </form>
);


LoginForm.propTypes = propTypes;

export default enhance(LoginForm);
