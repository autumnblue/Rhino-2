import { pure } from 'recompose';
import { Link } from 'react-router';
import { Col, Row } from 'reactstrap';

import { Page, PageHeader, PageContent, Button } from 'src/components';

import css from './style.css';


const breadcrumbs = [{
  label: 'Settings',
}];

const categories = [{
  label: 'Tools',
  url: '/tools',
}, {
  label: 'Site Variables',
}, {
  label: 'Assets',
}, {
  label: 'Issuers',
}, {
  label: 'Services',
}, {
  label: 'Shortcodes',
}, {
  label: 'Snippets',
}, {
  label: 'Site Settings',
}];

const enhance = pure;

const SettingsPage = () => (
  <Page>
    <PageHeader breadcrumbs={breadcrumbs} />
    <PageContent>
      <Row>
        {categories.map(({ label, url }) => (
          <Col md="3" key={label + url} className={css.category}>
            <Button
              tag={Link}
              to={url}
              color="primary"
              disabled={!url}
              outline
              block
            >{label}</Button>
          </Col>
        ))}
      </Row>
    </PageContent>
  </Page>
);


export default enhance(SettingsPage);
