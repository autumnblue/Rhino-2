import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import DebounceInput from 'react-debounce-input';
import Paper from 'material-ui/Paper';
import ToolItem from 'ToolItem.jsx';

export default class tools extends Component {

  componentDidMount() {
    this.props.fetchTools(this.props.filter);
  }

  render() {
    return (
      <div className="tools-block">
        {this.props.loading && <div className="tools-loading">Loading...</div>}
        <Paper className="tools-block-header">
          <div className="tools-block-filter">
            <DebounceInput
              type="text"
              className="tools-block-filter-input"
              debounceTimeout={300}
              placeholder="Filter..."
              onChange={(event) => {this.props.filterChanged(event.target.value)}}/>
          </div>
          <div className="tools-block-create">
            <FontAwesome
              className='tools-edit-arrow'
              name='plus-circle'
              size='2x'
              style={{ cursor: 'pointer' }}
              onClick={() => {this.props.edit()}}
            />
          </div>
        </Paper>
        {this.props.tools.map((tool) =>
          <ToolItem
            tool={tool}
            key={tool.id}
            orderChanged={(id, value) => {this.props.orderChanged(id, value, this.props.filter)}}
            edit={this.props.edit}
          />
        )}
      </div>
    )
  }
}
