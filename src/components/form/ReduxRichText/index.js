import { compose, pure, lifecycle, toClass, withState } from 'recompose';
import { object, bool, func, string, arrayOf, oneOfType } from 'prop-types';
import React from 'react';
import ReactQuill from 'react-quill';

import { FieldError, RichText } from 'src/components';

const propTypes = {
  input: object.isRequired,
  disabled: bool,
  error: oneOfType([string, arrayOf(string)]),
};

const enhance = pure;

const ReduxRichText = ({
  input: { value, onChange, onBlur },
  editorClassName,
  disabled,
  error,
}) => (
  <div>
    <RichText
      readOnly={disabled}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    />
    <FieldError error={error} />
  </div>
);

ReduxRichText.propTypes = propTypes;

export default enhance(ReduxRichText);
