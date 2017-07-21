import { compose, pure, lifecycle, toClass, withState } from 'recompose';
import { object, bool, func, string } from 'prop-types';
import React from 'react';
import ReactQuill from 'react-quill';

import { FieldError } from 'src/components';

const propTypes = {
  input: object.isRequired,
  disabled: bool,
  error: string,

  onSetRef: func.isRequired,
};

const modules = {
  toolbar: [
    [{ font: [] }, { size: [] }],
    [{ align: [] }, 'direction'],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ script: 'super' }, { script: 'sub' }],
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image', 'video'],
    ['clean'],
  ],
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image',
];

// TODO: This should be killed once ReactQuill supports onBlur prop
const lifecycleEnhancer = lifecycle({
  componentDidMount() {
    // a little delay needs to be run before ReactQuill initialized
    setTimeout(() => {
      const { reference, input: { onBlur } } = this.props;
      reference.editingArea.querySelector('.ql-editor').addEventListener('blur', () => {
        onBlur();
      });
    });
  },
});

const refEnhancer = withState('reference', 'onSetRef', null);

const enhance = compose(
  refEnhancer,
  lifecycleEnhancer,
  pure,
  toClass,
);

const ReduxQuill = ({
  input: { value, onChange },
  disabled,
  error,

  onSetRef,
}) => (
  <div>
    <ReactQuill
      ref={onSetRef}
      readOnly={disabled}
      onChange={onChange}
      value={value}
      modules={modules}
      formats={formats}
    />
    <FieldError error={error} />
  </div>
);

ReduxQuill.propTypes = propTypes;

export default enhance(ReduxQuill);
