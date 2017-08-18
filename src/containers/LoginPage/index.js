import { func, object } from 'prop-types';
import Helmet from 'react-helmet';
import BodyClassName from 'react-body-classname';

import { Page, PageContent } from 'src/components';

import LoginForm from './LoginForm';
import enhance from './enhance';


const propTypes = {
  validationErrors: object,

  onSubmit: func.isRequired,
};

// the following styling will be reviewed
const LoginPage = ({
  validationErrors,

  onSubmit,
}) => (
  <Page className="vertical-align text-center">
    <Helmet title="Login" titleTemplate="%s | DJAVAN - RSL" />
    <BodyClassName className="page-login layout-full page-dark" />
    <PageContent className="vertical-align-middle">
      <div className="brand">
        <h2 className="brand-text">Rhino Security Labs</h2>
      </div>
      <LoginForm
        validationErrors={validationErrors}
        onSubmit={onSubmit}
      />
    </PageContent>
  </Page>
);


LoginPage.propTypes = propTypes;

export default enhance(LoginPage);
