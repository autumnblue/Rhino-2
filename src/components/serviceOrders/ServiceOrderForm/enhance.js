import { compose, pure, withHandlers, withPropsOnChange, withState } from 'recompose';

import objectToOptions from 'src/helpers/objectToOptions';

const handlersEnhancer = withHandlers({
  // makes a short delay which runs onFieldChange after the store is updated
  onFieldChange: ({ onFieldChange }) => (...args) => setTimeout(onFieldChange, 0, ...args),
});

const propsEnhancer = withPropsOnChange(
  ['choices', 'clients', 'users', 'industries', 'focalProfiles'],
  ({ choices, clients, users, industries, focalProfiles }) => ({
    statusOptions: objectToOptions(choices.status),
    paymentOptions: objectToOptions(choices.payment),
    clientOptions: clients.map(({ name, id }) => ({
      label: name,
      value: id,
    })),
    usersOptions: users.map(({ first_name, last_name, id }) => ({
      label: `${first_name} ${last_name}`,
      value: id,
    })),
    industriesOptions: industries.map(({ name, id }) => ({
      label: name,
      value: id,
    })),
    focalProfileOptions: focalProfiles.map(({ name, id }) => ({
      label: name,
      value: id,
    })),
  })
);


export default compose(
  handlersEnhancer,
  propsEnhancer,
  pure,
);
