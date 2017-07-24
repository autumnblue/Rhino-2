import { compose, pure, withHandlers, withPropsOnChange } from 'recompose';

const handlersEnhancer = withHandlers({
  // makes a short delay which runs onFieldChange after the store is updated
  onFieldChange: ({ onFieldChange }) => (...args) => setTimeout(() => onFieldChange(...args)),
});

const propsEnhancer = withPropsOnChange(['choices'], ({ choices }) => ({
  engagementTypeOptions: Object.entries(choices.engagement_type).map(([value, label]) => ({
    value,
    label,
  })),
}));

export default compose(
  handlersEnhancer,
  propsEnhancer,
  pure,
);
