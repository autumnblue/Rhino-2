import {
    string,
    any,
} from 'prop-types';

import { pure } from 'recompose';

import css from './style.css';

const propTypes = {
    className: string,
    children: any,
};

const enhance = pure;

export const Page = ({
    className,
    children,
    ...props
}) =>
    (<div
        className={`page ${css.page} ${!!className ? className : ''}`}
        {...props}
    >
        {children}
    </div>)
;

Page.propTypes = propTypes;

export default enhance(Page);
