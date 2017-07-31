import { pure } from 'recompose';


import BreadcrumbsItem from './BreadcrumbsItem';
import css from './style.css';

const enhance = pure;

const Breadcrumbs = ({
  breadcrumbs,
  className,
}) => (
  <ol className={`breadcrumb ${css.breadcrumbs} ${className ? className : ''}`}>
    {breadcrumbs.map(({
        label,
        url,
        onClick
      }) => (
        <BreadcrumbsItem label={label} url={url} onClick={onClick} />
      ))}
  </ol>
)

export default enhance(Breadcrumbs);
