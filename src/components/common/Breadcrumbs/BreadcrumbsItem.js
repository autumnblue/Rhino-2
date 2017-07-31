import { compose, pure, withHandlers } from 'recompose';
import { Link } from 'react-router';

const handlersEnhancer = withHandlers({
  decoratedOnClick: ({ onClick }) => (evt) => {
    evt.preventDefault();
    onClick();
  }
});

const enhance = compose(
  handlersEnhancer,
  pure,
)

const BreadcrumbsItem = ({
  label,
  url,

  onClick,
  decoratedOnClick,
}) => (
  <li className="breadcrumb-item" key={url + label}>
    <Base exists={!!url} component={Link} to={url}>{label}</Base>
    <Base exists={!url && onClick} component="a" onClick={decoratedOnClick} href="#">{label}</Base>
    <Base exists={!url && !onClick} component="span">{label}</Base>
  </li>
);

export default enhance(BreadcrumbsItem)
