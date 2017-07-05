import { reduxForm, Field } from 'redux-form';
import { compose, pure, withHandlers } from 'recompose';
import { func } from 'prop-types';
import { FormGroup, Form } from 'reactstrap';
import { ReduxInput, Button } from 'src/components';

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
  <Form onSubmit={onSubmit}>
    <FormGroup>
      <Field
        name="username"
        component={ReduxInput}
        type="text"
        placeholder="email@example.com"
      />
    </FormGroup>
    <FormGroup>
      <Field
        name="password"
        component={ReduxInput}
        type="password"
        placeholder="Password"
      />
    </FormGroup>

    <Button color="primary" type="submit" block>Sign in</Button>
  </Form>
);


LoginForm.propTypes = propTypes;

export default enhance(LoginForm);
