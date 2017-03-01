import React from 'react';
import _ from 'lodash';
import MenuItem from 'material-ui/MenuItem';

const renderList = (data) =>
  _.map(data, (value, index) => <MenuItem value={value.id || value.value || value.name} key={index} primaryText={value.name || value.value} />);

export default renderList;
