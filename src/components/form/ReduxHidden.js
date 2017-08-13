// https://gist.github.com/finom/909e1162003e6b1214d907e04143d56f

import { Component } from 'react';

class ReduxFormHiddenField extends Component {
  componentWillMount() {
    const { onFill, input } = this.props;

    if (typeof onFill === 'function') {
      onFill(input.value);
    }
  }
  componentDidUpdate(prevProps) {
    const { onFill, input } = this.props;

    if (typeof onFill === 'function' && input.value !== prevProps.input.value) {
      onFill(input.value);
    }
  }
  render() {
    return null;
  }
}

export default ReduxFormHiddenField;
