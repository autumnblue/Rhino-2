import { compose, pure, withHandlers, withPropsOnChange } from 'recompose';

import objectToOptions from 'src/helpers/objectToOptions';

const handlersEnhancer = withHandlers({
  // makes a short delay which runs onFieldChange after the store is updated
  onFieldChange: ({ onFieldChange }) => (...args) => setTimeout(onFieldChange, 0, ...args),
  onAddServiceGroup: ({ onAddServiceGroup, id }) => () => onAddServiceGroup({
    service_order: id,
    commit: true
  })
});

const propsEnhancer = withPropsOnChange(
  ['choices', 'clients', 'users', 'industries', 'focalProfiles', 'services'],
  ({ choices, clients, users, industries, focalProfiles, services }) => ({
    statusOptions: objectToOptions(choices.status),
    paymentOptions: objectToOptions(choices.payment),
    clientOptions: clients.map(({ name, id }) => ({
      label: name,
      value: id,
    })),
    userOptions: users.map(({ first_name, last_name, username, id }) => ({
      label: first_name && last_name ? `${first_name} ${last_name}` : username,
      value: id,
    })),
    industryOptions: industries.map(({ name, id }) => ({
      label: name,
      value: id,
    })),
    focalProfileOptions: focalProfiles.map(({ title, id }) => ({
      label: title || 'No title',
      value: id,
    })),
    serviceOptions: services.map(({ name, id }) => ({
      label: name,
      value: id,
    })),
  }),
);


export default compose(
  handlersEnhancer,
  propsEnhancer,
  pure,
);
