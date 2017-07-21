import { compose, pure, withHandlers, withPropsOnChange } from 'recompose';

const handlersEnhancer = withHandlers({
  // makes a short delay which runs onFieldChange after the store is updated
  onFieldChange: ({ onFieldChange }) => (...args) => setTimeout(() => onFieldChange(...args)),
});


const propsEnhancer = withPropsOnChange(['issuers'], ({ categories, issuers }) => ({
  categoryOptions: Object.entries(categories).map(([value, label]) => ({
    value,
    label,
  })),
  issuerOptions: issuers.map(({ name, id }) => ({
    value: id,
    label: name,
  })),
}));

export default compose(
  handlersEnhancer,
  propsEnhancer,
  pure,
);
