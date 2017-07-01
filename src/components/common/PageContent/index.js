import {
    string,
    any,
} from 'prop-types';

import { pure } from 'recompose';

const propTypes = {
    className: string,
    children: any,
};

const enhance = pure;

const PageContent = ({
    className,
    children,
    ...props
}) => (
    <div className={`page-content${className ? ` ${className}` : ''}`} {...props}>
        {children}
    </div>
);

PageContent.propTypes = propTypes;

export default enhance(PageContent);
