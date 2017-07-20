import { omit } from 'lodash';
import { pure } from 'recompose';
import { string, object } from 'prop-types';
import React, { Component } from 'react';
import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill'
import theme from 'react-quill/dist/quill.snow.css'

const propTypes = {
  input: object.isRequired,
};

const enhance = pure;

const ReduxQuill = ({
                      input: { value, onChange },
                      ...props
                    }) => {
  const modules = {
    toolbar: [
      [{ font: [] }, { size: [] }],
      [{ align: [] }, 'direction' ],
      [ 'bold', 'italic', 'underline', 'strike' ],
      [{ color: [] }, { background: [] }],
      [{ script: 'super' }, { script: 'sub' }],
      ['blockquote', 'code-block' ],
      [{ list: 'ordered' }, { list: 'bullet'}, { indent: '-1' }, { indent: '+1' }],
      [ 'link', 'image', 'video' ],
      [ 'clean' ]
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  const change = (t) => {
    console.log(t);
    onChange(t);
  }

  return <ReactQuill
    onChange={change}
    value={value}
    modules={modules}
    formats={formats}
  />
};

ReduxQuill.propTypes = propTypes;

export default enhance(ReduxQuill);
