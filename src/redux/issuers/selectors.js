import { createSelector } from 'reselect';

const getIssuersIds = state => state.issuers.ids;
const getIssuersData = state => state.issuers.data;

export const getIssuers = createSelector(
    [getIssuersIds, getIssuersData],
    (ids, data) => ids.map(id => data[id]),
);
