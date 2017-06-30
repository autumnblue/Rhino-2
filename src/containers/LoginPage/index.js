import { string, func } from 'prop-types';
import Helmet from 'react-helmet';
import BodyClassName from 'react-body-classname';

import LoginForm from './LoginForm';
import enhance from './enhance';


const propTypes = {
  title: string.isRequired,
  onSubmit: func.isRequired,
  backLink: string,
};

// the following styling will be reviewed
const LoginPage = ({
  title,
  onSubmit,
  backLink,
}) => (
  <div className="page animsition vertical-align text-center">&gt;
    <Helmet title={title} titleTemplate="%s | DJAVAN - RSL" />
    <BodyClassName className="page-login layout-full page-dark" />
        <div className="page-content vertical-align-middle">
          <div className="brand">
            <h2 className="brand-text">Rhino Security Labs</h2>
          </div>
          <p>Sign in</p>
          <LoginForm onSubmit={onSubmit} />
        </div>
      </div>


);

/*
<div>

  <div title="Log In" backLink={backLink}>
    <div>
      <LoginForm onSubmit={onSubmit} />
    </div>
  </div>
</div>
*/

LoginPage.propTypes = propTypes;

export default enhance(LoginPage);
