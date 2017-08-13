// we will need to add some features to button later
import { Input as ReactstrapInput } from 'reactstrap';
import { compose, pure, withHandlers, mapProps, withPropsOnChange } from 'recompose';
import { omit } from 'lodash';
import classNames from 'classnames';

import { FieldError } from 'src/components';

import css from './style.css';

const handlersEnhancer = withHandlers({
  onChange: ({ passValue, onChange }) => (evt) => {
    if (typeof onChange === 'function') {
      if (passValue) {
        return onChange(evt.target.value);
      }

      onChange(evt);
    }

    return undefined;
  },
});

const propsEnhancer = withPropsOnChange(
  ['addonPre', 'addonPost', 'wrapperClassName', 'error'],
  ({ addonPre, addonPost, wrapperClassName, error }) => ({
    wrapperClassName: classNames({
      [wrapperClassName]: !!wrapperClassName,
      'input-group': addonPre || addonPost,
      [css.wrapperOnError]: !!error,
    }),
  }),
);

const omitPropsEnhancer = mapProps(props => omit(props, ['passValue']));

const enhance = compose(
  handlersEnhancer,
  propsEnhancer,
  omitPropsEnhancer,
  pure,
);

const Input = ({
  error,
  wrapperClassName,
  addonPre,
  addonPost,
  ...props
}) => (
  <div className={wrapperClassName}>
    <Base exists={addonPre} className="input-group-addon">{addonPre}</Base>
    <ReactstrapInput {...props} />
    <Base exists={addonPost} className="input-group-addon" style={{ flexBreak: 'after' }}>{addonPost}</Base>
    <Base className={css.break} exists={error} />
    <FieldError error={error} />
  </div>
);

export default enhance(Input);
