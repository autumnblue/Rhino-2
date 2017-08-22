import { compose, pure, withHandlers, withState } from 'recompose';

const handlersEnhancer = withHandlers({
  // makes a short delay which runs onFieldChange after the store is updated
  onFieldChange: ({ onFieldChange }) => (...args) => setTimeout(() => onFieldChange(...args)),
});

const profileTypeEnhancer = withState('profileType', 'onSetProfileType');

export default compose(
  handlersEnhancer,
  profileTypeEnhancer,
  pure,
);
