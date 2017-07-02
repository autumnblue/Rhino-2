import { string, func } from 'prop-types';
import Helmet from 'react-helmet';
import BodyClassName from 'react-body-classname';

import { Page, PageContent } from 'src/components';

import LoginForm from './LoginForm';
import enhance from './enhance';


const propTypes = {
  onSubmit: func.isRequired,
  backLink: string,
};

// the following styling will be reviewed
const LoginPage = ({
  title,
  onSubmit,
  backLink,
}) => (
  <Page className="vertical-align text-center">
    <Helmet title={title} titleTemplate="%s | DJAVAN - RSL" />
    <BodyClassName className="page-login layout-full page-dark" />
    <PageContent className="vertical-align-middle">
      <div className="brand">
        <h2 className="brand-text">Rhino Security Labs</h2>
      </div>
      <LoginForm
        onSubmit={onSubmit}
      />
    </PageContent>
  </Page>
);


LoginPage.propTypes = propTypes;

export default enhance(LoginPage);
