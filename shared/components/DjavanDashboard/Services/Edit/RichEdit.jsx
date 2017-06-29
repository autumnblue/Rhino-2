import React, { Component } from 'react';

export default class RichEdit extends Component {
  constructor(props) {
    super(props)
    if (typeof window !== 'undefined') {
      this.ReactQuill = require('react-quill')
    }
  }

  render() {
    const ReactQuill = this.ReactQuill;
    const modules = {
      toolbar: [
        [{'header': [1, 2, false]}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
      ],
    };

    const formats = [
      'header',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image'
    ];

    return <div>
      {typeof window !== 'undefined' && ReactQuill &&
      <ReactQuill
        className="quill-rich-edit"
        onChange={this.props.onChange}
        onBlur={() => console.log('on blur') }
        value={this.props.value}
        modules={modules}
        formats={formats}
      />
      }
      <div className="clear-fix"></div>

    </div>
  }
}
