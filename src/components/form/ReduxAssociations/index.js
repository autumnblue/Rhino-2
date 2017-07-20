import { omit } from 'lodash';
import { compose, pure } from 'recompose';
import { string, object } from 'prop-types';

import { Associations, FieldError } from 'src/components';
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

const ReduxAssociations = ({
  input: { value, onChange },
  options,
  error,
  wrapperClassName,

  ...props
}) => (
  <div className={wrapperClassName || ''}>
    <Associations
      onChange={onChange}
      values={value}
      options={options}
      {...omit(props, 'meta')}
    />
    <FieldError error={error} />
  </div>
);

ReduxAssociations.propTypes = propTypes;

export default enhance(ReduxAssociations);
