import { compose, pure, lifecycle, toClass, withState, withPropsOnChange } from 'recompose';
import { object, bool, func, string, arrayOf, oneOfType } from 'prop-types';
import React from 'react';
import ReactQuill from 'react-quill';
import classNames from 'classnames';

import { FieldError } from 'src/components';

import css from './style.css';

const propTypes = {
  input: object.isRequired,
  disabled: bool,

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

const propsEnhancer = withPropsOnChange(['className'], ({ className }) => ({
  className: classNames({
    [css.wrapper]: true,
    [className]: !!className
  })
}))

const refEnhancer = withState('reference', 'onSetRef', null);

// TODO: This should be killed once ReactQuill supports onBlur prop
const lifecycleEnhancer = lifecycle({
  componentDidMount() {
    // a little delay needs to be run before ReactQuill initialized
    setTimeout(() => {
      const { reference } = this.props;
      reference.editingArea.querySelector('.ql-editor').addEventListener('blur', () => {
        const { onBlur } = this.props;
        if(typeof onBlur === 'function') {
          onBlur();
        }
      });
    });
  },
});

const enhance = compose(
  propsEnhancer,
  refEnhancer,
  lifecycleEnhancer,
  pure,
  toClass,
);

const RichText = ({
  value,
  disabled,
  className,

  onSetRef,
  onChange,
}) => (
  <ReactQuill
    className={className}
    ref={onSetRef}
    readOnly={disabled}
    onChange={onChange}
    value={value}
    modules={modules}
    formats={formats}
  />
);

RichText.propTypes = propTypes;

export default enhance(RichText);
