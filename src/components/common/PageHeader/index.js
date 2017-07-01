import {
    string,
    object,
    arrayOf,
    array,
    shape,
    node,
    any,
} from 'prop-types';
import { Link } from 'react-router';

import { compose, pure, defaultProps } from 'recompose';

import css from './style.css';

const propTypes = {
    title: string,
    children: any,
    // privatePropTypes
};

export const getDefaultPropsEnhancer = defaultProps({
    breadcrumbs: [],
});

export const enhance = compose(
    getDefaultPropsEnhancer,
    pure
);

export const PageHeader = ({
    title,
    children,
    breadcrumbs,
    className,
}) =>
    (<div className={`page-header ${className ? className : ''}`}>
        <ol className={`breadcrumb ${css.breadcrumbs}`}>
          {breadcrumbs.map(({
            label,
            url
          }) => (
            <li className="breadcrumb-item" key={url + label}>
              {url ? <Link to={url}>{label}</Link> : label}
            </li>
          ))}
        </ol>
        <div className="page-header-actions">
            {children}
        </div>
    </div>)
;

PageHeader.propTypes = propTypes;

export default enhance(PageHeader);
