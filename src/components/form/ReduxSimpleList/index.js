import { omit } from 'lodash';
import { compose, pure } from 'recompose';
import { string, object } from 'prop-types';

import { SimpleList, FieldError } from 'src/components';
import { selectOptionsType } from 'src/prop-types';

const propTypes = {
  input: object.isRequired,
  options: selectOptionsType.isRequired,
  wrapperClassName: string,
  error: string,
};

const enhance = compose(
  pure,
);

const ReduxSimpleList = ({
  input: { value, onChange },
  options,
  error,
  wrapperClassName,

  ...props
}) => (
  <div className={wrapperClassName || ''}>
    <SimpleList
      onChange={onChange}
      values={value}
      options={options}
      {...omit(props, 'meta')}
    />
    <FieldError error={error} />
  </div>
);

ReduxSimpleList.propTypes = propTypes;

export default enhance(ReduxSimpleList);
