import { lifecycle } from 'recompose';

export default lifecycle({
  componentDidMount(props) {
    this.props.onInitialize();
  },
});
