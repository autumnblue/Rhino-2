import { string, func } from 'prop-types';
import Helmet from 'react-helmet';

import LoginForm from './LoginForm';
import enhance from './enhance';


const propTypes = {
  title: string.isRequired,
  onSubmit: func.isRequired,
  backLink: string,
};

const LoginPage = ({
  title,
  onSubmit,
  backLink,
}) => (
  <div>
    <Helmet title={title} titleTemplate="%s | DJAVAN - RSL" />
    <div title="Log In" backLink={backLink}>
      <div>
        <LoginForm onSubmit={onSubmit} />
      </div>
    </div>
  </div>
);

LoginPage.propTypes = propTypes;

export default enhance(LoginPage);
