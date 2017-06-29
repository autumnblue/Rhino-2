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

    return <div>
      {typeof window !== 'undefined' && ReactQuill &&
      <ReactQuill
        className="quill-rich-edit"
        onChange={this.props.onChange}
        value={this.props.value}
        modules={modules}
        formats={formats}
      />
      }
      <div className="clear-fix"></div>

    </div>
  }
}
