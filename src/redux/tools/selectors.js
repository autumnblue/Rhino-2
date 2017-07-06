import { createSelector } from 'reselect';

const getToolsIds = state => state.tools.ids;
const getToolsData = state => state.tools.data;

export const getTools = createSelector(
  [getToolsIds, getToolsData],
  (ids, data) => ids.map(id => data[id]),
);
