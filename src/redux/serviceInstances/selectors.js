export const getServiceInstancesData = state => state.serviceInstances.data;
export const getSpecifiedServiceInstance =
  (state, id) => state.serviceInstances.data[id];
