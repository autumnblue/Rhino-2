import { compose, pure, withPropsOnChange, withHandlers } from 'recompose';
import findings from 'src/data/findings';


const propsEnhancer = withPropsOnChange(['services'], () => ({
  findingsOptions: Object.entries(findings).map(([value, label]) => ({ value, label })),
  servicesOptions: [/* TODO */],
}));

const handlersEnhancer = withHandlers({
  // makes a short delay which runs onFieldChange after the store is updated
  onFieldChange: ({ onFieldChange }) => (...args) => setTimeout(() => onFieldChange(...args)),
});

export default compose(
  propsEnhancer,
  handlersEnhancer,
  pure,
);
