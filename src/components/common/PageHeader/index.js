import { string, node } from 'prop-types';
import { Link } from 'react-router';
import { compose, pure, defaultProps } from 'recompose';

import { breadcrumbsType } from 'src/prop-types';

import css from './style.css';

const propTypes = {
  children: node,
  breadcrumbs: breadcrumbsType.isRequired,
  className: string,
};

export const getDefaultPropsEnhancer = defaultProps({
  breadcrumbs: [],
});

export const enhance = compose(
  getDefaultPropsEnhancer,
  pure,
);

export const PageHeader = ({
  children,
  breadcrumbs,
  className,
}) => (
  <div className={`page-header ${className || ''}`}>
    <ol className={`breadcrumb ${css.breadcrumbs}`}>
      {breadcrumbs.map(({
          label,
          url,
        }) => (
          <li className="breadcrumb-item" key={url + label}>
            {url ? <Link to={url}>{label}</Link> : label}
          </li>
        ))}
    </ol>
    <div className="page-header-actions">
      {children}
    </div>
  </div>
);

PageHeader.propTypes = propTypes;

export default enhance(PageHeader);
