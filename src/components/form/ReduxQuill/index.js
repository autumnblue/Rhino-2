import { pure } from 'recompose';
import { object, bool } from 'prop-types';
import React from 'react';
import ReactQuill from 'react-quill';

const propTypes = {
  input: object.isRequired,
  disabled: bool,
};

const enhance = pure;

const ReduxQuill = ({
                      input: { value, onChange },
                      ...props
                    }) => {
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

  return (<ReactQuill
    readOnly={props.disabled}
    onChange={onChange}
    value={value}
    modules={modules}
    formats={formats}
  />);
};

ReduxQuill.propTypes = propTypes;

export default enhance(ReduxQuill);
