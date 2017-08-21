import { string, node } from 'prop-types';
import { compose, pure, defaultProps } from 'recompose';

import { breadcrumbsType } from 'src/prop-types';
import { Breadcrumbs } from 'src/components';

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
    <Breadcrumbs breadcrumbs={breadcrumbs} />
    <div className="page-header-actions">
      {children}
    </div>
  </div>
);

PageHeader.propTypes = propTypes;

export default enhance(PageHeader);
